import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TextInput, Switch } from "react-native";
import styles from "./ProfilePerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import {
  faChevronLeft,
  faCrown,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import Google from "../../../assets/icons/Profile/gg_icon.png";
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

const ProfilePerson = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [name, setName] = useState("Trần Anh Khôi");
  const [phone, setPhone] = useState("0898919260");
  const [email, setEmail] = useState("anhkoi@gmail.com");
  const NameInput = useRef();
  const PhoneInput = useRef();
  const EmailInput = useRef();
  const [isEditable, setIsEditable] = useState(false);
  const [isName, setIsName] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

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

    if (isName && isPhone && isEmail) {
      setIsEditable(false);
    }
  };

  //SWITCH
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //DIALOG
  const [isOpen, setIsOpen] = useState(false);
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
              <View style={styles["profile_avt-crown"]}>
                <FontAwesomeIcon icon={faCrown} size={12} color="white" />
              </View>
              <View style={styles["profile_avt-infor"]}>
                <Text style={styles["profile_avt-name"]}>Trần Anh Khôi</Text>
                <Text style={styles["profile_avt-intro"]}>136 điểm | Vàng</Text>
              </View>
            </View>
          </View>

          <Pressable
            style={{ position: "absolute", top: 40, left: 20 }}
            onPress={() => {
              navigation.navigate("/personal");
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
          </View>
        </View>
        <View style={styles.profile_footer}>
          <Text style={styles["profile_footer-title"]}>
            Đã liên kết tài khoản
          </Text>
          <View style={styles["profile_footer-item"]}>
            <Image
              source={Google}
              style={{ width: 30, resizeMode: "contain" }}
            />
            <Text style={styles["profile_footer-text"]}>Google</Text>
            <Switch
              style={styles["profile_footer-switch"]}
              trackColor={{ false: "#B2B2B2", true: "#B2E7CA" }}
              thumbColor={isEnabled ? "#00AD4D" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.profile_btn}>
          <Pressable
            style={styles["profile_footer-btn"]}
            onPress={() => setIsOpen(true)}
          >
            <Text style={styles["profile_btn-text"]}>Đăng xuất</Text>
          </Pressable>
        </View>
        {isOpen && (
          <View style={styles.profile_overlay}>
            <View style={styles.profile_modal}>
              <Text style={styles["profile_modal-title"]}>
                Bạn thật sự muốn đăng xuất ?
              </Text>
              <View style={styles["profile_modal-btns"]}>
                <Pressable
                  style={styles["profile_modal-button"]}
                  onPress={() => setIsOpen(false)}
                >
                  <Text style={styles["profile_modal-txt"]}>Quay lại</Text>
                </Pressable>
                <Pressable
                  style={styles["profile_modal-button"]}
                  onPress={() => setIsOpen(false)}
                >
                  <Text style={styles["profile_modal-txt"]}>Đăng xuất</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
};

export default ProfilePerson;
