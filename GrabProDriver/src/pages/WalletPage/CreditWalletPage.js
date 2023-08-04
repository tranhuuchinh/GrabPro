import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import Redo from "../../assets/imgs/Home/redoalt.png";
import Credit from "../../assets/imgs/Home/credit.png";

const CreditWalletPage = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Heading title={"Ví tín dụng"} returnPath={"/"} />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Image source={Credit} style={{ width: 110, height: 67 }} />
        </View>
        <Text
          style={{
            color: "#9C9A9A",
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
          }}
        >
          Số dư hiện có
        </Text>

        <Text
          style={{
            color: "#386D52",
            fontSize: 40,
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
          }}
        >
          VND 0
        </Text>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            marginTop: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#888888",
            paddingBottom: 15,
            paddingTop: 15,
            backgroundColor: "#CCCCCC",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                marginLeft: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Rút về tài khoản ngân hàng
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#888888",
            paddingBottom: 15,
            paddingTop: 15,
            backgroundColor: "#CCCCCC",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                marginLeft: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Kiểm tra lịch sử giao dịch
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
          </View>
        </View>
      </View>
    );
  }
};

export default CreditWalletPage;

const styles = StyleSheet.create({});
