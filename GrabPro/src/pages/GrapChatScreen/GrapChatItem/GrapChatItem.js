import { View, Text, Image } from "react-native";
import React from "react";
import { useCustomFonts } from "../../../styles/fonts";
import styles from "./GrapChatItem.style";
import icMsg from "../../../../assets/imgs/Chat/ic_comments.png";
import icpriceTag from "../../../../assets/imgs/Chat/ic_priceTag.png";

const GrapChatItem = ({ img, name, msg, time, type }) => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null;

  const patterns = {
    MSG_INFORM: {
      icon: icMsg,
      color: "#CAF9D3ED",
    },
    TAG_INFORM: {
      icon: icpriceTag,
      color: "#FFDCC3ED",
    },
  };

  return (
    <View style={styles.grapChatItem}>
      {type ? (
        <View
          style={[
            styles.grapChatItem__inform,
            { backgroundColor: patterns[type].color },
          ]}
        >
          <Image
            style={styles.grapChatItem__inform_img}
            source={patterns[type].icon}
          />
        </View>
      ) : (
        <Image style={styles.grapChatItem__img} source={img} />
      )}
      <View style={styles.grapChatItem__body}>
        <Text
          style={styles.grapChatItem__name}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <Text
          style={styles.grapChatItem__msg}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {msg}
        </Text>
      </View>
      <Text style={styles.grapChatItem__time}>{time}</Text>
    </View>
  );
};

export default GrapChatItem;
