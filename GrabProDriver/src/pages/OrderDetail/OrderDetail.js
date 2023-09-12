import React, { useState } from "react";
import { Image, Text, View, Pressable, ScrollView } from "react-native";
import Oto from "../../../assets/icons/Activity/ic_oto.png";
import Moto from "../../../assets/icons/Activity/ic_moto.png";
import styles from "./OrderDetail.style";
import { useCustomFonts } from "../../styles/fonts";
import Heading from "../../components/Heading/Heading";
import { useNavigation } from "@react-navigation/native";

const activitiesOto = [
  {
    location: "Trường Đại học Khoa học Tự Nhiên",
    time: "7 Jun , 21:38",
    price: "15.500",
  },
  {
    location: "Trường Tiểu học Số 1 Sơn Tịnh",
    time: "7 Jun , 21:38",
    price: "15.500",
  },
  {
    location: "Thành phố Thủ Đức",
    time: "7 Jun , 21:38",
    price: "125.500",
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

const OrderDetail = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [type, setType] = useState(0);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Heading title="Cuốc xe hoàn tất" />

        {type == 0 ? (
          <ScrollView style={styles.order_body}>
            {activitiesOto.map((item, index) => (
              <Pressable
                style={styles.order_item}
                key={index}
                onPress={() => {
                  navigation.navigate("/order-detail");
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
                <View style={styles["order_item-right"]}>
                  <View style={styles["order_item-span"]}>
                    <Text
                      style={styles["order_item-dtn"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.location}
                    </Text>
                    <View style={styles["order_item-right-price"]}>
                      <Text style={styles["order_item-right-txtpr"]}>
                        {item.price}
                      </Text>
                      <Text style={styles["order_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["order_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["order_item-time"]}>{item.time}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        ) : (
          <ScrollView style={styles.order_body}>
            {activitiesMoto.map((item, index) => (
              <Pressable
                style={styles.order_item}
                key={index}
                onPress={() => {
                  navigation.navigate("/order-detail");
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
                <View style={styles["order_item-right"]}>
                  <View style={styles["order_item-span"]}>
                    <Text
                      style={styles["order_item-dtn"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.location}
                    </Text>
                    <View style={styles["order_item-right-price"]}>
                      <Text style={styles["order_item-right-txtpr"]}>
                        {item.price}
                      </Text>
                      <Text style={styles["order_item-right-txtđ"]}>đ</Text>
                    </View>
                  </View>
                  <Text style={styles["order_item-stt"]}>
                    Chuyến đi đã hoàn thành
                  </Text>
                  <Text style={styles["order_item-time"]}>{item.time}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
};

export default OrderDetail;
