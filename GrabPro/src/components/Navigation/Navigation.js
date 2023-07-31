import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Navigation.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import {
  faChartBar,
  faHouse,
  faWallet,
  faEnvelope,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { useCustomFonts } from "../../styles/fonts";
const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("Trang chủ");
  const fontsLoaded = useCustomFonts();
  const [isItemSelected, setIsItemSelected] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigation.navigate(item);
  };

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  } else {
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
            <FontAwesomeIcon
              icon={faHouse}
              size={25}
              color={selectedItem === "Trang chủ" ? "#4FAE5A" : "gray"}
            />
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
            <FontAwesomeIcon
              icon={faChartBar}
              size={25}
              color={selectedItem === "Hoạt động" ? "#4FAE5A" : "gray"}
            />
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
            <FontAwesomeIcon
              icon={faWallet}
              size={25}
              color={selectedItem === "Thanh toán" ? "#4FAE5A" : "gray"}
            />
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
            <FontAwesomeIcon
              icon={faEnvelope}
              size={25}
              color={selectedItem === "Tin nhắn" ? "#4FAE5A" : "gray"}
            />
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
            <FontAwesomeIcon
              icon={faCircleUser}
              size={25}
              color={selectedItem === "Tài khoản" ? "#4FAE5A" : "gray"}
            />
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
  }
};

export default Navigation;
