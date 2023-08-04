import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import Redo from "../../assets/imgs/Home/redoalt.png";
import Credit from "../../assets/imgs/Home/credit.png";
import GroupGrab from "../../assets/imgs/Home/groupgrab.png";
import Money from "../../assets/imgs/Home/money.png";

const AddMoney = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    // Xử lí dữ liệu khi người dùng nhấn nút submit
    console.log("Giá trị nhập vào:", inputValue);
  };
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Heading title={"Nạp tiền"} returnPath={"/"} />
        <View
          style={{
            width: "100%",
            backgroundColor: "#3F4753",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          {/* left card */}
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Gửi
            </Text>
            <View
              style={{
                width: 66,
                height: 66,
              }}
            >
              <Image source={Money} style={{ width: "100%", height: "100%" }} />
            </View>
            <Text
              style={{
                fontSize: 16,
                color: "#9C9A9A",
                fontFamily: "Poppins_500Medium",
              }}
            >
              Ví tiền mặt
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins_500Medium",
              }}
            >
              VND 0
            </Text>
          </View>
          {/* right card */}
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Nhận
            </Text>
            <View
              style={{
                width: 66,
                height: 66,
              }}
            >
              <Image source={Money} style={{ width: "100%", height: "100%" }} />
            </View>
            <Text
              style={{
                fontSize: 16,
                color: "#9C9A9A",
                fontFamily: "Poppins_500Medium",
              }}
            >
              Ví tín dụng
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins_500Medium",
              }}
            >
              VND 0
            </Text>
          </View>
        </View>

        <View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 8,
              padding: 15,
              fontSize: 16,
              margin: 15,
              marginBottom: 20,
              backgroundColor: "#ECECEC",
            }}
            keyboardType="numeric"
            placeholder="Nhập số tiền (VND)..."
            onChangeText={handleInputChange}
            value={inputValue}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableHighlight
              style={{
                backgroundColor: "#58BC6B",
                padding: 10,
                borderRadius: 8,
                width: "30%",
              }}
              underlayColor="darkgreen"
              onPress={handleSubmit}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Nạp tiền
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
};

export default AddMoney;

const styles = StyleSheet.create({});
