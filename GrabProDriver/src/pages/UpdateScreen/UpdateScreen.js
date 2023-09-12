import React, { useEffect, useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./UpdateScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const emailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const UpdateScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [email, setPass] = useState("");
  const [code, setCode] = useState("");
  const [color, setColor] = useState("");
  const [nameCar, setNameCar] = useState("");
  const NameInput = useRef();
  const EmailInput = useRef();
  const CodeInput = useRef();
  const CarInput = useRef();
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isCode, setIsCode] = useState(true);
  const [isCar, setIsCar] = useState(true);
  const route = useRoute();
  const { idAccount } = route.params;
  useEffect(() => {
    console.log("ID: " + idAccount);
  }, []);

  const submitForm = () => {
    if (name.length <= 4) {
      setIsName(false);
      NameInput.current.focus();
      return;
    } else {
      setIsName(true);
    }
    if (!emailValid(email)) {
      setIsEmail(false);
      EmailInput.current.focus();
      return;
    } else {
      setIsEmail(true);
    }
    if (code.length <= 4) {
      setIsCode(false);
      CodeInput.current.focus();
      return;
    } else {
      setIsCode(true);
    }
    if (nameCar.length <= 4) {
      setIsCar(false);
      CarInput.current.focus();
      return;
    } else {
      setIsCar(true);
    }

    if (isName && isEmail) {
      try {
        const object = {
          name: name,
          email: email,
          code: code,
          nameCar: nameCar,
          color: color,
          type: selectedValue,
        };

        // Gọi API PATCH để cập nhật thông tin tài xế
        axios
          .patch(`http://192.168.1.6:3002/driver/${idAccount}`, object)
          .then((response) => {
            if (response.data.status === "success") {
              console.log("Cập nhật thành công.");
              // Nếu cần, bạn có thể điều hướng người dùng đến trang khác sau khi cập nhật thành công.
              navigation.navigate("/home");
            } else {
              console.log("Cập nhật không thành công.");
            }
          })
          .catch((error) => {
            // Xử lý lỗi từ server (ví dụ: hiển thị thông báo lỗi cho người dùng)
            console.error("Lỗi từ server:", error);
          });
      } catch (error) {
        // Xử lý lỗi ở phía máy khách (ví dụ: lỗi khi gọi API)
        console.error("Lỗi từ máy khách:", error);
      }
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.register__container}>
        <Heading title="Cập nhật thông tin" />
        <View style={styles.register__body}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Loại dịch vụ</Text>
            <SelectList
              style={styles.register_input}
              data={[
                { key: "GrabCar", value: "4seats" },
                { key: "GrabBike", value: "7seats" },
                { key: "MotoBike", value: "Motobike" },
              ]}
              save="value"
              defaultOption={{ key: "GrabCar", value: "motobike" }}
              setSelected={(val) => setSelectedValue(val)}
            />
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Họ và tên</Text>
            <TextInput
              placeholder="Nhập họ tên"
              style={styles.register_input}
              value={name}
              onChangeText={setName}
              ref={NameInput}
            />
            {!isName && <Text style={styles.register_alarm}>Tên quá ngắn</Text>}
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Gmail</Text>
            <TextInput
              placeholder="Nhập Gmail"
              style={styles.register_input}
              value={email}
              onChangeText={setPass}
              ref={EmailInput}
            />
            {!isEmail && (
              <Text style={styles.register_alarm}>Email không hợp lệ</Text>
            )}
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Biển số xe</Text>
            <TextInput
              placeholder="Nhập biển số xe"
              style={styles.register_input}
              value={code}
              onChangeText={setCode}
              ref={CodeInput}
            />
            {!isCode && (
              <Text style={styles.register_alarm}>Biển số không hợp lệ</Text>
            )}
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Tên xe</Text>
            <TextInput
              placeholder="Nhập tên xe"
              style={styles.register_input}
              value={nameCar}
              onChangeText={setNameCar}
              ref={CarInput}
            />
            {!isCar && (
              <Text style={styles.register_alarm}>Tên xe quá ngắn</Text>
            )}
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Màu xe</Text>
            <TextInput
              placeholder="Nhập màu xe"
              style={styles.register_input}
              value={color}
              onChangeText={setColor}
            />
          </View>
          <View style={styles.register__btn_ctn}>
            <Pressable onPress={submitForm} style={styles.register__btn}>
              <Text style={styles.register__btn_txt}>Cập nhật</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default UpdateScreen;
