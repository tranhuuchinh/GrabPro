import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./PersonalScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import OptionItem from "./components/PersonalItem";
import { useNavigation } from "@react-navigation/native";
import {
  faChevronRight,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import useAxios from "../../hooks/useAxios";
import StateManager from "../../service/commandbook/receiver";

const PersonalScreen = () => {
  const getStateCommand = StateManager.getState();
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [award, setAward] = useState("");
  const [name, setName] = useState("");
  const [bonus, setBonus] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [profile, setProfile] = useState();

  const [response, error, isLoading] = useAxios(
    "get",
    `/customer/profile/${getStateCommand.id}`,
    {},
    {},
    []
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      setProfile(response.data);
      setAward(response.data.mainAward);
      setName(response.data.fullname);
      setBonus(response.data.bonusPoint);
      setFavorites(response.data.favoriteLocations);
    }
  }, [isLoading]);

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
            <Text style={[styles.person_name]}>{name}</Text>

            <Pressable
              style={[
                styles.personal_banner_btn,
                { fontFamily: "Poppins_400Regular" },
              ]}
              onPress={() => {
                navigation.navigate("/profile", profile);
              }}
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
              title={award}
              mark={bonus.toString() + " điểm"}
              type={1}
              path="/awardperson"
              props={{ award: award, point: bonus }}
            />
            <OptionItem
              title="Yêu thích"
              type={2}
              path="/favorite"
              props={{ favorites }}
            />
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
