import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React from "react";
import Heading from "../../components/Heading/Heading";
import avatar from "../../../assets/imgs/Favorite/halinh.png";
import { useCustomFonts } from "../../styles/fonts";
import styles from "./ChatDetail.style";
import ChatItem from "./ChatItem/ChatItem";

const ChatDetail = () => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null;

  return (
    <View style={styles.chatDetail}>
      <Heading
        title="Trần Duy Khương"
        img={avatar}
        content="5912-434.76 ~ Honda Vision"
        type="CHAT"
        returnPath="/avartar"
      />

      <SafeAreaView style={{ height: Dimensions.get("window").height - 148 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <ChatItem
            img={avatar}
            type="RECEIVE"
            msg="đợi em xíu đê"
            time="20:45"
          />
          <ChatItem type="RECEIVE" msg="em đang tắm" />
          <ChatItem type="SEND" msg="lâu quá em ơi" />
          <ChatItem type="SEND" msg="tính thêm tiền ship nha" />
          <ChatItem type="SEND" msg="tính thêm tiền ship nha" />
          <ChatItem
            img={avatar}
            type="RECEIVE"
            msg="xong rồi anh"
            time="21:15"
          />
        </ScrollView>
      </SafeAreaView>

      <View style={styles.chatDetail__inform}>
        <Text style={styles.chatDetail__inform_txt}>
          Cuộc trò chuyện đã kết thúc.
        </Text>
        <Text style={styles.chatDetail__inform_txt}>
          Vui lòng vào{" "}
          <Text style={{ fontWeight: 600, color: "#2E4F91" }}>
            Trung tâm hỗ trợ
          </Text>{" "}
          nếu bạn cần trợ giúp thêm
        </Text>
      </View>
    </View>
  );
};

export default ChatDetail;
