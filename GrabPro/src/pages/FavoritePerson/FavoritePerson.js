import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./FavoritePerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";

const FavoritePerson = () => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.favorite_container}>
        <Heading title="Yêu thích" returnPath="/account" />
        <Text style={styles.favorite_txt1}>Tài xế yêu thích</Text>
        <View style={{ marginBottom: 20 }}>
          <Pressable style={styles.favorite_item}>
            <View style={styles["favorite_item-left"]}>
              <Image
                source={HaLinh}
                style={{ width: 45, height: 45, borderRadius: 45 }}
              ></Image>
            </View>
            <View style={styles["favorite_item-right"]}>
              <Text style={styles["favorite_item-title"]}>Suni Hạ Linh</Text>
              <Text style={styles["favorite_item-des"]}>
                5912-434.76 • Honda Vision
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.favorite_item}>
            <View style={styles["favorite_item-left"]}>
              <Image
                source={HaLinh}
                style={{ width: 45, height: 45, borderRadius: 45 }}
              ></Image>
            </View>
            <View style={styles["favorite_item-right"]}>
              <Text style={styles["favorite_item-title"]}>Suni Hạ Linh</Text>
              <Text style={styles["favorite_item-des"]}>
                5912-434.76 • Honda Vision
              </Text>
            </View>
          </Pressable>
        </View>
        <Text style={styles.favorite_txt1}>Địa điểm yêu thích</Text>
        <View>
          <Pressable style={styles.favorite_item}>
            <View style={styles["favorite_item-left"]}>
              <View style={styles["favorite_item-circle"]}>
                <FontAwesomeIcon icon={faBookmark} size={18} color="white" />
              </View>
            </View>
            <View style={styles["favorite_item-right"]}>
              <Text style={styles["favorite_item-title"]}>Nhà tôi</Text>
              <Text
                style={styles["favorite_item-des"]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                2.07km • 135B Trần Hưng Đạo
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.favorite_item}>
            <View style={styles["favorite_item-left"]}>
              <View style={styles["favorite_item-circle"]}>
                <FontAwesomeIcon icon={faBookmark} size={18} color="white" />
              </View>
            </View>
            <View style={styles["favorite_item-right"]}>
              <Text style={styles["favorite_item-title"]}>Trường học</Text>
              <Text
                style={styles["favorite_item-des"]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                2.07km • 227 Nguyễn Văn Cừ, quận 5, TP. HCM
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default FavoritePerson;
