import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import styles from "./GrapChatScreen.style";
import grapChat from "../../../assets/imgs/Chat/grapChat.png";
import { useCustomFonts } from "../../styles/fonts";
import GrapChatItem from "./GrapChatItem/GrapChatItem";
import avatar from "../../../assets/imgs/Favorite/halinh.png";

const data = [
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
  {
    img: avatar,
    name: "Nguyễn Phương Ly",
    msg: "Hello, em đến rồi a",
    time: "12:39 CH",
  },
];

const informs = [
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
  {
    type: "TAG_INFORM",
    name: "VOUNCHER giảm giá cực sốc...",
    msg: "Giảm giá ngay hôm nay",
    time: "14:29 CH, 17 June",
  },
  {
    type: "TAG_INFORM",
    name: "VOUNCHER giảm giá cực sốc...",
    msg: "",
    time: "14:29 CH, 17 June",
  },
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
  {
    type: "TAG_INFORM",
    name: "VOUNCHER giảm giá cực sốc...",
    msg: "",
    time: "14:29 CH, 17 June",
  },
  {
    type: "MSG_INFORM",
    name: "Đánh giá cuốc đi gần nhất",
    msg: "Bạn thấy tài xế như thế nào...",
    time: "14:45 CH",
  },
];

const ChatScreen = () => {
  const [typeOption, setTypeOption] = useState("CHAT");
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null;

  return (
    <View style={styles.chat}>
      <View style={styles.chat_banner}>
        <View style={styles.chat_heading}>
          <Text style={[styles.chat_name]}>Tin nhắn</Text>
          <Image style={styles.chat_image} source={grapChat} />
        </View>
      </View>
      <View style={styles.chat_body}>
        <View style={styles.chat_body__option}>
          <Pressable
            style={[
              styles["chat_body-btn"],
              styles[typeOption === "CHAT" ? "chat_body-btn--active" : ""],
            ]}
            onPress={() => setTypeOption("CHAT")}
          >
            <Text
              style={[
                styles["chat_body-btn--text"],
                styles[
                  typeOption === "CHAT" ? "chat_body-btn--text--active" : ""
                ],
              ]}
            >
              Trò chuyện
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles["chat_body-btn"],
              styles[typeOption === "INFORM" ? "chat_body-btn--active" : ""],
            ]}
            onPress={() => setTypeOption("INFORM")}
          >
            <Text
              style={[
                styles["chat_body-btn--text"],
                styles[
                  typeOption === "INFORM" ? "chat_body-btn--text--active" : ""
                ],
              ]}
            >
              Thông báo
            </Text>
          </Pressable>
        </View>
        <SafeAreaView style={{ height: Dimensions.get("window").height - 180 }}>
          <ScrollView
            contentContainerStyle={styles.scroll_view}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {typeOption === "CHAT"
              ? data.map((item, idx) => (
                  <GrapChatItem
                    img={item.img}
                    name={item.name}
                    msg={item.msg}
                    time={item.time}
                    key={+idx}
                  />
                ))
              : informs.map((item, idx) => (
                  <GrapChatItem
                    img={item.img}
                    name={item.name}
                    msg={item.msg}
                    time={item.time}
                    type={item.type}
                    key={+idx}
                  />
                ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ChatScreen;
