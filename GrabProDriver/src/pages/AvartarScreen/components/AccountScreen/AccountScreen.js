import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStar,
  faAngleRight,
  faCommentDots,
  faGear,
  faCircleQuestion,
  faLightbulb,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../../../assets/imgs/Profile/ic_avartar.png";
import styles from "./AccountScreen.style";
import { useCustomFonts } from "../../../../styles/fonts";
import { useNavigate } from "react-router-native";
import Heading from "../../../../components/Heading/Heading";

const AccountScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.account__container}>
        <Heading title="Tài khoản" returnPath="/" />
        <Pressable
          style={styles.account__infor}
          onPress={() => {
            navigation("/profile");
          }}
        >
          <Image source={Avatar} style={{ width: 44, height: 44 }} />
          <View style={styles["account_infor-right"]}>
            <Text style={styles["account_infor-txt1"]}>Trần Hữu Chính</Text>
            <View style={styles["account_infor-upper"]}>
              <FontAwesomeIcon icon={faStar} size={14} color="#FDD663" />
              <Text style={styles["account_infor-txt2"]}>5.00</Text>
            </View>
          </View>
          <FontAwesomeIcon
            icon={faAngleRight}
            size={25}
            color="black"
            style={{ position: "absolute", right: 20 }}
          />
        </Pressable>
        <View>
          <View style={styles.account__item}>
            <FontAwesomeIcon icon={faCommentDots} size={22} color="black" />
            <Text style={styles["account_item-txt"]}>Blog Tài xế</Text>
          </View>
          <View style={styles.account__item}>
            <FontAwesomeIcon icon={faGear} size={22} color="black" />
            <Text style={styles["account_item-txt"]}>Cài đặt</Text>
          </View>
          <View style={styles.account__item}>
            <FontAwesomeIcon icon={faCircleQuestion} size={22} color="black" />
            <Text style={styles["account_item-txt"]}>Trợ giúp</Text>
          </View>
          <View style={styles.account__item}>
            <FontAwesomeIcon icon={faLightbulb} size={22} color="black" />
            <Text style={styles["account_item-txt"]}>Khám phá</Text>
          </View>
          <Pressable
            style={styles.account__item_final}
            onPress={() => {
              navigation("/splash");
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} size={22} color="#FB2323" />
            <Text style={styles["account_item-txt-final"]}>Đăng xuất</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default AccountScreen;
