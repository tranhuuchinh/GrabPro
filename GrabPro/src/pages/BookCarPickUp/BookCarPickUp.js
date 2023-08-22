import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, View, TextInput, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faA } from "@fortawesome/free-solid-svg-icons";
import Map from "../../assets/imgs/BookCar/masicle.png";
import styles from "./BookCarPickUp.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import MapView, { Polyline, Marker } from "react-native-maps";
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import * as Location from "expo-location";
import StateManager from "../../service/commandbook/receiver";
import { useRoute } from "@react-navigation/native";
import { SetFromCommand } from "../../service/commandbook/command";

const BookCarPickUp = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  //Ở chỗ này lấy được location hiện tại của bản thân và đích đến để hiển thị lên bản đồ
  const getStateCommand = StateManager.getState(); //Lấy được tung độ và hoành độ của đích đến

  // Lấy dữ liệu từ BookCarHome gửi qua bằng navigate
  const route = useRoute();
  const destinationSearch = route.params.locationTo;

  const handleBack = () => {
    navigation.goBack();
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [dataAddress, setDataAddress] = useState("");
  const [nameAddress, setNameAddress] = useState("");

  const getAddress = async (latitude, longitude) => {
    const address = await Location.reverseGeocodeAsync({
      latitude: latitude,
      longitude: longitude,
    });

    if (address.length > 0) {
      const formattedAddress = `${address[0].name ? address[0].name : ''} ${address[0].street ? address[0].street : ''}, ${address[0].subregion ? address[0].subregion : ''}, ${address[0].region ? address[0].region : ''}`;
      setDataAddress(formattedAddress);
      setNameAddress(`${address[0].name ? address[0].name : ''} ${address[0].street ? address[0].street : ''}`);
    }
  }

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    if (getStateCommand.from === null) {
      try {
        const location = await Location.getCurrentPositionAsync({});
  
        getAddress(location.coords.latitude, location.coords.longitude);
        
        setCurrentLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
      } catch (error) {
        console.error("Error getting location:", error);
      }
    }
    else{
      setCurrentLocation({latitude: getStateCommand.from.lat, longitude: getStateCommand.from.lng});
      getAddress(getStateCommand.from.lat, getStateCommand.from.lng);
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const setLocationFrom = {
        address: nameAddress,
        lat: currentLocation.latitude,
        lng: currentLocation.longitude
      };
  
      const setFrom = new SetFromCommand(StateManager, setLocationFrom);
      setFrom.execute();
    }
  }, [nameAddress])

  useEffect(() => {
    if (route.params.locationFrom) {
      setCurrentLocation(route.params.locationFrom);
      getAddress(route.params.locationFrom.latitude, route.params.locationFrom.longitude);
    }
  }, [route.params.locationFrom]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcarchoicedes__container}>
          {currentLocation && (
            <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.0005,
            }}
            region={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.0005,
            }}
          >
            {/* Hiển thị đánh dấu tại vị trí người dùng */}
            {currentLocation && (
              <Marker
                coordinate={currentLocation}
                title="Your location"
              />
            )}
           </MapView>
          )}

        <Pressable
          style={styles["bookcarchoicedes__container-back"]}
          onPress={handleBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        </Pressable>

        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: "100%",
            bottom: 0,
          }}
        >
          <View style={styles["bookcarchoicedes__container-location"]}>
            <View style={{ width: "75%" }}>
              <Text
                style={styles["bookcarchoicedes__container-location-title"]}
              >
                {nameAddress}
              </Text>
              <Text
                style={styles["bookcarchoicedes__container-location-content"]}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {dataAddress}
              </Text>
            </View>

            <Pressable
              style={styles["bookcarchoicedes__container-location-button"]}
              onPress={() => {
                navigation.navigate("/bookcar-pickup-dt", {from: {coor: currentLocation, info: dataAddress}, to: destinationSearch});
              }}
            >
              <Text
                style={
                  styles["bookcarchoicedes__container-location-button-title"]
                }
              >
                Thay đổi
              </Text>
            </Pressable>
          </View>

          <Text style={styles["bookcarchoicedes__container-title"]}>
            Chọn địa điểm đón
          </Text>

          <View style={styles["bookcarchoicedes__container-wrapper"]}>
            <FontAwesomeIcon
              icon={faA}
              size={12}
              style={styles["bookcarchoicedes__container-gate-ic"]}
            />

            <Text style={styles["bookcarchoicedes__container-gate-title"]}>
              Cổng chính
            </Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("/bookcar-book");
            }}
          >
            <Text style={styles["bookcarchoicedes__container-button"]}>
              Chọn điểm đón này
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default BookCarPickUp;
