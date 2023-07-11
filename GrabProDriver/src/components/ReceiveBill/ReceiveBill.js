import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./ReceiveBill.style";
import { useCustomFonts } from "../../styles/fonts";
import {
  faPaperPlane,
  faMessage,
  faPhone,
  faCircleQuestion,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ReceiveBill = () => {
  const fontsLoaded = useCustomFonts();
  const [state, setState] = useState(1);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.receive_overlay}>
        <View style={styles.receive_head}>
          <View style={styles.receive_headItem}>
            <View style={styles.receive_head_icon}>
              <Text style={styles["receive_head-txt"]}>2</Text>
            </View>
            <Text style={styles["receive_head-title"]}>Địa điểm</Text>
          </View>
          <View style={styles.receive_headItemMid}>
            {state === 1 ? (
              <Text style={styles["receive_head-title-mid"]}>Đón khách</Text>
            ) : (
              <Text style={styles["receive_head-title-mid"]}>Trả khách</Text>
            )}

            <Text style={styles["receive_head-title-mid2"]}>GrabBike</Text>
          </View>
          <View style={styles.receive_headItem}>
            <View style={styles.receive_head_icon1}>
              <FontAwesomeIcon icon={faPaperPlane} size={20} color="white" />
            </View>
            <Text style={styles["receive_head-title"]}>Địa điểm</Text>
          </View>
        </View>
        <View style={styles.receive_mid}>
          <Text style={styles.receive_mid_name}>Tran Van A</Text>
          <Text
            style={styles.receive_mid_add}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            17 Nguyễn Thị Minh Khai, 17, Nguyễn Thị Minh Khai, P.Bến Nghé, Q.1,
            Hồ Chí Minh
          </Text>
          <View style={styles.receive_mid_price}>
            <Text style={styles["receive_mid_numb"]}>36.296</Text>
            <Text style={styles["receive_mid_dong"]}>đ</Text>
            <View style={styles["receive_mid_status-ctn"]}>
              <Text style={styles["receive_mid-txt"]}>Thẻ/Ví</Text>
            </View>
          </View>
        </View>
        <View style={styles.receive_control}>
          <Pressable style={styles.receive_control_item}>
            <View style={styles.receive_control_circle}>
              <FontAwesomeIcon icon={faMessage} size={20} color="black" />
            </View>
            <Text style={styles.receive_control_txt}>Chat</Text>
          </Pressable>
          <Pressable style={styles.receive_control_item}>
            <View style={styles.receive_control_circle}>
              <FontAwesomeIcon icon={faPhone} size={20} color="black" />
            </View>
            <Text style={styles.receive_control_txt}>Gọi điện</Text>
          </Pressable>
          {state === 2 && (
            <Pressable style={styles.receive_control_item}>
              <View style={styles.receive_control_circle}>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  size={20}
                  color="black"
                />
              </View>
              <Text style={styles.receive_control_txt}>Hỗ trợ</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.receive_btn}>
          {state === 1 ? (
            <>
              <View style={styles.receive_btn_button}>
                <Text style={styles.receive_btn_text}>Đón khách</Text>
              </View>
              <Pressable style={styles.receive_btn_off}>
                <FontAwesomeIcon icon={faPowerOff} size={20} color="#4FAE5A" />
              </Pressable>
            </>
          ) : (
            <View style={styles.receive_btn_button}>
              <Text style={styles.receive_btn_text}>Trả khách</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
};

export default ReceiveBill;
