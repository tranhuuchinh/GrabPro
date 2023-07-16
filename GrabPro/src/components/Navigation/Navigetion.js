import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Navigetion.style";

import IcHome from "../../../assets/icons/Navigation/ic_home.png";
import IcActivity from "../../../assets/icons/Navigation/ic_activity.png";
import IcPayment from "../../../assets/icons/Navigation/ic_payment.png";
import IcInbox from "../../../assets/icons/Navigation/ic_inbox.png";
import IcProfile from "../../../assets/icons/Navigation/ic_profile.png";
const Navigetion = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <View style={styles.navContainer}>
      <View style={styles.navNavWrap}>
        <TouchableOpacity
          style={[
            styles.navItemWrap,
            selectedItem === "Trang chủ" && styles.selectedItem,
          ]}
          onPress={() => handleItemClick("Trang chủ")}
        >
          <Image style={styles.navIcNav} source={IcHome} />
          <Text
            style={[
              styles.navTextNav,
              selectedItem === "Trang chủ" && styles.selectedTextNav,
            ]}
          >
            Trang chủ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItemWrap,
            selectedItem === "Hoạt động" && styles.selectedItem,
          ]}
          onPress={() => handleItemClick("Hoạt động")}
        >
          <Image style={styles.navIcNav} source={IcActivity} />
          <Text
            style={[
              styles.navTextNav,
              selectedItem === "Hoạt động" && styles.selectedTextNav,
            ]}
          >
            Hoạt động
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItemWrap,
            selectedItem === "Thanh toán" && styles.selectedItem,
          ]}
          onPress={() => handleItemClick("Thanh toán")}
        >
          <Image style={styles.navIcNav} source={IcPayment} />
          <Text
            style={[
              styles.navTextNav,
              selectedItem === "Thanh toán" && styles.selectedTextNav,
            ]}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItemWrap,
            selectedItem === "Tin nhắn" && styles.selectedItem,
          ]}
          onPress={() => handleItemClick("Tin nhắn")}
        >
          <Image style={styles.navIcNav} source={IcInbox} />
          <Text
            style={[
              styles.navTextNav,
              selectedItem === "Tin nhắn" && styles.selectedTextNav,
            ]}
          >
            Tin nhắn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItemWrap,
            selectedItem === "Tài khoản" && styles.selectedItem,
          ]}
          onPress={() => handleItemClick("Tài khoản")}
        >
          <Image style={styles.navIcNav} source={IcProfile} />
          <Text
            style={[
              styles.navTextNav,
              selectedItem === "Tài khoản" && styles.selectedTextNav,
            ]}
          >
            Tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigetion;
