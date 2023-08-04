import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React from "react";
import Heading from "../../components/Heading/Heading";
import avatar from "../../../assets/imgs/Favorite/halinh.png";
import { useCustomFonts } from "../../styles/fonts";
import ChatItem from "./ChatItem/ChatItem";
import { Image } from "react-native";
import ic_location from "../../../assets/imgs/Chat/Location.png";
import ic_camera from "../../../assets/imgs/Chat/Camera.png";
import ic_micro from "../../../assets/imgs/Chat/Micro.png";
import styles from "./ChatBook.style";
import { TextInput } from "react-native";

const ChatBook = () => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null;

  const isSystemMsg = false;

  return (
    <View style={styles.chatDetail}>
      <Heading
        title="Trần Duy Khương"
        img={avatar}
        content="5912-434.76 ~ Honda Vision"
        type="CHAT"
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

      {isSystemMsg ? (
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
      ) : (
        <View style={styles.chatDetail__chat}>
          <Image source={ic_location} style={{ width: 26, height: 26 }} />
          <Image
            source={ic_camera}
            style={{ width: 26, height: 26, marginHorizontal: 10 }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#f2f2f2",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <TextInput
              style={{
                color: "gray",
                fontSize: 14,
                alignItems: "center",
                alignContent: "center",
                paddingTop: 10,
                paddingBottom: 6,
                paddingHorizontal: 10,
                width: "100%",
                fontFamily: "Poppins_500Medium",
              }}
              placeholder="Nhập để chat"
              placeholderTextColor="#BFBFBF"
            />
          </View>
          <Image source={ic_micro} style={{ width: 30, height: 30 }} />
        </View>
      )}
    </View>
  );
};

export default ChatBook;
