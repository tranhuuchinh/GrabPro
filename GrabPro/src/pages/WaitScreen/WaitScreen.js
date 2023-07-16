import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./WaitScreen.style";

import LogoGrab from "../../../assets/imgs/Splash/grabLogo.png";
import Logillustration from "../../../assets/imgs/Wait/logillustration.png";
import BGBottom from "../../../assets/imgs/Wait/VectorBG.png";

const WaitScreen = () => {
  return (
    <View style={styles.wait_container}>
      <Image style={styles.wait_logo} source={LogoGrab} />
      <Text style={styles.wait_title}>Your everyday everything app</Text>
      <Image style={styles.wait_illustrationBg} source={Logillustration} />

      <Image style={styles.wait_bottomBg} source={BGBottom} />

      <View style={styles.waitButtonWrap}>
        <TouchableOpacity style={styles.waitButtonLogin}>
          <Text style={styles.buttonTextLogin}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.waitButtonRegister}>
          <Text style={styles.buttonTextRegister}>Đăng kí ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WaitScreen;
