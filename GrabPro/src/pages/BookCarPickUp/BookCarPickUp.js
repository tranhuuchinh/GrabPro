import React from "react";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faA } from "@fortawesome/free-solid-svg-icons";
import Map from "../../assets/imgs/BookCar/masicle.png";
import styles from "./BookCarPickUp.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
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

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcarchoicedes__container}>
        <View style={styles["bookcarchoicedes__container-maps"]}>
          <Image
            source={Map}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>

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
