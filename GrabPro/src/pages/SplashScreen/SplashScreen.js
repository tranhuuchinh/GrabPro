import React, { useEffect } from "react";
import { View, Image } from "react-native";

import styles from "./SplashScreen.style";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoGrab}
        source={require("../../../assets/imgs/Splash/grabLogo.png")}
      />

      <Image
        style={styles.illustratonIcon}
        resizeMode="contain"
        source={require("../../../assets/imgs/Splash/Illustratons.png")}
      />
    </View>
  );
};

export default SplashScreen;
