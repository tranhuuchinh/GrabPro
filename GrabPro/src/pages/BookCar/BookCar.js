import React, { useState, useEffect } from "react";
import { Image, Text, View, Pressable, Button, FlatList, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from "./BookCar.style";
import { useCustomFonts } from "../../styles/fonts";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import MapView, { Marker, Polyline } from 'react-native-maps';
// import Geolocation from "@react-native-community/geolocation";

const BookCar = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // 10.7681 106.6953 10.7625 106.6827

  const [location1, setLocation1] = useState({ latitude: 10.7681, longitude: 106.6953 });
  const [location2, setLocation2] = useState({ latitude: 10.7625, longitude: 106.6827 });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [distance, setDistance] = useState(null);

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const calculateDistance = () => {
    if (location1.latitude !== 0 && location1.longitude !== 0 && location2.latitude !== 0 && location2.longitude !== 0) {
      const R = 6371; // Earth's radius in kilometers
      const dLat = deg2rad(location2.latitude - location1.latitude);
      const dLon = deg2rad(location2.longitude - location1.longitude);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(location1.latitude)) * Math.cos(deg2rad(location2.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in kilometers
      setDistance(distance.toFixed(2)); // Set distance with 2 decimal places
    } else {
      setDistance(null);
    }
  };

  const searchPlaces = async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchKeyword}`;
      const response = await axios.get(url);
      const results = response.data;

      setSearchResults(results);
      
      // Lấy tọa độ của địa điểm đầu tiên trong kết quả tìm kiếm
      if (results.length > 0) {
        const firstResult = results[0];
        setLatitude(parseFloat(firstResult.lat));
        setLongitude(parseFloat(firstResult.lon));
      } else {
        // Nếu không có kết quả, xóa tọa độ hiện tại
        setLatitude(null);
        setLongitude(null);
      }

      calculateDistance();
    } catch (error) {
      console.error('Error searching places:', error);
    }
  };

  useEffect(() => {
    const getInitialLocation = async () => {
      // Một ví dụ tạm thời: sử dụng tọa độ của Hà Nội
      setLatitude(21.0285);
      setLongitude(105.8542);
    };

    getInitialLocation();
  }, []);

  const handleDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    // setShowDatePicker(Platform.OS === 'ios'); // For iOS only
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setShowTimePicker(true);
  };

  const handleTimeChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowTimePicker(false);
    setSelectedDate(currentDate);
  };

  // Format the selected date as dd/mm/yyyy
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Format the selected time as hh:mm (24-hour format)
  const formattedTime = selectedDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour format
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcar__container}>
        {/* <View style={styles["bookcar__container-maps"]}>
          <Image source={HaLinh} style={{ width: "100%", height: "100%" }} />
        </View> */}
        <View style={styles["bookcar__container-maps"]}>
          {/* Hiển thị bản đồ */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.0005,
            }}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.0005,
            }}
            >
            {/* Hiển thị đánh dấu tại vị trí người dùng */}
            {latitude && longitude && (
              <Marker
                coordinate={{ latitude, longitude }}
                title="Your location"
              />
            )}
          </MapView>
          {/* <Text style={styles.text}>Current Address:</Text> */}
          {/* <Text style={styles.address}>{address}</Text> */}
          {/* <Button title="Reverse Geocode" onPress={reverseGeocode} /> */}
        </View>

        <View>
          <Text>Search for a place:</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            value={searchKeyword}
            onChangeText={(text) => setSearchKeyword(text)}
          />
          <Button title="Search" onPress={searchPlaces} />

          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 5 }}>
                <Text>Name: {item.display_name}</Text>
                <Text>Latitude: {item.lat}</Text>
                <Text>Longitude: {item.lon}</Text>
                <Text>Distance: {distance}</Text>
              </View>
            )}
          />
        </View>

        <Pressable
          style={styles["bookcar__container-back"]}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        </Pressable>

        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: "100%",
            bottom: 0,
            display: "none"
          }}
        >
          <View style={styles["bookcar__container-timer"]}>
            <Text style={styles["bookcar__container-timer-title"]}>
              Chọn khung giờ:
            </Text>

            <Text style={styles["bookcar__container-timer-content"]}>
              {formattedTime ? formattedTime : "hh:mm"}{" "}
              {formattedDate ? formattedDate : "dd/mm/yyyy"}
            </Text>

            {!showDatePicker && !showTimePicker && (
              <Pressable onPress={() => setShowDatePicker(true)}>
                <FontAwesomeIcon icon={faCalendar} size={24} color="#fff" />
              </Pressable>
            )}

            {showDatePicker && (
              <DateTimePicker
                testID="datePicker"
                value={selectedDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
                locale="vi-VN"
              />
            )}

            {showTimePicker && (
              <DateTimePicker
                testID="timePicker"
                value={selectedDate}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
                locale="vi-VN"
              />
            )}
          </View>

          <View style={styles["bookcar__container-location"]}>
            <View style={{ width: "10%" }}>
              <Image source={CarV2} style={{ width: 41, height: 37 }} />
            </View>

            <View style={{ width: "60%", marginLeft: 20 }}>
              <Text style={styles["bookcar__container-location-title"]}>
                GrabCar
              </Text>
              <Text style={styles["bookcar__container-location-content"]}>
                Tối đa 4 hành khách
              </Text>
            </View>

            <Text style={styles["bookcar__container-location-price"]}>
              61.000đ
            </Text>
          </View>

          <View style={styles["bookcar__container-payment"]}>
            <Pressable style={styles["bookcar__container-payment-left"]}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <FontAwesomeIcon icon={faCreditCard} size={16} color="#000" />
                <Text style={styles["bookcar__container-payment-left-title"]}>
                  Tiền mặt
                </Text>
              </View>

              <FontAwesomeIcon icon={faChevronDown} size={16} color="#000" />
            </Pressable>

            <View style={styles["bookcar__container-payment-right"]}>
              <Text style={styles["bookcar__container-payment-right-title"]}>
                Ưu đãi
              </Text>
            </View>
          </View>

          <Pressable onPress={() => navigation.navigate("/bookcar-destroy")}>
            <Text style={styles["bookcar__container-button"]}>
              Đặt xe GrabCar
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default BookCar;
