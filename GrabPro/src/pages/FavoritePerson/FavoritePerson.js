import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./FavoritePerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import { useRoute } from "@react-navigation/native";

const FavoritePerson = () => {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();
  const props = route.params;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.favorite_container}>
        <Heading title="Yêu thích" returnPath="/account" />
        <Text style={styles.favorite_txt1}>Địa điểm yêu thích</Text>
        <View>
          {props.favorites.map((item, index) => (
            <Pressable style={styles.favorite_item} key={index}>
              <View style={styles["favorite_item-left"]}>
                <View style={styles["favorite_item-circle"]}>
                  <FontAwesomeIcon icon={faBookmark} size={18} color="white" />
                </View>
              </View>
              <View style={styles["favorite_item-right"]}>
                <Text style={styles["favorite_item-title"]}>
                  {item.description}
                </Text>
                <Text
                  style={styles["favorite_item-des"]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.address}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    );
  }
};

export default FavoritePerson;
