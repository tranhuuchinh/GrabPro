import React from "react";
import { Image, Text, View, Pressable, ScrollView } from "react-native";
import avatar from "../../../../../assets/imgs/Favorite/halinh.png";
import styles from "./MessageScreen.style";
import { useCustomFonts } from "../../../../styles/fonts";
import { useNavigate } from "react-router-native";
import Heading from "../../../../components/Heading/Heading";

const data = [
  {
    img: avatar,
    name: "Suni Hạ Linh",
    message: "Em đến rồi nè anh yêu của em ơi",
    time: "12:29 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    message: "Bố mày boom hàng",
    time: "12:29 CH",
  },
];

const MessageScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.message__container}>
        <Heading title="Tin nhắn" returnPath="/" />
        <ScrollView style={{ marginTop: 10 }}>
          {data.map((item, idx) => (
            <Pressable style={styles.message_item} key={idx}>
              <Image style={styles.message_item__img} source={item.img} />
              <View style={styles.message_item__body}>
                <Text
                  style={styles.message_item__name}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <Text
                  style={styles.message_item__msg}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.message}
                </Text>
              </View>
              <Text style={styles.message_item__time}>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }
};

export default MessageScreen;
