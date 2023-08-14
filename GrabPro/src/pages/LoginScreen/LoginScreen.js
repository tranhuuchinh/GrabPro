import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./LoginScreen.style";
import { useNavigation } from "@react-navigation/native";

import LogoGrab from "../../../assets/imgs/Splash/grabLogo.png";
import GoogleLogin from "../../../assets/icons/LoginBy/ic_google.png";
import PhoneLogin from "../../../assets/icons/LoginBy/ic_phone.png";
import { useCustomFonts } from "../../styles/fonts";
import useAxios from "../../hooks/useAxios";
const LoginScreen = () => {
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();

  // const [responseReg, errorReg, isLoadingReg] = useAxios(
  //   "post",
  //   "/auth/register?role=customer",
  //   { phone: "09875456443565423432326", password: "123", role: "customer" },
  //   {},
  //   []
  // );

  // useEffect(() => {
  //   console.log(responseReg);
  // }, []);
  const handleButtonPress = () => {
<<<<<<< HEAD
    navigation.navigate("/lgphone");
    // console.log(responseReg);
=======
    // navigation.navigate("/lgphone");z
>>>>>>> 0ff92a30d70c2313f0ad78f069b779a75dc6e0d4
  };
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.login_container}>
        <Image style={styles.login_logo} source={LogoGrab} />
        <Text style={styles.login_title}>
          Siêu ứng dụng đáp ứng mọi{"\n"}
          nhu cầu hằng ngày
        </Text>

        <View style={styles.loginButtonWrap}>
          <TouchableOpacity style={styles.loginButtonBy}>
            <Image
              style={{
                position: "absolute",
                marginRight: 5,
                marginLeft: 20,
                justifyContent: "flex-start",
                width: 24,
                height: 24,
                alignSelf: "center",
              }}
              source={GoogleLogin}
            />
            <Text style={styles.loginButtonText}>Tiếp tục với Google</Text>
          </TouchableOpacity>

          <View style={styles.loginHorizontalContainer}>
            <View style={styles.login_line} />
            <Text style={styles.login_text}>Hoặc</Text>
            <View style={styles.login_line} />
          </View>

          <TouchableOpacity
            onPress={handleButtonPress}
            style={styles.loginButtonBy}
          >
            <Image
              style={{
                position: "absolute",
                marginRight: 5,
                marginLeft: 20,
                justifyContent: "flex-start",
                width: 24,
                height: 24,
                alignSelf: "center",
              }}
              source={PhoneLogin}
            />
            <Text style={styles.loginButtonText}>
              Tiếp tục với số điện thoại
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default LoginScreen;
