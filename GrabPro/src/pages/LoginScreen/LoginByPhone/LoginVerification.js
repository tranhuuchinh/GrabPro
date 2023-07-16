import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./LoginByPhone.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Flag from "../../../../assets/imgs/Home/flag.png";
import { useNavigate } from "react-router-native";
import Heading from "../../../components/Heading/Heading";

const LoginVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const isButtonDisabled = phoneNumber.trim() === "";
  const navigate = useNavigate();

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleButtonPress = () => {
    if (phoneNumber.trim() === "") {
      navigate("/verify");
      console.log("Nút được bấm");
    }
  };

  return (
    <View style={styles.loginByPhoneContainer}>
      <Heading title="Xác minh OTP" returnPath="/lgphone" />

      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={handlePressOutside}
        activeOpacity={1}
      >
        <View style={{ padding: 15, marginTop: 30, marginLeft: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: "Poppins_300Light",
            }}
          >
            Nhập mã gồm 6 chữ số đã gửi tới
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 10,
              fontFamily: "Poppins_700Bold",
            }}
          >
            +84 989819260
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <TextInput
              style={{
                color: "gray",
                fontSize: 32,
                alignItems: "center",
                alignContent: "center",
                fontFamily: "Poppins_300Light",
                fontFamily: "Poppins_700Bold",
              }}
              placeholder="000000"
              placeholderTextColor="#BFBFBF"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={6}
            />
          </View>
        </View>

        <View style={{ padding: 15, marginTop: 30, marginLeft: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: "Poppins_300Light",
            }}
          >
            Không nhận được mã?
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 10,
                fontFamily: "Poppins_700Bold",
                color: "gray",
                marginRight: 10,
              }}
            >
              Yêu cầu mã mới trong
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 10,
                fontFamily: "Poppins_700Bold",
              }}
            >
              00:29
            </Text>
          </View>
        </View>

        {/* Nút */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
              padding: 15,
              borderRadius: 10,
              opacity: isButtonDisabled ? 0.5 : 1,
            }}
            onPress={handleButtonPress}
            disabled={phoneNumber.trim() === ""}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Poppins_300Light",
              }}
            >
              Xác nhận OTP
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginVerification;
