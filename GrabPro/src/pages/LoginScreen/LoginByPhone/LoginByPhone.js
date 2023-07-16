import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./LoginByPhone.style";
import Flag from "../../../../assets/imgs/Home/flag.png";
import Heading from "../../../components/Heading/Heading";
import { useNavigate } from "react-router-native";

const LoginByPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const isButtonDisabled = phoneNumber.trim() === "";

  const navigate = useNavigate();

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleButtonPress = () => {
    if (phoneNumber.trim() !== "") {
      console.log("Nút được bấm");
      navigate("/verify");
    }
  };

  return (
    <View style={styles.loginByPhoneContainer}>
      <Heading title="Bắt đầu" returnPath="/" />

      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={handlePressOutside}
        activeOpacity={1}
      >
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "black",
              paddingHorizontal: 15,
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                fontFamily: "Poppins_300Light",
              }}
            >
              Số di động
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Image style={{ width: 37, height: 35 }} source={Flag} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 10,
                  fontFamily: "Poppins_300Light",
                }}
              >
                +84
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 42,
              marginLeft: 20,
              borderBottomWidth: 2,
              borderBottomColor: "black",
              marginRight: 20,
            }}
          >
            <TextInput
              style={{
                color: "gray",
                fontSize: 18,
                fontWeight: "bold",
                alignItems: "center",
                alignContent: "center",
                paddingTop: 5,
                fontFamily: "Poppins_300Light",
              }}
              placeholder="Nhập số điện thoại"
              placeholderTextColor="#BFBFBF"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
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
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginByPhone;