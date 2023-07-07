import { View, Text, Image } from "react-native";
import React from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./PaymentDetail.style";
import img from "../../../assets/imgs/Favorite/halinh.png";
import { useCustomFonts } from "../../styles/fonts";

const PaymentDetail = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) return null;

  return (
    <View>
      <Heading title="Chi tiết giao dịch" returnPath="/payment-history" />
      <View style={styles.payment_detail}>
        <Text style={styles.payment_detail__title}>Thanh toán</Text>
        <View style={styles.payment_detail__wrapper}>
          <Text style={styles.payment_detail__paid_title}>Bạn đã trả</Text>
          <Text style={styles.payment_detail__paid_total}>135.000đ</Text>
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
            <Text style={styles.payment_detail__info_name}>Trần Anh Khôi</Text>
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
              12 Jun 2023, 12:30 PM
            </Text>
          </View>
        </View>
        <View style={[styles.payment_detail__wrapper, { marginTop: 20 }]}>
          <Text style={styles.payment_detail__info_title}>Mã đặt xe</Text>
          <Text style={[styles.payment_detail__info_des, { paddingTop: 4 }]}>
            A-52K7ZW7FGH
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetail;
