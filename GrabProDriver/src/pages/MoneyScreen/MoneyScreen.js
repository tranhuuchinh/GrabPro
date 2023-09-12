import React from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./MoneyScreen.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";

const MoneyScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Heading title="Thu nhập" />
        <View style={styles.money__body}>
          <Pressable
            style={styles.money__item}
            onPress={() => {
              navigation.navigate("/order");
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
