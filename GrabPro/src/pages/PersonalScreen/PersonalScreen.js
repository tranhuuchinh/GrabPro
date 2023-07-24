import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./PersonalScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import OptionItem from "./components/PersonalItem";
// import {   } from "react-router-native";
import {
  faChevronRight,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const PersonalScreen = () => {
  const fontsLoaded = useCustomFonts();
  // const navigation =  ();
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
            <Text style={[styles.person_name]}>Trần Anh Khôi</Text>

            <Pressable
              style={[
                styles.personal_banner_btn,
                { fontFamily: "Poppins_400Regular" },
              ]}
              // onPress={()=>{navigation("/profile")}}
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
            <OptionItem
              title="Vàng"
              text="127 Điểm"
              type={1}
              path="/awardperson"
            />
            <OptionItem title="Yêu thích" type={2} path="/favorite" />
            <OptionItem
              title="Địa điểm đã lưu"
              type={2}
              path="/locationperson"
            />
            <OptionItem
              title="Hình thức thanh toán"
              type={2}
              path="/paymentperson"
            />
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
            <OptionItem
              title="Lái xe cùng Grab"
              type={2}
              path="/some/chance/path"
            />
          </View>
        </View>
      </View>
    );
  }
};

export default PersonalScreen;
