import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import Book from "../../assets/imgs/BookCar/Book.png";
import styles from "./BookCarComing.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { socketCustomer } from "../../../src/service/socket";
import useAxios from "../../hooks/useAxios";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import MapView, { Polyline, Marker } from "react-native-maps";

const BookCarComing = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const route = useRoute();
  const idDriver = route.params.idDriver;

  const [infoDriver, setInfoDriver] = useState(null);
  const [locationDriver, setLocationDriver] = useState(null);

  useEffect(() => {
    if (infoDriver === null) {
      try {
        axios
          .get(`http://192.168.1.9:3002/driver/${idDriver}`, {})
          .then(async (response) => {
            console.log(infoDriver);
            setInfoDriver(response.data.data);
          })
          .catch((error) => {
            console.error("Lỗi khi gọi API:", error);
            Alert.alert("Đã xảy ra lỗi khi gọi API. Vui lòng thử lại sau.");
          });
      } catch (error) {
        // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng.
        console.error("Thất bại", error);
      }
    }
  }, []);

  useEffect(() => {
    socketCustomer.on("followDriver", (message) => {
      console.log(message);
      if (message) setLocationDriver(message);
    });
  }, [locationDriver]); // Thêm getFlag vào danh sách phụ thuộc

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcarcoming__container}>
        <View style={styles["bookcarcoming__container-maps"]}>
          {locationDriver && (
            <MapView
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: locationDriver.lat,
                longitude: locationDriver.lng,
                latitudeDelta: 0.016,
                longitudeDelta: 0.05,
              }}
              region={{
                latitude: locationDriver.lat,
                longitude: locationDriver.lng,
                latitudeDelta: 0.016,
                longitudeDelta: 0.05,
              }}
            >
              {locationDriver && (
                <Marker
                  coordinate={{
                    latitude: locationDriver.lat,
                    longitude: locationDriver.lng,
                  }}
                  title="Your location"
                />
              )}
            </MapView>
          )}
        </View>

        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: "100%",
            bottom: 0,
          }}
        >
          <View style={styles["bookcarcoming__container-time"]}>
            <Text style={styles["bookcarcoming__container-time-title"]}>
              Tài xế đang đến
            </Text>

            <Text style={styles["bookcarcoming__container-time-title"]}>
              4 phút
            </Text>
          </View>

          <View style={styles["bookcarcoming__container-info"]}>
            <View style={styles["bookcarcoming__container-info-left"]}>
              <View style={{ marginRight: 10 }}>
                <Image source={Book} style={{ width: 48, height: 48 }} />
              </View>

              <View>
                <Text style={styles["bookcarcoming__container-info-left-name"]}>
                  {infoDriver !== null ? infoDriver.fullname : ""}
                </Text>

                <View
                  style={styles["bookcarcoming__container-info-left-wrapper"]}
                >
                  <Text
                    style={styles["bookcarcoming__container-info-left-star"]}
                  >
                    {infoDriver ? infoDriver.rating : ""}
                  </Text>

                  <FontAwesomeIcon icon={faStar} size={12} color="yellow" />
                </View>
              </View>
            </View>

            <View style={styles["bookcarcoming__container-info-right"]}>
              <Text style={styles["bookcarcoming__container-info-right-title"]}>
                {infoDriver && infoDriver.transport
                  ? infoDriver.transport.code
                  : ""}
              </Text>

              <Text
                style={styles["bookcarcoming__container-info-right-content"]}
              >
                {infoDriver && infoDriver.transport
                  ? infoDriver.transport.color
                  : ""}
              </Text>
            </View>
          </View>

          <View style={styles["bookcarcoming__container-message"]}>
            <Pressable
              style={styles["bookcarcoming__container-message-left"]}
              onPress={() => {
                navigation.navigate("/bookcar-chat");
              }}
            >
              <FontAwesomeIcon icon={faCommentDots} size={24} color="#5a5959" />
              <Text style={styles["bookcarcoming__container-message-content"]}>
                Chat với tài xế
              </Text>
            </Pressable>

            <View style={styles["bookcarcoming__container-message-right"]}>
              <FontAwesomeIcon
                icon={faPhone}
                size={24}
                color="#5a5959"
                style={styles["bookcarcoming__container-message-right-ic"]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default BookCarComing;
