import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-native";
import styles from "./Heading.style";

const Heading = ({ title, returnPath }) => {
  const navigation = useNavigate();

  const handlePress = () => {
    navigation(returnPath);
  };

  return (
    <View style={styles.heading_container}>
      <View style={styles.heading_upper}></View>
      <View style={styles.heading_content}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>
          {title}
        </Text>
        <Pressable
          style={{ position: "absolute", left: 20 }}
          onPress={handlePress}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#434343" />
        </Pressable>
      </View>
    </View>
  );
};

export default Heading;
