import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import GroupGrab from "../../assets/imgs/Home/groupgrab.png";

const WalletPage = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Heading title={"Ví"} />
        <Pressable
          style={{
            flexDirection: "row",
            margin: 15,
            marginTop: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
            paddingBottom: 15,
          }}
          onPress={() => {
            navigation.navigate("/credit");
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
        </Pressable>
      </View>
    );
  }
};

export default WalletPage;
