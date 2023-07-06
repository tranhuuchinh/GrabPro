import { View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCustomFonts } from "../../../styles/fonts";
import styles from "./PaymentItem.style";

const PaymentItem = ({ item }) => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) return null;

  const HorizontalLine = () => {
    return <View style={styles.line} />;
  };
  return (
    <View>
      <View style={styles.payment_item}>
        <View style={styles.payment_item__left}>
          <Text style={styles.payment_item__title}>{item.title}</Text>
          <Text style={styles.payment_item__description}>
            {item.description}
          </Text>
        </View>
        <View style={styles.payment_item__right}>
          <Text style={styles.payment_item__price}>{item.price}đ</Text>
          <FontAwesomeIcon
            style={styles.payment_item__icon}
            icon={faChevronRight}
            size={14}
          />
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
};

export default PaymentItem;
