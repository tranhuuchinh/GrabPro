import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./ChatItem.style";
import { useCustomFonts } from "../../../styles/fonts";

const ChatItem = ({ img, msg, time, type }) => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null;

  return (
    <View style={styles.chatItem}>
      {time && <Text style={styles.chatItem__time}>{time}</Text>}
      <View
        style={[
          styles.chatItem__wrap_content,
          styles[type === "RECEIVE" && !img ? "marginLeft50" : ""],
          styles[type === "SEND" ? "marginLeftAuto" : ""],
        ]}
      >
        {img && <Image style={styles.chatItem__img} source={img} />}
        <View
          style={[
            styles.chatItem__wrapper,
            styles[type === "SEND" ? "bgColor" : ""],
          ]}
        >
          <Text style={styles.chatItem__msg}>{msg}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatItem;
