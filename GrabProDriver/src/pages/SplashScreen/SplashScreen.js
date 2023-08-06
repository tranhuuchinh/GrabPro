import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import Logo from "../../../assets/imgs/Splash/logo_sp.png";
import Background from "../../../assets/imgs/Splash/banner_sp.png";
import styles from "./SplashScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const SplashScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.splash__container}>
        <View style={styles["splash__container-logo"]}>
          <Image source={Logo} style={{ width: 128, height: 47 }} />
          <Text style={styles["splash__container-txt"]}>
            Trở thành đối tác của Grab
          </Text>
        </View>
        <View style={styles["splash__container-footer"]}>
          <View style={styles["splash__container-img"]}>
            <Image
              source={Background}
              style={{
                width: "110%",
                height: 285,
                position: "absolute",
                top: -240,
                left: -20,
              }}
            />
            <Svg width="100%" height="226" viewBox="0 0 390 226">
              <Path
                d="M49 17.7624C26.2 16.1624 6.83333 8.42904 0 4.76237V225.262H387.5V12.2625C389.333 11.9291 391 10.5624 383 7.76237C335 -8.73763 238 4.76237 173.5 14.2624C109 23.7624 77.5 19.7624 49 17.7624Z"
                fill="white"
              />
            </Svg>
            <View style={styles["splash__container-buttons"]}>
              <Pressable
                style={styles["splash__container-btn1"]}
                onPress={() => {
                  navigation.navigate("/login");
                }}
              >
                <Text style={styles["splash__container-txt1"]}>Đăng nhập</Text>
              </Pressable>
              <Pressable
                style={styles["splash__container-btn2"]}
                onPress={() => {
                  navigation.navigate("/register");
                }}
              >
                <Text style={styles["splash__container-txt2"]}>
                  Đăng ký trở thành tài xế
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default SplashScreen;
