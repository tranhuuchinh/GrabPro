import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./PersonalScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  faChevronRight,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const PersonalScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.person_container}>
        <View style={styles.person_banner}>
          <FontAwesomeIcon
            icon={faCircleUser}
            style={styles.icon_user}
            size={56}
            color="#4FAE5A"
          />
          <View style={styles.person_right}>
            <Text
              style={[
                styles.person_name,
                { fontFamily: "Poppins_600SemiBold" },
              ]}
            >
              Trần Anh Khôi
            </Text>

            <Pressable
              style={[
                styles.personal_banner_btn,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              <Text>Chỉnh sửa tài khoản</Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={10}
                color="#4F4848"
              />
            </Pressable>
          </View>
          <Image
            style={styles.person_background}
            source={require("../../../assets/imgs/Personal/banner_profile.png")}
          />
        </View>
        <View style={styles.person_body}>
          <Text
            style={{
              fontSize: 14,
              marginTop: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Tài khoản của tôi
          </Text>
          <View style={{ marginTop: 10 }}>
            <Pressable style={styles.person_item}>
              <Text
                style={[
                  styles["person_item-text"],
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Vàng
              </Text>
              <View style={styles["person_item-right"]}>
                <Image
                  source={require("../../../assets/icons/Personal/ic_crown.png")}
                  style={{
                    marginBottom: 5,
                    marginRight: 5,
                    width: 20,
                    height: 20,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 12,
                    marginRight: 5,
                    color: "#4F4848",
                  }}
                >
                  127 Điểm
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={14}
                  color="#4F4848"
                />
              </View>
            </Pressable>
            <Pressable style={styles.person_item}>
              <Text
                style={[
                  styles["person_item-text"],
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Yêu thích
              </Text>
              <View style={styles["person_item-right"]}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={14}
                  color="#4F4848"
                />
              </View>
            </Pressable>
            <Pressable style={styles.person_item}>
              <Text
                style={[
                  styles["person_item-text"],
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Địa điểm đã lưu
              </Text>
              <View style={styles["person_item-right"]}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={14}
                  color="#4F4848"
                />
              </View>
            </Pressable>
            <Pressable style={styles.person_item}>
              <Text
                style={[
                  styles["person_item-text"],
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Hình thức thanh toán
              </Text>
              <View style={styles["person_item-right"]}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={14}
                  color="#4F4848"
                />
              </View>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 30,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Cơ hội
          </Text>
          <View style={{ marginTop: 5 }}>
            <Pressable style={styles.person_item}>
              <Text
                style={[
                  styles["person_item-text"],
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Lái xe cùng Grab
              </Text>
              <View style={styles["person_item-right"]}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={14}
                  color="#4F4848"
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default PersonalScreen;
