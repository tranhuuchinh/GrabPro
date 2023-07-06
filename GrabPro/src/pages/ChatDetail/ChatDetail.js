import { View, Text } from "react-native";
import React from "react";
import styles from "./ChatDetail.style";
import Heading from "../../components/Heading/Heading";
import avatar from "../../../assets/imgs/Favorite/halinh.png";

const ChatDetail = () => {
  return (
    <View>
      <Heading
        title="Trần Duy Khương"
        img={avatar}
        content="5912-434.76 ~ Honda Vision"
        type="CHAT"
        returnPath="/chat-inform"
      />
      
    </View>
  );
};

export default ChatDetail;
