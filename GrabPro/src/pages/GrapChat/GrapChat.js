import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "./GrapChat.style";
import grapChat from "../../../assets/imgs/Chat/grapChat.png";

const ChatScreen = () => {
  return (
    <View style={styles.payment}>
      <View style={styles.payment_banner}>
        <View style={styles.payment_heading}>
          <Text style={[styles.payment_name]}>Tin nhắn</Text>
          <Image style={styles.payment_image} source={grapChat} />
        </View>
      </View>
      <View style={styles.payment_body}>
        <View style={styles.payment_body__option}>
          <Pressable style={styles["payment_body-btn"]}>
            <Text>Rút tiền</Text>
          </Pressable>
          <Pressable style={styles["payment_body-btn"]}>
            <Text>Quét để thanh toán</Text>
          </Pressable>
        </View>
        <Text style={styles.payment_body__title}>Lịch sử giao dịch</Text>
        <SafeAreaView style={{ height: Dimensions.get("window").height - 260 }}>
          <ScrollView
            contentContainerStyle={styles.scroll_view}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          ></ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ChatScreen;
