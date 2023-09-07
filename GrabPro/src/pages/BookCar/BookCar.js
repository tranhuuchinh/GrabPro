import React, { useState, useEffect } from "react";
import { Image, Text, View, Pressable, Button, FlatList, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from "./BookCar.style";
import { useCustomFonts } from "../../styles/fonts";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline } from 'react-native-maps';
import StateManager from "../../service/commandbook/receiver";
import { SetTimeCommand, SetTypeCommand, SetDistanceCommand } from "../../service/commandbook/command";
import { socketCustomer } from "../../../src/service/socket";

const BookCar = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const getStateCommand = StateManager.getState();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [active, setActive] = useState('4seats');
  const [dateActive, setDateActive] = useState(false);
  const [timeActive, setTimeActive] = useState(false);

  const [locationFrom, setLocationFrom] = useState({ latitude: getStateCommand.from.lat, longitude: getStateCommand.from.lng });
  const [locationTo, setLocationTo] = useState({ latitude: getStateCommand.to.lat, longitude: getStateCommand.to.lng });
  const [coordinate, setCoordinate] = useState([]);

  // const deg2rad = (deg) => {
  //   return deg * (Math.PI / 180);
  // };

  // // Hàm tính khoảng cách đường chim bay
  // const calculateDistance = () => {
  //   if (locationFrom.latitude !== 0 && locationFrom.longitude !== 0 && locationTo.latitude !== 0 && locationTo.longitude !== 0) {
  //     const R = 6371; // Earth's radius in kilometers
  //     const dLat = deg2rad(locationTo.latitude - locationFrom.latitude);
  //     const dLon = deg2rad(locationTo.longitude - locationFrom.longitude);
  //     const a =
  //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //       Math.cos(deg2rad(locationFrom.latitude)) * Math.cos(deg2rad(locationTo.latitude)) *
  //       Math.sin(dLon / 2) * Math.sin(dLon / 2);
  //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //     const distance = R * c; // Distance in kilometers
      
  //     const setDistance = new SetDistanceCommand(StateManager, parseFloat(distance.toFixed(2)));
  //     setDistance.execute();
  //   }
  // };

  // Tính toán và hiển thị đường đi và khoảng cách đường chim bay
  useEffect(() => {
    if (locationFrom && locationTo) {
      var request = new XMLHttpRequest();

      request.open('GET', `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114&start=${locationFrom.longitude},${locationFrom.latitude}&end=${locationTo.longitude},${locationTo.latitude}`);

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

          const setDistance = new SetDistanceCommand(StateManager, Math.round((responseObj.features[0].properties.segments[0].distance / 1000) * 100) / 100);
          setDistance.execute();

          setCoordinate(coordinatesA);
        }
      };

      request.send();
  
      // lấy 4 driver có khoảng cách đường chym bay gần nhất
      socketCustomer.on("findDriver", (message) => {
        console.log('cc');
        console.log(message);
      });
    }
  }, []);

  const handlePressOto4seats = () => {
    setActive('4seats');
    const setType = new SetTypeCommand(StateManager, "4seats");
    setType.execute();
  };

  const handlePressOto7seats = () => {
    setActive('7seats');
    const setType = new SetTypeCommand(StateManager, "7seats");
    setType.execute();
  };

  // Hàm kiểm tra ngày có hợp lệ không
  const isDateValid = (date) => {
    const currentDate = new Date();
    return date >= currentDate;
  };

  const handleDateChange = (event, selected) => {
    const currentDate = new Date(); // Lấy ngày hiện tại
    const checkSelectedDate =  currentDate || selected;

    if (isDateValid(checkSelectedDate)) {
      setShowDatePicker(false);
      setSelectedDate(checkSelectedDate);
      setShowTimePicker(true);
      setDateActive(true);
    } else {
      setShowDatePicker(false);
    }
  };

  // Hàm kiểm tra giờ có hợp lệ không
  const isTimeValid = (time) => {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    
    // Lấy giờ và phút đã chọn
    const selectedHour = time.getHours();
    const selectedMinute = time.getMinutes();
    
    // So sánh giờ và phút đã chọn với giờ hiện tại
    if (selectedHour > currentHour) {
      return true; // Giờ đã chọn sau giờ hiện tại
    } else if (selectedHour === currentHour && selectedMinute >= currentMinute) {
      return true; // Giờ và phút đã chọn sau giờ và phút hiện tại
    } else {
      return false; // Giờ và phút đã chọn trước giờ hiện tại
    }
  };

  const handleTimeChange = (event, selected) => {
    const currentDate = selected || selectedDate;

    if (isTimeValid(currentDate)) {
      setShowTimePicker(false);
      setSelectedDate(currentDate);
      setTimeActive(true);
    } else {
      setShowTimePicker(false);
    }
  };

  useEffect(() => {
    if (timeActive) {
      //Thay đổi thời gian thì gọi lại đoạn code này
      const setTime = new SetTimeCommand(StateManager, selectedDate);
      setTime.execute();
    }
  }, [timeActive])

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
        <View style={styles["bookcar__container-maps"]}>
          {/* Hiển thị bản đồ */}
          {locationFrom && locationTo && (
            <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: locationFrom.latitude,
              longitude: locationFrom.longitude,
              latitudeDelta: 0.08,
              longitudeDelta: 0.05,
            }}
            region={{
              latitude: locationFrom.latitude,
              longitude: locationFrom.longitude,
              latitudeDelta: 0.08,
              longitudeDelta: 0.05,
            }}
          >
            {/* Hiển thị đánh dấu tại vị trí người dùng */}
            {locationFrom && (
              <Marker
                coordinate={locationFrom}
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
            zIndex: 10
          }}
        >
          <View style={styles["bookcar__container-timer"]}>
            <Text style={styles["bookcar__container-timer-title"]}>
              Chọn khung giờ:
            </Text>

            <Text style={styles["bookcar__container-timer-content"]}>
              {!timeActive ? "hh:mm" : formattedTime}{" "}
              {!dateActive ? "dd/mm/yyyy" : formattedDate}
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

          <Pressable onPress={()=> handlePressOto4seats()}>
            <View style={{
              ...styles["bookcar__container-location"],
              backgroundColor: active === '4seats' ? "#EFF9F8" : '#fff' // 'initial' hoặc giá trị mặc định của background color
            }} onPress={()=> setActive('4seats')}>
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
          </Pressable>

          <Pressable onPress={()=> handlePressOto7seats()}>
            <View style={{
              ...styles["bookcar__container-location"],
              backgroundColor: active === '7seats' ? "#EFF9F8" : '#fff' // 'initial' hoặc giá trị mặc định của background color
            }}>
              <View style={{ width: "10%" }}>
                <Image source={CarV2} style={{ width: 41, height: 37 }} />
              </View>

              <View style={{ width: "60%", marginLeft: 20 }}>
                <Text style={styles["bookcar__container-location-title"]}>
                  GrabCar
                </Text>
                <Text style={styles["bookcar__container-location-content"]}>
                  Tối đa 7 hành khách
                </Text>
              </View>

              <Text style={styles["bookcar__container-location-price"]}>
                61.000đ
              </Text>
            </View>
          </Pressable>


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
