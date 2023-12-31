import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faLocationDot,
  faArrowRightLong,
  faPlus,
  faA,
  faChevronDown,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from "./HomeScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import useAxios from "../../hooks/useAxios";

const BookCar = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();
  const [responseProduct, errorProduct, isLoadingProduct] = useAxios(
    "get",
    "/payments",
    {},
    {},
    []
  );

  useEffect(() => {
    if (responseProduct && responseProduct.data !== undefined) {
      console.log(responseProduct.data);
    }
  }, [isLoadingProduct]);

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
          onPress={() => navigation("/bookcar-pickup")}
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
              8 : 45 25/06/2023
            </Text>

            <FontAwesomeIcon icon={faCalendar} size={24} color="#fff" />
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
            <View style={styles["bookcar__container-payment-left"]}>
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
            </View>

            <View style={styles["bookcar__container-payment-right"]}>
              <Text style={styles["bookcar__container-payment-right-title"]}>
                Ưu đãi
              </Text>
            </View>
          </View>

          <Pressable onPress={() => navigation("/bookcar-destroy")}>
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
