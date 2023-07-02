import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "./PaymentScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import banner from "../../../assets/imgs/Personal/banner_profile.png";
import ic_payment from "../../../assets/icons/Payment/ic_payment.png";
import ic_qr from "../../../assets/icons/Payment/ic_qr.png";
import PaymentItem from "./PaymentItem/PaymentItem";

const PaymentScreen = () => {
  const data = [
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
    {
      title: "Thanh toán",
      description: "To Công ty TNHH",
      price: "137.000",
    },
  ];

  const HorizontalLine = () => {
    return <View style={styles.line} />;
  };

  return (
    <View style={styles.payment}>
      <View style={styles.payment_banner}>
        <View style={styles.payment_heading}>
          <Text style={[styles.payment_name]}>Thanh toán</Text>
          <Text style={[styles.payment_slogan]}>
            Cách thức thanh toán tiện lợi nhất
          </Text>
        </View>
        <Image style={styles.payment_image} source={banner} />
      </View>
      <View style={styles.payment_body}>
        <View style={styles.payment_body__option}>
          <Pressable style={styles["payment_body-btn"]}>
            <Image style={styles["payment_body-icon"]} source={ic_payment} />
            <Text>Rút tiền</Text>
          </Pressable>
          <Pressable style={styles["payment_body-btn"]}>
            <Image style={styles["payment_body-icon"]} source={ic_qr} />
            <Text>Quét để thanh toán</Text>
          </Pressable>
        </View>
        <HorizontalLine />
        <Text style={styles.payment_body__title}>Lịch sử giao dịch</Text>
        <SafeAreaView style={{ height: Dimensions.get("window").height - 260 }}>
          <ScrollView
            contentContainerStyle={styles.scroll_view}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item, idx) => (
              <PaymentItem key={idx} item={item} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default PaymentScreen;
