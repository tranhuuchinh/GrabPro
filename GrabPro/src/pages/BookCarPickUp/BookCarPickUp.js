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

const BookCarPickUp = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  //Ở chỗ này lấy được location hiện tại của bản thân và đích đến để hiển thị lên bản đồ
  const getStateCommand = StateManager.getState(); //Lấy được tung độ và hoành độ của đích đến

  console.log(getStateCommand);

  const handleBack = () => {
    navigation.goBack();
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  // const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [coordinate, setCoordinate] = useState([]);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  // Tính toán và hiển thị đường đi khi destination thay đổi
useEffect(() => {
  if (currentLocation && destination) {
    var request = new XMLHttpRequest();

    request.open('GET', `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114&start=${currentLocation.longitude},${currentLocation.latitude}&end=${destination.longitude},${destination.latitude}`);

    request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const responseObj = JSON.parse(this.responseText);

        const coordinatesA = responseObj.features[0].geometry.coordinates.map((coord) => {
          return {
            latitude: coord[1],
            longitude: coord[0],
          }
        });
        setCoordinate(coordinatesA);
      }
    };

    request.send();
  }
}, [currentLocation, destination]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcarchoicedes__container}>
        {/* <View style={styles["bookcarchoicedes__container-maps"]}>
          <Image source={HaLinh} style={{ width: "100%", height: "100%" }} />
        </View> */}

          {currentLocation && (
            <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
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
            {
              coordinate.length - 1 > 0 && (
                <Marker
                coordinate={coordinate[coordinate.length - 1]}
                title="Destination"
                icon={faChevronLeft}
                pinColor="green"
              />
              )
            }

            <Polyline
              coordinates={coordinate}
              strokeColor="#58BC6B"
              strokeWidth={3}
            />
           </MapView>
          )}

          {/* <Button style={{
            position: "absolute",
            bottom: 0,
          }} title="haha" onPress={() => setDestination({latitude: 10.1231, longitude: 106.1231})} /> */}


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
                Trường Đại học Khoa học tự nhiên
              </Text>
              <Text
                style={styles["bookcarchoicedes__container-location-content"]}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                135b Trần Hưng Đạo, P.Cầu Ông Lãnh, Q.1, Hồ Chí Minh
              </Text>
            </View>

            <Pressable
              style={styles["bookcarchoicedes__container-location-button"]}
              onPress={() => {
                navigation.navigate("/bookcar-pickup-dt");
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
