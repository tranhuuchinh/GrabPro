import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import {   } from "react-router-native";
import styles from "./Heading.style";
import { Image } from "react-native";
import { useCustomFonts } from "../../styles/fonts";

const Heading = ({ title, returnPath, content, img, type }) => {
  // const navigation =  ();
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) return null;

  // const handlePress = () => {
  //   navigation(returnPath);
  // };

  return (
    <View style={[styles.heading_container, { height: type ? 100 : 80 }]}>
      <View style={styles.heading_upper}></View>
      <View style={styles.heading_content}>
        {!type ? (
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>
            {title}
          </Text>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Image
              source={img}
              style={{ width: 44, height: 44, borderRadius: 50 }}
            />
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 14,
                  paddingLeft: 10,
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                  paddingLeft: 10,
                  fontSize: 12,
                }}
              >
                {content}
              </Text>
            </View>
          </View>
        )}
        <Pressable
          style={{ position: "absolute", left: 20 }}
          // onPress={handlePress}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#434343" />
        </Pressable>
      </View>
    </View>
  );
};

export default Heading;
