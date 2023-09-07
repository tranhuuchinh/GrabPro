import React, { useEffect, useState } from "react";
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
import useAxios from "../../hooks/useAxios";

const ReceiveBill = ({
  orderData,
  point,
  handleDrawDirection,
  onFinishOrder,
}) => {
  const fontsLoaded = useCustomFonts();
  const [state, setState] = useState(1);
  const [pointNum, setPointNum] = useState(0);
  const [nameCustomer, setNameCustomer] = useState();
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [idUser, setIdUser] = useState("");

  const [response, error, isLoading] = useAxios(
    "get",
    `/customer/profile/${orderData.idCustomer}`,
    {},
    {},
    []
  );
  // console.log(typeof orderData.idCustomer);
  // console.log(typeof orderData);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    // console.log(nameCustomer);
    console.log(typeof response);
    // setNameCustomer(response.data);
  }, [isLoading, response]);

  useEffect(() => {
    if (response && response.data !== null && response.data !== undefined) {
      setIdUser(orderData.idCustomer);
      setNameCustomer(response.data.fullname);
      setPrice(orderData.totalPrice);
      if (point === 0) {
        setPointNum(0);
        // handleDrawDirection(0);
      } else if (point === 1) {
        setPointNum(1);
        setAddress(orderData.from.address);
        // handleDrawDirection(1);
      } else if (point === 2) {
        setPointNum(2);
        setAddress(orderData.to.address);
      }
    }
  }, [point]);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.receive_overlay}>
        <View style={styles.receive_head}>
          <View style={styles.receive_headItem}>
            <View style={styles.receive_head_icon}>
              <Text style={styles["receive_head-txt"]}>{pointNum}</Text>
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
          <Pressable
            style={styles.receive_headItem}
            onPress={() => handleDrawDirection(point)}
          >
            <View style={styles.receive_head_icon1}>
              <FontAwesomeIcon icon={faPaperPlane} size={20} color="white" />
            </View>
            <Text style={styles["receive_head-title"]}>Chỉ đường</Text>
          </Pressable>
        </View>
        <View style={styles.receive_mid}>
          <Text style={styles.receive_mid_name}>{nameCustomer}</Text>
          <Text
            style={styles.receive_mid_add}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {address}
          </Text>
          <View style={styles.receive_mid_price}>
            <Text style={styles["receive_mid_numb"]}>
              {formatNumberWithCommas(price)}
            </Text>
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
        </View>
        <View style={styles.receive_btn}>
          {state === 1 ? (
            <>
              <View style={styles.receive_btn_button}>
                {pointNum === 2 ? (
                  <Text style={styles.receive_btn_text}>Trả khách</Text>
                ) : (
                  <Text style={styles.receive_btn_text}>Đón khách</Text>
                )}
              </View>
              {pointNum === 2 && (
                <Pressable
                  onPress={() => onFinishOrder()}
                  style={styles.receive_btn_off}
                >
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    size={20}
                    color="#4FAE5A"
                  />
                </Pressable>
              )}
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
