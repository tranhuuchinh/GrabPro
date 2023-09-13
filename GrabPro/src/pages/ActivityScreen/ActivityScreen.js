import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import styles from "./ActivityScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import Oto from "../../../assets/icons/Activity/ic_oto.png";
import Moto from "../../../assets/icons/Activity/ic_moto.png";
import { useNavigation } from "@react-navigation/native";
import useAxios from "../../hooks/useAxios";
import StateManager from '../../service/commandbook/receiver'

const truncateString = (inputString, maxLength) => {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength) + "...";
  }
  return inputString;
};

const formatDate = (inputDate) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

const formatNumberWithDots = (inputNumber) => {
  if (isNaN(inputNumber)) {
    return inputNumber;
  }

  const formattedNumber = Number(inputNumber).toLocaleString("en-US");
  return formattedNumber;
};

const ActivityScreen = () => {
  const getStateCommand = StateManager.getState();
  const [type, setType] = useState("GrabCar");
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [activities, setActivities] = useState([]);

  const [response, error, isLoading] = useAxios(
    "get",
    `/orders?type=${type}&idUser=${getStateCommand.id}`,
    {},
    {},
    [type]
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      setActivities(response.data);
    }
  }, [isLoading, type]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView style={styles.activity_container}>
        <View style={styles.activity_header}>
          <Text style={styles["activity_header-title"]}>Hoạt động</Text>
          <View style={styles["activity_header-control"]}>
            {type == "GrabCar" ? (
              <Pressable
                style={styles["activity_header-btn--active"]}
                onPress={() => {
                  setType("GrabCar");
                }}
              >
                <Text style={styles["activity_header-txt--active"]}>
                  GrabCar
                </Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles["activity_header-btn"]}
                onPress={() => {
                  setType("GrabCar");
                }}
              >
                <Text style={styles["activity_header-txt"]}>GrabCar</Text>
              </Pressable>
            )}

            {type == "GrabBike" ? (
              <Pressable
                style={styles["activity_header-btn--active"]}
                onPress={() => {
                  setType("GrabBike");
                }}
              >
                <Text style={styles["activity_header-txt--active"]}>
                  GrabBike
                </Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles["activity_header-btn"]}
                onPress={() => {
                  setType("GrabBike");
                }}
              >
                <Text style={styles["activity_header-txt"]}>GrabBike</Text>
              </Pressable>
            )}
          </View>
        </View>
        {type == "GrabCar" ? (
          <View style={styles.activity_body}>
            {activities.map((item, index) => (
              <Pressable
                style={styles.activity_item}
                key={index}
                onPress={() => {
                  navigation.navigate("/activity-detail", item);
                }}
              >
                <View>
                  <Image
                    source={Oto}
                    style={{
                      width: 51,
                      height: 50,
                    }}
                  />
                </View>
                <View style={styles["activity_item-right"]}>
                  <View style={styles["activity_item-span"]}>
                    <Text
                      style={styles["activity_item-dtn"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {truncateString(item.to.address, 31)}
                    </Text>
                    <View style={styles["activity_item-right-price"]}>
                      <Text style={styles["activity_item-right-txtpr"]}>
                        {formatNumberWithDots(item.totalPrice)}
                      </Text>
                      <Text style={styles["activity_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["activity_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["activity_item-time"]}>
                    {formatDate(item.updatedAt)}
                  </Text>
                </View>
                {item.feedback == 0 && (
                  <Text style={styles["activity_item-fb"]}>Đánh giá ngay</Text>
                )}
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.activity_body}>
            {activities.map((item, index) => (
              <Pressable
                style={styles.activity_item}
                key={index}
                onPress={() => {
                  navigation.navigate("/activity-detail", item);
                }}
              >
                <View>
                  <Image
                    source={Moto}
                    style={{
                      width: 51,
                      height: 54.27,
                    }}
                  />
                </View>
                <View style={styles["activity_item-right"]}>
                  <View style={styles["activity_item-span"]}>
                    <Text
                      style={styles["activity_item-dtn"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {truncateString(item.to.address, 31)}
                    </Text>
                    <View style={styles["activity_item-right-price"]}>
                      <Text style={styles["activity_item-right-txtpr"]}>
                        {formatNumberWithDots(item.totalPrice)}
                      </Text>
                      <Text style={styles["activity_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["activity_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["activity_item-time"]}>
                    {formatDate(item.updatedAt)}
                  </Text>
                </View>
                {item.feedback == 0 && (
                  <Text style={styles["activity_item-fb"]}>Đánh giá ngay</Text>
                )}
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
};

export default ActivityScreen;
