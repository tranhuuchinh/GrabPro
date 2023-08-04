import React, { useState } from "react";
import { View, Text, Image, Pressable, Button } from "react-native";
import styles from "./PaymentPerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";

const PaymentPerson = () => {
  const fontsLoaded = useCustomFonts();
  const [isChoose, setChoose] = useState(1);
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.pmperson_container}>
        <Heading title="Phương thức thanh toán" returnPath="/account" />
        <View style={styles.pmperson_body}>
          <Text style={styles["pmperson_body-title"]}>
            Chọn phương thức mặc định
          </Text>
          <View style={{ marginTop: 14 }}>
            <Pressable
              style={styles.pmperson_item}
              onPress={() => setChoose(1)}
            >
              <View style={styles["pmperson_item-left"]}>
                <Image
                  source={require("../../../assets/icons/PaymentPerson/ic_cash.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={styles["pmperson_item-right"]}>
                <Text style={styles["pmperson_item-text1"]}>Tiền mặt</Text>
                {isChoose == 1 && (
                  <Text style={styles["pmperson_item-text2"]}>
                    Phương thức chính
                  </Text>
                )}
              </View>
              {isChoose == 1 && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size={25}
                  color="#4FAE5A"
                  style={styles["pmperson_item-icon"]}
                />
              )}
            </Pressable>
            <Pressable
              style={styles.pmperson_item}
              onPress={() => setChoose(2)}
            >
              <View style={styles["pmperson_item-left"]}>
                <Image
                  source={require("../../../assets/icons/PaymentPerson/ic_bidv.png")}
                  style={{ width: 40, height: 27 }}
                ></Image>
              </View>
              <View style={styles["pmperson_item-right"]}>
                <Text style={styles["pmperson_item-text1"]}>ATM</Text>
                {isChoose == 2 && (
                  <Text style={styles["pmperson_item-text2"]}>
                    Phương thức chính
                  </Text>
                )}
              </View>
              {isChoose == 2 && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size={25}
                  color="#4FAE5A"
                  style={styles["pmperson_item-icon"]}
                />
              )}
            </Pressable>
            <Pressable
              style={styles.pmperson_item}
              onPress={() => setChoose(3)}
            >
              <View style={styles["pmperson_item-left"]}>
                <Image
                  source={require("../../../assets/icons/PaymentPerson/ic_zalo.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>

              <View style={styles["pmperson_item-right"]}>
                <Text style={styles["pmperson_item-text1"]}>ZaloPay</Text>
                {isChoose == 3 && (
                  <Text style={styles["pmperson_item-text2"]}>
                    Phương thức chính
                  </Text>
                )}
              </View>
              {isChoose == 3 && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size={25}
                  color="#4FAE5A"
                  style={styles["pmperson_item-icon"]}
                />
              )}
            </Pressable>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable style={styles.pmperson_btn}>
              <Text style={styles["pmperson_btn-text"]}>
                Thêm phương thức thanh toán
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default PaymentPerson;
