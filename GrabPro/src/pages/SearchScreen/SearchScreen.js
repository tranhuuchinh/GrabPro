import React, { useRef, useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import styles from "./SearchScreen.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import {
  faArrowLeftLong,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Empty from "../../../assets/imgs/Search/search_empty.png";

const locations = [
  {
    name: "Gemnini Saigon Hotel",
    distance: "2.07Km",
    destination: "135B Trần Hưng Đạo",
  },
  {
    name: "GIA VIEN HOTEL",
    distance: "2.07Km",
    destination: "227 Nguyễn Văn Cừ, quận 5, TP.HCM",
  },
  {
    name: "Đại học Khoa học Tự Nhiên",
    distance: "2.07Km",
    destination: "227 Nguyễn Văn Cừ, quận 5, TP.HCM",
  },
  {
    name: "Thành Phố Thủ Đức",
    distance: "2.07Km",
    destination: "167 Nguyễn Thái Học, P.Cầu Ông Lãnh",
  },
];

const LocationPerson = () => {
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const searchText = text.toLowerCase().trim();
    if (searchText === "") {
      setResult([]);
    } else {
      const filteredLocations = locations.filter((location) => {
        const locationName = location.name.toLowerCase();
        return locationName.includes(searchText);
      });
      setResult(filteredLocations);
    }
  }, [text]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.search_container}>
        <View style={styles.search_header}>
          <View style={styles.search_header_upper}></View>
          <View style={styles.search_header_down}>
            <Pressable
              style={styles.search_header_down_back}
              onPress={() => {
                navigation.navigate("/locationperson");
              }}
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                color="#666666"
                size={20}
              />
            </Pressable>
            <View style={styles.search_header_down_ctn}>
              <FontAwesomeIcon icon={faLocationDot} size={20} color="#EB3223" />
              <TextInput
                placeholder="Nhập địa chỉ"
                style={styles.search_header_down_input}
                onChangeText={setText}
              />
            </View>
          </View>
        </View>

        {result.length > 0 ? (
          <View style={styles.search_context}>
            {result.map((item, index) => (
              <Pressable style={styles.search_item} key={index}>
                <View style={styles["search_item-left"]}>
                  <View style={styles["search_item-circle"]}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size={18}
                      color="white"
                    />
                  </View>
                </View>
                <View style={styles["search_item-right"]}>
                  <Text
                    style={styles["search_item-title"]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={styles["search_item-des"]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.distance} • {item.destination}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.search_body}>
            <View style={styles.search_body_center}>
              <Image style={styles.search_body_icon} source={Empty} />
              <Text style={styles.search_body_center_txt1}>
                Bạn có một địa điểm thân quen?
              </Text>
              <Text style={styles.search_body_center_txt2}>
                Tìm và lưu lại để sử dụng nhanh cho lần sau
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
};

export default LocationPerson;
