import React, { useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./UpdateScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";

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
  const NameInput = useRef();
  const EmailInput = useRef();
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

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

    if (isName && isEmail) {
      navigation.navigate("/home");
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
            <Text style={styles["register_title"]}>Khu vực</Text>
            <TextInput
              style={styles.register_input}
              value={"TP. Hồ Chí Minh"}
              editable={false}
            />
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles["register_title"]}>Loại dịch vụ</Text>
            <SelectList
              style={styles.register_input}
              data={[
                { key: "GrabCar", value: "GrabCar" },
                { key: "GrabBike", value: "GrabBike" },
              ]}
              save="value"
              defaultOption={{ key: "GrabCar", value: "GrabCar" }}
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
