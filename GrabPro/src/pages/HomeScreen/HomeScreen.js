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

      <Navigetion />
    </View>
  );
};

export default HomeScreen;
