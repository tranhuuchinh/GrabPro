import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./HomeScreen.style";

import Car from "../../../assets/imgs/Home/grabCar.png";
import Bike from "../../../assets/imgs/Home/grabBike.png";
import Crown from "../../../assets/imgs/Home/crown.png";
import ImgBg from "../../../assets/imgs/Home/no1.jpeg";
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../../styles/fonts";
import useAxios from "../../hooks/useAxios";
import StateManager from "../../service/commandbook/receiver";
import { SetTypeCommand } from "../../service/commandbook/command";

const HomeScreen = () => {
  const getStateCommand = StateManager.getState();
  const [searchText, setSearchText] = useState("");
  const [award, setAward] = useState("");
  const [bonus, setBonus] = useState("");
  const [favorites, setFavorites] = useState([]);
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [responseProduct, errorProduct, isLoadingProduct] = useAxios(
    "get",
    `/customer/profile/${getStateCommand.id}`,
    {},
    {},
    []
  );

  useEffect(() => {
    if (responseProduct && responseProduct.data !== undefined) {
      setAward(responseProduct.data.mainAward);
      setBonus(responseProduct.data.bonusPoint);
      setFavorites(responseProduct.data.favoriteLocations);
    }
  }, [isLoadingProduct]);

  const handleSearch = () => {
    // Xử lý tìm kiếm dựa trên searchText
    console.log("Searching for:", searchText);
  };

  const handleFavorite = () => {
    navigation.navigate("Tài khoản", {
      screen: "/favorite",
      params: { favorites },
    });
  };

  const handlePressOto = () => {
    const setType = new SetTypeCommand(StateManager, "4seats");
    setType.execute();
    navigation.navigate("/bookcar-home");
  };

  const handlePressBike = () => {
    const setType = new SetTypeCommand(StateManager, "motorbike");
    setType.execute();
    navigation.navigate("/bookcar-home");
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <KeyboardAvoidingView style={styles.homeContainer}>
        <View style={styles.homeBanner}></View>
        <View style={styles.homeSearchWrap}>
          <View style={styles.homeCtnSearch}>
            <TouchableOpacity
              style={styles.homeButtonSearch}
              onPress={handleSearch}
            >
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              style={styles.homeInput}
              placeholder="Nhập địa điểm đến"
              placeholderTextColor="#888888"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <View style={styles.homeFavorite}>
            <TouchableOpacity
              style={styles.homeButtonFavorite}
              onPress={handleFavorite}
            >
              <Feather name="heart" size={25} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.homeBookType}>
          <TouchableOpacity style={styles.homeBookCar} onPress={handlePressOto}>
            <Image
              style={{
                justifyContent: "flex-start",
                width: 50,
                height: 50,
              }}
              source={Car}
            />
            <Text style={styles.homeBookTitle}>Ô tô</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeBookBike}
            onPress={handlePressBike}
          >
            <Image
              style={{
                justifyContent: "flex-start",
                width: 50,
                height: 50,
              }}
              source={Bike}
            />
            <Text style={styles.homeBookTitle}>Xe máy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.homeWrapCard}>
          <View style={styles.homeWrapCardType}>
            <Text
              style={{
                fontSize: 13,
                marginBottom: 10,
                paddingLeft: 10,
              }}
            >
              Bậc tài khoản
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#FFB803",
                paddingLeft: 10,
              }}
            >
              {award}
            </Text>
          </View>
          <View style={styles.homeWrapCardScore}>
            <View style={styles.homeWrapScore}>
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 10,
                  paddingLeft: 10,
                }}
              >
                Điểm tích lũy
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: 10,
                }}
              >
                {bonus}
              </Text>
            </View>
            <View>
              <Image
                style={{
                  position: "absolute",
                  width: 35,
                  height: 35,
                  right: 5,
                  top: 5,
                }}
                source={Crown}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            paddingHorizontal: 10,
          }}
        >
          <KeyboardAvoidingView
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              resizeMode="cover"
              borderRadius={10}
              style={{
                width: "100%",
                height: "100%",
              }}
              source={ImgBg}
            />
          </KeyboardAvoidingView>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

export default HomeScreen;
