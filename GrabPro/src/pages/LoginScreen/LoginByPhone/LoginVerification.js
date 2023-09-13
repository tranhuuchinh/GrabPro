import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./LoginByPhone.style";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Flag from "../../../../assets/imgs/Home/flag.png";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../../components/Heading/Heading";
import { useCustomFonts } from "../../../styles/fonts";
import Modal from "react-native-modal";
import OTPInput from "./inputOTP";
import colors from "../../../styles/colors";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../../config";
import firebase from "firebase/compat/app";
import { log } from "react-native-reanimated";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import StateManager from "../../../service/commandbook/receiver";
import { SetIdCommand } from "../../../service/commandbook/command";
import { API_AUTH } from "@env";

const LoginVerification = () => {
  const [code, setCode] = useState("");
  const isButtonDisabled = code.trim() === "";
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();
  const [otpValue, setOTPValue] = useState(["", "", "", "", "", ""]);
  const [passSend, setPassSend] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const route = useRoute();
  const { verificationId, phoneNumber } = route.params;
  const [object, setObject] = useState({});

  useEffect(() => {
    const joinedString = otpValue.join("");
    // Cập nhật giá trị của object bằng hàm setObject
    setObject({
      phone: phoneNumber,
      password: joinedString,
      role: "customer",
    });
    // console.log(joinedString);
  }, []);

  const sendApiRequest = async (object) => {
    try {
      const [responseReg, errorReg, isLoadingReg] = useAxios(
        "post",
        "/auth/register?role=customer",
        object,
        {},
        []
      );

      console.log(responseReg);
      // Xử lý response từ API
    } catch (error) {
      // Xử lý lỗi từ API
    }
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((userCredential) => {
        setCode("");
        setSuccessModalVisible(false);
        Alert.alert("Xác minh thành công!");
        console.log("gửi otp ok");
        // Gom giá trị của otpValue thành chuỗi
        const joinedString = otpValue.join("");
        object.password = joinedString;
        console.log(object);
        // Thực hiện gọi API bằng axios
        axios
          .post(`${API_AUTH}auth/register?role=customer`, object)
          .then((response) => {
            const setIdUser = new SetIdCommand(
              StateManager,
              response.data.data._id
            );
            setIdUser.execute();
            // Xử lý phản hồi từ API
            setIsModalVisible(false);

            navigation.navigate("Tab"); //Vào Home
          })
          .catch((error) => {
            Alert.alert("Lỗi khi gọi API: " + error.message);
          });
      })
      .catch((error) => {
        Alert.alert("Lỗi xác minh: " + error.message);
      });
  };

  const handleButtonPress = () => {
    setIsModalVisible(true);
  };

  const handlePinChange = (newValue) => {
    setOTPValue(newValue);
    console.log(newValue);
  };

  // const handleSendCode = () => {
  //   const joinedOTP = otpValue.join("");
  //   setSuccessModalVisible(true);
  //   setTimeout(() => {
  //     setSuccessModalVisible(false);
  //   }, 2000);
  //   // onModalClose();
  //   // console.log("OTP:", joinedOTP);
  //   navigation.navigate("Tab"); //Vào Home
  // };

  const renderModalContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40%",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          flex: 1,
          marginTop: 20,
          fontFamily: "Poppins_500Medium",
          marginBottom: 20,
        }}
      >
        Nhập mã pin của bạn
      </Text>
      <View style={styles.container}>
        <OTPInput
          length={6}
          disabled={false}
          value={otpValue}
          onChange={handlePinChange}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          flex: 1,
          fontFamily: "Poppins_500Medium",
          color: colors.primary__800,
          marginTop: 20,
        }}
      >
        Quên mã pin
      </Text>
      <TouchableOpacity
        onPress={confirmCode}
        style={{
          backgroundColor: colors.primary__800,
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop: 20,
          fontFamily: "Poppins_500Medium",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Đăng ký</Text>
      </TouchableOpacity>

      <Modal isVisible={isSuccessModalVisible}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Thành công!
          </Text>
          <Text style={{ fontSize: 16 }}>Thông báo đã được gửi.</Text>
        </View>
      </Modal>
    </View>
  );

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.loginByPhoneContainer}>
        <Heading title="Xác minh OTP" returnPath="/lgphone" />

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={handlePressOutside}
          activeOpacity={1}
        >
          <View style={{ padding: 15, marginTop: 30, marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_300Light",
              }}
            >
              Nhập mã gồm 6 chữ số đã gửi tới
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                fontFamily: "Poppins_700Bold",
              }}
            >
              +84 989819260
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                marginLeft: 20,
                marginRight: 20,
                justifyContent: "center",
                height: 50,
              }}
            >
              <TextInput
                style={{
                  color: "gray",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
                placeholder="000000"
                placeholderTextColor="#BFBFBF"
                keyboardType="numeric"
                value={code}
                onChangeText={setCode}
                maxLength={6}
              />
            </View>
          </View>

          <View style={{ padding: 15, marginTop: 20, marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_500Medium",
              }}
            >
              Không nhận được mã?
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  fontFamily: "Poppins_500Medium",
                  color: "gray",
                  marginRight: 10,
                }}
              >
                Yêu cầu mã mới trong
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                00:29
              </Text>
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
              onPress={handleButtonPress}
              disabled={code.trim() === ""}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Poppins_300Light",
                }}
              >
                Xác nhận OTP
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          backdropOpacity={0.5}
          backdropColor="black"
        >
          {renderModalContent()}
        </Modal>
      </View>
    );
  }
};

export default LoginVerification;
