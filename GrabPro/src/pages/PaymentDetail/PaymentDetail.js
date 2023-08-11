import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./PaymentDetail.style";
import img from "../../../assets/imgs/Favorite/halinh.png";
import { useCustomFonts } from "../../styles/fonts";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../hooks/useAxios";

const formatDateTime = (dateTimeString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
    new Date(dateTimeString)
  );

  return formattedDateTime;
};

const formatNumberWithDots = (inputNumber) => {
  if (isNaN(inputNumber)) {
    return inputNumber;
  }

  const formattedNumber = Number(inputNumber).toLocaleString("en-US");
  return formattedNumber;
}

const PaymentDetail = () => {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();
  const props = route.params;
  const [name, setName] = useState("");
  const [response, error, isLoading] = useAxios(
    "get",
    "/customer/profile/64cd144708afa47f3bda6ae6",
    {},
    {},
    []
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      setName(response.data.fullname);
    }
  }, [isLoading]);

  if (!fontsLoaded) return null;

  return (
    <View>
      <Heading title="Chi tiết giao dịch" returnPath="Thanh toán" />
      <View style={styles.payment_detail}>
        <Text style={styles.payment_detail__title}>Thanh toán</Text>
        <View style={styles.payment_detail__wrapper}>
          <Text style={styles.payment_detail__paid_title}>Bạn đã trả</Text>
          <Text style={styles.payment_detail__paid_total}>
            {formatNumberWithDots(props.idOrder.totalPrice)}đ
          </Text>
        </View>
        <View style={[styles.payment_detail__wrapper, { marginTop: 20 }]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={img} style={styles.payment_detail__info_avatar} />
            <Text style={styles.payment_detail__info_name}>{name}</Text>
          </View>
          <View style={styles.payment_detail__wrapper_flex}>
            <Text style={styles.payment_detail__info_title}>
              Thanh toán bằng
            </Text>
            <Text style={styles.payment_detail__info_des}>Tiền mặt</Text>
          </View>
          <View style={styles.payment_detail__wrapper_flex}>
            <Text style={styles.payment_detail__info_title}>Ngày giờ</Text>
            <Text style={styles.payment_detail__info_des}>
              {formatDateTime(props.createdAt)}
            </Text>
          </View>
        </View>
        <View style={[styles.payment_detail__wrapper, { marginTop: 20 }]}>
          <Text style={styles.payment_detail__info_title}>Mã đặt xe</Text>
          <Text style={[styles.payment_detail__info_des, { paddingTop: 4 }]}>
            {props.idOrder.code}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetail;
