import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./AvartarScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { faCircleUser, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AccountScreen from "./components/AccountScreen/AccountScreen";
import MessageScreen from "./components/MessageScreen/MessageScreen";

const AvartarScreen = () => {
  const fontsLoaded = useCustomFonts();
  const [status, setStatus] = useState(1);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.avartar__container}>
        <View style={styles.avartar__body}>
          {status === 1 && <AccountScreen />}
          {status === 2 && <MessageScreen />}
        </View>
        <View style={styles.avartar__navbar}>
          {status === 1 ? (
            <Pressable
              style={styles["avartar__navbar-item"]}
              onPress={() => {
                setStatus(1);
              }}
            >
              <FontAwesomeIcon icon={faCircleUser} size={25} color="#58BC6B" />
              <Text style={styles["avartar__navbar-txt--active"]}>
                Tài khoản
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles["avartar__navbar-item"]}
              onPress={() => {
                setStatus(1);
              }}
            >
              <FontAwesomeIcon icon={faCircleUser} size={25} color="#000" />
              <Text style={styles["avartar__navbar-txt"]}>Tài khoản</Text>
            </Pressable>
          )}

          {status === 2 ? (
            <Pressable
              style={styles["avartar__navbar-item"]}
              onPress={() => {
                setStatus(2);
              }}
            >
              <FontAwesomeIcon icon={faMessage} size={25} color="#58BC6B" />
              <Text style={styles["avartar__navbar-txt--active"]}>
                Tin nhắn
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles["avartar__navbar-item"]}
              onPress={() => {
                setStatus(2);
              }}
            >
              <FontAwesomeIcon icon={faMessage} size={25} color="#000" />
              <Text style={styles["avartar__navbar-txt"]}>Tin nhắn</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }
};

export default AvartarScreen;
