import React from "react";
import { Text, View } from "react-native";
import styles from "./ModalAuto.style";
import { useCustomFonts } from "../../styles/fonts";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ModalAuto = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.auto_overlay}>
        <View style={styles.auto_modal}>
          <Text style={styles["auto_modal-title"]}>
            Bạn đã tự động nhận cuốc mới
          </Text>
          <FontAwesomeIcon
            icon={faCircleCheck}
            size={130}
            color="#58BC6B"
            style={{ marginTop: 30, marginBottom: 16 }}
          />
          <Text style={styles["auto_modal-title"]}>
            Khách hàng đang chờ bạn
          </Text>
        </View>
      </View>
    );
  }
};

export default ModalAuto;
