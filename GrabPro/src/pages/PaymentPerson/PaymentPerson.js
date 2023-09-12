import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Button } from "react-native";
import styles from "./PaymentPerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import useAxios from "../../hooks/useAxios";

const PaymentPerson = () => {
  const fontsLoaded = useCustomFonts();
  const [isChoose, setChoose] = useState(0);
  const [payments, setPayment] = useState([]);

  const [response, error, isLoading] = useAxios("get", "/payments", {}, {}, []);

  useEffect(() => {
    if (response && response.data !== undefined) {
      setPayment(response.data);
    }
  }, [isLoading]);
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
            {payments.map((item, index) => (
              <Pressable
                style={styles.pmperson_item}
                onPress={() => setChoose(index)}
                key={index}
              >
                <View style={styles["pmperson_item-left"]}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View style={styles["pmperson_item-right"]}>
                  <Text style={styles["pmperson_item-text1"]}>
                    {item.title}
                  </Text>
                  {isChoose == index && (
                    <Text style={styles["pmperson_item-text2"]}>
                      Phương thức chính
                    </Text>
                  )}
                </View>
                {isChoose == index && (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size={25}
                    color="#4FAE5A"
                    style={styles["pmperson_item-icon"]}
                  />
                )}
              </Pressable>
            ))}
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
