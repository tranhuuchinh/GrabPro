import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./ModalCustom.style";
import { useCustomFonts } from "../../styles/fonts";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ModalCustom = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.custom_overlay}>
        <View style={styles.custom_overlay_ctn}>
          <Text style={styles.custom_overlay_title}>Giá Tiền</Text>
          <Text style={styles.custom_overlay_price}>67.000 VNĐ</Text>
          <View style={styles.custom_overlay_type}>
            <Text style={styles["custom_overlay_type-txt"]}>GRABBIKE</Text>
          </View>
          <View style={styles.custom_overlay_model}>
            <View style={styles.custom_overlay_upper}>
              <Text style={styles["custom_overlay_upper-txt"]}>0.1 KM</Text>
              <Text style={styles["custom_overlay_upper-txt1"]}>Tiền mặt</Text>
              <Text style={styles["custom_overlay_upper-txt"]}>Thường</Text>
            </View>
            <View style={styles.custom_overlay_mid}>
              <Text style={styles["custom_overlay_mid-txt"]}>
                BIG C MIỀN ĐÔNG, đường Tô Hiến Thành, Quận 10, Hồ Chí Minh
              </Text>
              <View style={styles["custom_overlay_mid-circle"]}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size={20}
                  color="white"
                  style={styles["custom_overlay_mid-plane"]}
                />
              </View>
            </View>
            <View style={styles.custom_overlay_down}>
              <Text style={styles["custom_overlay_down-txt"]}>
                135B Trần Hưng Đạo, P.Cầu Ông Lãnh, Quận 1, Hồ Chí Minh
              </Text>
            </View>
          </View>
          <Pressable style={styles.custom_overlay_btn1}>
            <Text style={styles["custom_overlay_btn-txt1"]}>
              Đồng ý nhận cuốc
            </Text>
            <View style={styles["custom_overlay_circle"]}>
              <Text style={styles["custom_overlay_circle-txt"]}>5</Text>
            </View>
          </Pressable>
          <Pressable style={styles.custom_overlay_btn2}>
            <Text style={styles["custom_overlay_btn-txt2"]}>Hủy</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default ModalCustom;
