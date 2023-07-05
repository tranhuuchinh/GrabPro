import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import styles from "./ActivityScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import Oto from "../../../assets/icons/Activity/ic_oto.png";
import Moto from "../../../assets/icons/Activity/ic_moto.png";
import { useNavigate } from "react-router-native";

const activitiesOto = [
  {
    location: "Trường Đại học Khoa học Tự Nhiên",
    time: "7 Jun , 21:38",
    price: "15.500",
    status: 0,
  },
  {
    location: "Trường Tiểu học Số 1 Sơn Tịnh",
    time: "7 Jun , 21:38",
    price: "15.500",
    status: 1,
  },
  {
    location: "Thành phố Thủ Đức",
    time: "7 Jun , 21:38",
    price: "125.500",
    status: 1,
  },
];

const activitiesMoto = [
  {
    location: "Trường Đại học Khoa học Tự Nhiên",
    time: "7 Jun , 21:38",
    price: "15.500",
    status: 1,
  },
  {
    location: "Trường Tiểu học Số 1 Sơn Tịnh",
    time: "7 Jun , 21:38",
    price: "15.500",
    status: 1,
  },
];

const ActivityScreen = () => {
  const [type, setType] = useState(0);
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();

  const handlePress = () => {
    navigation("/activity-detail");
  };
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView style={styles.activity_container}>
        <View style={styles.activity_header}>
          <Text style={styles["activity_header-title"]}>Hoạt động</Text>
          <View style={styles["activity_header-control"]}>
            {type == 0 ? (
              <Pressable
                style={styles["activity_header-btn--active"]}
                onPress={() => {
                  setType(0);
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
                  setType(0);
                }}
              >
                <Text style={styles["activity_header-txt"]}>GrabCar</Text>
              </Pressable>
            )}

            {type == 1 ? (
              <Pressable
                style={styles["activity_header-btn--active"]}
                onPress={() => {
                  setType(1);
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
                  setType(1);
                }}
              >
                <Text style={styles["activity_header-txt"]}>GrabBike</Text>
              </Pressable>
            )}
          </View>
        </View>
        {type == 0 ? (
          <View style={styles.activity_body}>
            {activitiesOto.map((item, index) => (
              <Pressable
                style={styles.activity_item}
                key={index}
                onPress={() => handlePress()}
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
                      {item.location}
                    </Text>
                    <View style={styles["activity_item-right-price"]}>
                      <Text style={styles["activity_item-right-txtpr"]}>
                        {item.price}
                      </Text>
                      <Text style={styles["activity_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["activity_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["activity_item-time"]}>{item.time}</Text>
                </View>
                {item.status == 0 && (
                  <Text style={styles["activity_item-fb"]}>Đánh giá ngay</Text>
                )}
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.activity_body}>
            {activitiesMoto.map((item, index) => (
              <Pressable
                style={styles.activity_item}
                key={index}
                onPress={() => handlePress()}
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
                      {item.location}
                    </Text>
                    <View style={styles["activity_item-right-price"]}>
                      <Text style={styles["activity_item-right-txtpr"]}>
                        {item.price}
                      </Text>
                      <Text style={styles["activity_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["activity_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["activity_item-time"]}>{item.time}</Text>
                </View>
                {item.status == 0 && (
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
