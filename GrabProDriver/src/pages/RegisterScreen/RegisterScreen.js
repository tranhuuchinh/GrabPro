import React, { useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import styles from "./RegisterScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";
import axios from "axios";
import { axiosClient } from "../../api/axios";
import useAxios from "../../hooks/useAxios";
import auth from "../../utils/auth";
import { log } from "react-native-reanimated";
import { API_ENDPOINT, API_AUTH } from "@env";

const phoneValid = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
};

const RegisterScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [password, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const PassInput = useRef();
  const PhoneInput = useRef();
  const [isPass, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(true);

  const submitForm = async () => {
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
      try {
        const object = {
          phone: phone,
          password: password,
          role: "driver",
        };

        const response = await axios.post(`${API_AUTH}auth/register`, object);

        if (response.data.status === "success") {
          const idAccount = response.data.dataRegis.user.idAccount._id;
          console.log(idAccount);
          navigation.navigate("/update", { idAccount });
        } else {
          console.log("Đăng ký không thành công.");
        }
      } catch (error) {
        // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng.
        console.error("Đăng ký thất bại:", error);
      }
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.register__container}>
        <Heading title="Đăng ký" returnPath="/splash" />
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
              <Text style={styles.register__btn_txt}>Đăng ký</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default RegisterScreen;
