import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import styles from "./LoginByPhone.style";
import Flag from "../../../../assets/imgs/Home/flag.png";
import Heading from "../../../components/Heading/Heading";
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../../../styles/fonts";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../../config";
import firebase from "firebase/compat/app";

const LoginByPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const isButtonDisabled = phoneNumber.trim() === "";
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const convertPhoneNumber = (phoneNumber) => {
    // Bỏ đi số 0 ở đầu
    const phoneNumberWithoutLeadingZero = phoneNumber.replace(/^0+/, "");
    // Thêm dấu '+' và mã quốc gia
    const formattedPhoneNumber = `+84${phoneNumberWithoutLeadingZero}`;

    return formattedPhoneNumber;
  };

  const sendVerification = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(
        convertPhoneNumber(phoneNumber),
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      setPhoneNumber("");
      navigation.navigate("/verify", { verificationId, phoneNumber });
    } catch (error) {
      // Xử lý lỗi khi không nhận được verificationId
      console.error(error);
    }
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.loginByPhoneContainer}>
        <Heading title="Bắt đầu" returnPath="/login" />
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={handlePressOutside}
          activeOpacity={1}
        >
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "black",
                paddingHorizontal: 15,
                marginLeft: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Số di động
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Image style={{ width: 37, height: 35 }} source={Flag} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    marginLeft: 10,
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  +84
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 42,
                marginLeft: 20,
                borderBottomWidth: 2,
                borderBottomColor: "black",
                marginRight: 20,
              }}
            >
              <TextInput
                style={{
                  color: "gray",
                  fontSize: 14,
                  alignItems: "center",
                  alignContent: "center",
                  paddingTop: 5,
                  fontFamily: "Poppins_500Medium",
                }}
                placeholder="Nhập số điện thoại"
                placeholderTextColor="#BFBFBF"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>

          {/* Nút */}
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 20,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
                padding: 15,
                borderRadius: 10,
                opacity: isButtonDisabled ? 0.5 : 1,
              }}
              onPress={sendVerification}
              disabled={phoneNumber.trim() === ""}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default LoginByPhone;
