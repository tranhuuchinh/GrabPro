import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../PersonalScreen.style";

const PersonalItem = ({ title, mark, type, path }) => {
  const navigation = useNavigation();
  const renderContent = () => {
    if (type === 1) {
      return (
        <View style={styles["person_item-right"]}>
          <Image
            source={require("../../../../assets/icons/Personal/ic_crown.png")}
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
            {mark}
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={14} color="#4F4848" />
        </View>
      );
    } else if (type === 2) {
      return (
        <View style={styles["person_item-right"]}>
          <FontAwesomeIcon icon={faChevronRight} size={14} color="#4F4848" />
        </View>
      );
    } else {
      return null;
    }
  };

  const onPress = () => {
    navigation.navigate(path);
  };

  return (
    <Pressable style={styles.person_item} onPress={onPress}>
      <Text style={styles["person_item-text"]}>{title}</Text>
      {renderContent()}
    </Pressable>
  );
};

export default PersonalItem;
