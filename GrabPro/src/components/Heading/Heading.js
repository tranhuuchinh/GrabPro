import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-native";
import { useNavigation } from "@react-navigation/native";

const Heading = ({ title, returnPath }) => {
  const navigation = useNavigate();

  const handlePress = () => {
    navigation(returnPath);
  };

  return (
    <View
      style={{
        width: "100%",
        height: 80,
        elevation: 5,
      }}
    >
      <View
        style={{ height: 36, width: "100%", backgroundColor: "white" }}
      ></View>
      <View
        style={{
          height: 44,
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomColor: "rgba(0, 0, 0, 0.46)",
          borderBottomWidth: 1,
        }}
      >
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
