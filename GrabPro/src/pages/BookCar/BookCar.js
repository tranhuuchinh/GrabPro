import React, { useState } from "react";
import { Image, Text, View, Pressable, ToastAndroid } from "react-native";
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

const BookCar = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

  // const showDateTimePicker = () => {
  //   setShowDatePicker(true);
  // };

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
          <Image source={HaLinh} style={{ width: "100%", height: "100%" }} />
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
