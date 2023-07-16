import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./HomeScreen.style";
import Navigetion from "../../components/Navigation/Navigetion";
import Car from "../../../assets/imgs/Home/grabCar.png";
import Bike from "../../../assets/imgs/Home/grabBike.png";
import Crown from "../../../assets/imgs/Home/crown.png";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Xử lý tìm kiếm dựa trên searchText
    console.log("Searching for:", searchText);
  };

  const handleFavorite = () => {
    // Xử lý khi người dùng nhấn vào nút "Favorite" ở đây
    // Ví dụ: thực hiện một hành động hoặc cập nhật trạng thái
    console.log("Người dùng đã nhấn vào nút Favorite");
  };

  const handleButton1Press = () => {
    // Xử lý khi nút 1 được nhấn
  };

  const handleButton2Press = () => {
    // Xử lý khi nút 2 được nhấn
  };
  return (
    <View style={styles.homeContainer}>
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
            placeholder="Nhập từ khóa..."
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
            <Feather name="heart" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.homeBookType}>
        <TouchableOpacity
          style={styles.homeBookCar}
          onPress={handleButton1Press}
        >
          <Image
            style={{
              justifyContent: "flex-start",
              width: 70,
              height: 70,
              // alignSelf: "center",
            }}
            source={Car}
          />
          <Text style={styles.homeBookTitle}>Ô tô</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeBookBike}
          onPress={handleButton2Press}
        >
          <Image
            style={{
              justifyContent: "flex-start",
              width: 65,
              height: 70,
              // alignSelf: "center",
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
              fontSize: 16,
              marginBottom: 10,
              paddingLeft: 10,
            }}
          >
            Bậc tài khoản
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFB803",
              paddingLeft: 10,
            }}
          >
            Vip
          </Text>
        </View>
        <View style={styles.homeWrapCardScore}>
          <View style={styles.homeWrapScore}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                paddingLeft: 10,
              }}
            >
              Điểm tích lũy
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingLeft: 10,
              }}
            >
              758
            </Text>
          </View>
          <View>
            <Image
              style={{
                justifyContent: "flex-start",
                width: 50,
                height: 50,
                // alignSelf: "center",
              }}
              source={Crown}
            />
          </View>
        </View>
      </View>

      <Navigetion />
    </View>
  );
};

export default HomeScreen;
