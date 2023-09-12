import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./WaitScreen.style";

import LogoGrab from "../../../assets/imgs/Splash/grabLogo.png";
import Logillustration from "../../../assets/imgs/Wait/logillustration.png";
import BGBottom from "../../../assets/imgs/Wait/VectorBG.png";
import { useNavigation } from "@react-navigation/native";

const WaitScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("/loginMain");
  };
  const handleResgister = () => {
    navigation.navigate("/login");
  };
  return (
    <View style={styles.wait_container}>
      <Image style={styles.wait_logo} source={LogoGrab} />
      <Text style={styles.wait_title}>Your everyday everything app</Text>
      <Image style={styles.wait_illustrationBg} source={Logillustration} />

      <Image style={styles.wait_bottomBg} source={BGBottom} />

      <View style={styles.waitButtonWrap}>
        <Pressable style={styles.waitButtonLogin} onPress={handleLogin}>
          <Text style={styles.buttonTextLogin}>Đăng nhập</Text>
        </Pressable>

        <Pressable style={styles.waitButtonRegister} onPress={handleResgister}>
          <Text style={styles.buttonTextRegister}>Đăng kí ngay</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WaitScreen;
