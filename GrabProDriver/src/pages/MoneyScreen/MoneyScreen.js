import React from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./MoneyScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from "react-router-native";
import Heading from "../../components/Heading/Heading";

const MoneyScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.money__container}>
        <Heading title="Thu nhập" returnPath="/" />
        <View style={styles.money__body}>
          <Pressable
            style={styles.money__item}
            onPress={() => {
              navigation("/order");
            }}
          >
            <Text style={styles.money__item_txt1}>Cuốc xe đã hoàn tất</Text>
            <Text style={styles.money__item_txt2}>5 cuốc xe</Text>
            <FontAwesomeIcon
              icon={faAngleRight}
              size={20}
              color="black"
              style={styles.money__item_icon}
            />
          </Pressable>
        </View>
      </View>
    );
  }
};

export default MoneyScreen;
