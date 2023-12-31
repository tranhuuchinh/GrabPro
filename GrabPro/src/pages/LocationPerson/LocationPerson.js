import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./LocationPerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faBookmark, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import { useNavigation } from "@react-navigation/native";
import useAxios from "../../hooks/useAxios";
import StateManager from '../../service/commandbook/receiver'

const LocationPerson = () => {
  const getStateCommand = StateManager.getState();
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1);
  const [savedLocations, setLocations] = useState([]);

  const [response, error, isLoading] = useAxios(
    "get",
    `/customer/profile/${getStateCommand.id}`,
    {},
    {},
    []
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      setLocations(response.data.savedLocations);
    }
  }, [isLoading]);

  const handleSearch = () => {
    navigation.navigate("Khác", { screen: "/search" });
  };

  const setDelete = (idx) => {
    setSelectedLocationIndex(idx);
    setIsOpen(true);
  };

  const handleDeletePress = (index) => {
    return () => setDelete(index);
  };

  const handleDelete = () => {
    if (selectedLocationIndex !== -1) {
      locations.splice(selectedLocationIndex, 1);
      setSelectedLocationIndex(-1);
      setIsOpen(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.location_container}>
        <Heading title="Địa điểm đã lưu" returnPath="/account" />
        <Text style={styles.location_txt1}>Địa điểm thân quen</Text>
        <View style={{ marginBottom: 20 }}>
          {savedLocations.map((item, index) => (
            <Pressable style={styles.location_item} key={index}>
              <View style={styles["location_item-left"]}>
                <View style={styles["location_item-circle"]}>
                  <FontAwesomeIcon icon={faBookmark} size={18} color="white" />
                </View>
              </View>
              <View style={styles["location_item-right"]}>
                <Text style={styles["location_item-title"]}>
                  {item.description}
                </Text>
                <Text
                  style={styles["location_item-des"]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.address}
                </Text>
              </View>
              <Pressable
                style={styles["location_item-trash"]}
                onPress={handleDeletePress(index)}
              >
                <FontAwesomeIcon icon={faTrash} size={20} color="#666666" />
              </Pressable>
            </Pressable>
          ))}
          <Pressable style={styles.location_item} onPress={handleSearch}>
            <View style={styles["location_item-left"]}>
              <View style={styles["location_item-circle"]}>
                <FontAwesomeIcon icon={faPlus} size={18} color="white" />
              </View>
            </View>
            <View style={styles["location_item-right"]}>
              <Text
                style={[styles["location_item-title"], { color: "#075CDB" }]}
              >
                Thêm
              </Text>
              <Text style={styles["location_item-des"]}>
                Lưu làm địa chỉ thân quen
              </Text>
            </View>
          </Pressable>
        </View>
        {isOpen && (
          <View style={styles.location_overlay}>
            <View style={styles.location_modal}>
              <Text style={styles["location_modal-title"]}>
                Bạn thật sự muốn xóa ?
              </Text>
              <View style={styles["location_modal-btns"]}>
                <Pressable
                  style={styles["location_modal-button"]}
                  onPress={() => setIsOpen(false)}
                >
                  <Text style={styles["location_modal-txt"]}>Quay lại</Text>
                </Pressable>
                <Pressable
                  style={styles["location_modal-button"]}
                  onPress={() => {
                    handleDelete();
                  }}
                >
                  <Text style={styles["location_modal-txt"]}>Xóa</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
};

export default LocationPerson;
