import React, { useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import styles from "./LogInScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";

const phoneValid = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
};

const LogInScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [password, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const PassInput = useRef();
  const PhoneInput = useRef();
  const [isPass, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(true);

  const submitForm = () => {
    if (!phoneValid(phone)) {
      setIsPhone(false);
      PhoneInput.current.focus();
      return;
    } else {
      setIsPhone(true);
    }
    if (password.length < 4) {
      setIsEmail(false);
      PassInput.current.focus();
      return;
    } else {
      setIsEmail(true);
    }

    if (isPhone && isPass) {
      navigation.navigate("/home");
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.register__container}>
        <Heading title="Đăng nhập" returnPath="/splash" />
        <View style={styles.register__body}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>SĐT</Text>
            <TextInput
              placeholder="Nhập SĐT"
              style={styles.register_input}
              value={phone}
              onChangeText={setPhone}
              ref={PhoneInput}
            />
            {!isPhone && (
              <Text style={styles.register_alarm}>SĐT không tồn tại</Text>
            )}
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Password</Text>
            <TextInput
              placeholder="Nhập password"
              style={styles.register_input}
              value={password}
              onChangeText={setPass}
              secureTextEntry={true}
              ref={PassInput}
            />
            {!isPass && (
              <Text style={styles.register_alarm}>Mật khẩu quá ngắn</Text>
            )}
          </View>
          <View style={styles.register__btn_ctn}>
            <Pressable onPress={submitForm} style={styles.register__btn}>
              <Text style={styles.register__btn_txt}>Đăng nhập</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default LogInScreen;
