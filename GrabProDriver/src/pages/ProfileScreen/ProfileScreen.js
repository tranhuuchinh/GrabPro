import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TextInput, Switch } from "react-native";
import styles from "./ProfileScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import {
  faChevronLeft,
  faStar,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import Background from "../../../assets/imgs/Profile/bgProfile.png";
import { useNavigation } from "@react-navigation/native";

const phoneValid = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
};

const emailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const ProfileScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [name, setName] = useState("Trần Anh Khôi");
  const [phone, setPhone] = useState("0898919260");
  const [email, setEmail] = useState("anhkoi@gmail.com");
  const [number, setNumber] = useState("72X1 - 6127");
  const NameInput = useRef();
  const PhoneInput = useRef();
  const EmailInput = useRef();
  const NumberInput = useRef();
  const [isEditable, setIsEditable] = useState(false);
  const [isName, setIsName] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isNumber, setIsNumber] = useState(true);

  const handleEdit = () => {
    setIsEditable(true);
    NameInput.current.focus();
  };

  const handleSave = () => {
    if (name.length <= 4) {
      setIsName(false);
      NameInput.current.focus();
      return;
    } else {
      setIsName(true);
    }

    if (!phoneValid(phone)) {
      setIsPhone(false);
      PhoneInput.current.focus();
      return;
    } else {
      setIsPhone(true);
    }

    if (!emailValid(email)) {
      setIsEmail(false);
      EmailInput.current.focus();
      return;
    } else {
      setIsEmail(true);
    }

    if (number.length <= 4) {
      setIsNumber(false);
      NumberInput.current.focus();
      return;
    } else {
      setIsNumber(true);
    }

    if (isName && isPhone && isEmail && isNumber) {
      setIsEditable(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.profile_container}>
        <View style={styles.profile_banner}>
          <Image
            source={Background}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <View style={styles["profile_banner-avt"]}>
            <View style={styles["profile_avt-ctn"]}>
              <Image
                source={HaLinh}
                style={{ width: 80, height: 80, borderRadius: 80 }}
              />
              <View style={styles["profile_avt-infor"]}>
                <Text style={styles["profile_avt-name"]}>Trần Anh Khôi</Text>
                <View style={styles["profile_avt-intro"]}>
                  <FontAwesomeIcon icon={faStar} size={12} color="#FDD663" />
                  <Text style={styles["profile_avt-intro-txt"]}>5.00</Text>
                </View>
              </View>
            </View>
          </View>

          <Pressable
            style={{ position: "absolute", top: 40, left: 20 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size={20} color="white" />
          </Pressable>
        </View>
        <View style={styles.profile_body}>
          {!isEditable ? (
            <Pressable
              style={{ position: "absolute", top: 10, right: 20 }}
              onPress={() => handleEdit()}
            >
              <FontAwesomeIcon icon={faPenToSquare} size={20} color="#302F2F" />
            </Pressable>
          ) : (
            <Pressable
              style={{ position: "absolute", top: 10, right: 20 }}
              onPress={() => handleSave()}
            >
              <FontAwesomeIcon icon={faCheck} size={20} color="#302F2F" />
            </Pressable>
          )}
          <View style={{ marginTop: 80 }}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.profile_title}>Tên</Text>
              <TextInput
                placeholder="Nhập họ tên"
                style={styles.profile_input}
                value={name}
                onChangeText={setName}
                editable={isEditable}
                ref={NameInput}
              />
              {!isName && (
                <Text style={styles.profile_alarm}>Tên quá ngắn</Text>
              )}
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.profile_title}>Số điện thoại</Text>
              <TextInput
                placeholder="Nhập SĐT"
                style={styles.profile_input}
                value={phone}
                onChangeText={setPhone}
                editable={isEditable}
                ref={PhoneInput}
              />
              {!isPhone && (
                <Text style={styles.profile_alarm}>SĐT không hợp lệ</Text>
              )}
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.profile_title}>Địa chỉ Email</Text>
              <TextInput
                placeholder="Nhập Email"
                style={styles.profile_input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                editable={isEditable}
                ref={EmailInput}
              />
              {!isEmail && (
                <Text style={styles.profile_alarm}>Email không hợp lệ</Text>
              )}
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.profile_title}>Biển số xe</Text>
              <TextInput
                placeholder="Nhập biển số"
                style={styles.profile_input}
                value={number}
                onChangeText={setNumber}
                editable={isEditable}
                ref={NumberInput}
              />
              {!isNumber && (
                <Text style={styles.profile_alarm}>Biển số quá ngắn</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default ProfileScreen;
