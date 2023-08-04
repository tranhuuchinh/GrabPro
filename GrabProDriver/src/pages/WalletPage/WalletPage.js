import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import Redo from "../../assets/imgs/Home/redoalt.png";
import GroupGrab from "../../assets/imgs/Home/groupgrab.png";

const WalletPage = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Heading title={"Ví"} returnPath={"/"} />
        <View
          style={{
            flexDirection: "row",
            margin: 15,
            marginTop: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <Image
                source={GroupGrab}
                style={{ width: "100%", height: "100%" }}
              />
            </View>

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
                Ví tín dụng
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                  color: "#9C9A9A",
                }}
              >
                VND 0
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

export default WalletPage;

const styles = StyleSheet.create({});
