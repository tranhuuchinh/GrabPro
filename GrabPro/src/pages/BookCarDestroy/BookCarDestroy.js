import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from "./BookCarDestroy.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import StateManager from "../../service/commandbook/receiver";
import { socketCustomer, sendMessage } from "../../service/socket";

const BookCarDestroy = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [cancel, setCancel] = useState(false);
  const timeOut = null;

  const cancelBook = () => {
    setCancel(true);
    clearTimeout(timeOut);
    navigation.goBack();
  };

  useEffect(() => {
    const getStateCommand = StateManager.getState(); //Lấy dữ liệu gửi qua socket

    if (getStateCommand.time === null) {
      const dataOrder = {
        idUser: "64cd144708afa47f3bda6ae6",
        from: getStateCommand.from,
        to: getStateCommand.to,
        distance: getStateCommand.distance,
        type: getStateCommand.type,
      };

      sendMessage(socketCustomer, "customerClient", dataOrder);
    }
    else{
      const dataOrder = {
        idUser: "64cd144708afa47f3bda6ae6",
        from: getStateCommand.from,
        to: getStateCommand.to,
        time: getStateCommand.time,
        distance: getStateCommand.distance,
        type: getStateCommand.type,
      };

      sendMessage(socketCustomer, "customerClient", dataOrder);
    }

  }, []);

  // Hủy đặt
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!cancel) {
        navigation.navigate("/bookcar-coming");
      }
    }, 4000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [cancel]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcardestroy__container}>
        <View style={styles["bookcardestroy__container-maps"]}>
          <Image source={HaLinh} style={{ width: "100%", height: "100%" }} />
        </View>

        <Pressable
          style={styles["bookcardestroy__container-back"]}
          onPress={() => {
            navigation.goBack();
          }}
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
          <View style={styles["bookcardestroy__container-location"]}>
            <View>
              <Image source={CarV2} style={{ width: 41, height: 36 }} />
            </View>

            <Text style={styles["bookcardestroy__container-location-title"]}>
              Đang kết nối bạn với tài xế
            </Text>
          </View>

          <Pressable onPress={cancelBook}>
            <Text style={styles["bookcardestroy__container-button"]}>
              Hủy nhanh
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default BookCarDestroy;
