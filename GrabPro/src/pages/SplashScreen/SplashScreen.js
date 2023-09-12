import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./SplashScreen.style";

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("/wait");
  }, 2000);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoGrab}
        source={require("../../../assets/imgs/Splash/grabLogo.png")}
      />

      <Image
        style={styles.illustratonIcon}
        resizeMode="contain"
        source={require("../../../assets/imgs/Splash/Illustraton.png")}
      />
    </View>
  );
};

export default SplashScreen;
