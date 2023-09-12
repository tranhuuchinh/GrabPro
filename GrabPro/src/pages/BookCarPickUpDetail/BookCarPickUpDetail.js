import React, {useState} from "react";
import { Image, Pressable, Text, View, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLocationDot,
  faClose,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "./BookCarPickUpDetail.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import StateManager from "../../service/commandbook/receiver";
import {
  SetToCommand,
  SetFromCommand,
  setDistance
} from "../../service/commandbook/command";
import { useRoute } from "@react-navigation/native";

const apiKey = '5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114'

const BookCarPickUpDetail = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  // Lấy dữ liệu từ BookCarHome gửi qua bằng navigate
  const route = useRoute();
  const locationFrom = route.params.from;
  const locationTo = route.params.to;

  const [text, setText] = useState(locationFrom.info);
  const [dataSearch, setDataSearch] = useState([]);

  const handleChangeText = async (newText) => {
    setText(newText); // Cập nhật giá trị của TextInput
  
    // Gọi API để lấy danh sách địa điểm dựa trên newText
    const apiUrl = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${apiKey}&text=${newText}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Kiểm tra dữ liệu trả về có khác undefined hay không
      if (data && data.features && Array.isArray(data.features)) {
        // Lọc chỉ lấy các địa điểm ở Việt Nam
        const vietnamLocations = data.features.filter((location) =>
          location.properties.country === "Vietnam" || location.properties.country === "Viet Nam"
        );
  
        setDataSearch(vietnamLocations.slice(0, 3)); 
      } else {
        console.log("Dữ liệu API không hợp lệ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocation = (location) => {
      const locationFrom = {
        address: location.properties.name,
        lat: location.geometry.coordinates[1],
        lng: location.geometry.coordinates[0]
      }

      const setFrom = new SetFromCommand(StateManager, locationFrom);
      setFrom.execute();
      navigation.navigate("/bookcar-pickup", {locationFrom: {latitude: location.geometry.coordinates[1] , longitude: location.geometry.coordinates[0]}, locationTo: locationTo});
  }

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcarpickupdetail__container}>
        <View style={styles["bookcarpickupdetail__container-header"]}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesomeIcon icon={faClose} size={24} color="#33363f" />
          </Pressable>
          <Text style={styles["bookcarpickupdetail__container-header-title"]}>
            Chọn điểm đón
          </Text>
        </View>

        <View style={styles["bookcarpickupdetail__container-search"]}>
          <View style={styles["bookcarpickupdetail__container-search-up"]}>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size={24}
              color="green"
            />

          <TextInput
            style={styles["bookcarpickupdetail__container-search-up-title"]}
            value={text}
            onChangeText={handleChangeText}
          />
            {/* <Text
              style={styles["bookcarpickupdetail__container-search-up-title"]}
            >
              Tìm địa điểm đón/nhận hàng
            </Text> */}
          </View>

          <View style={styles["bookcarpickupdetail__container-search-down"]}>
            <FontAwesomeIcon icon={faLocationDot} size={24} color="gray" />
            <Text 
              style={styles["bookcarpickupdetail__container-search-down-title"]}
              placeholder="227 Nguyễn Văn Cừ"
            >{locationTo.properties.housenumber}{locationTo.properties.housenumber ? ' ' : ''}{locationTo.properties.street}{locationTo.properties.street ? ',' : ''} {locationTo.properties.county}, {locationTo.properties.locality}</Text>
          </View>
        </View>

        <View style={styles["bookcarpickupdetail__container-list"]}>
          {/* <Text style={styles["bookcarpickupdetail__container-list-title"]}>
            Lịch sử
          </Text> */}

          {dataSearch && dataSearch.map((location, index) => (
            <Pressable
              style={styles["bookcarpickupdetail__container-history"]}
              key={index}
              onPress={() =>handleLocation(location)}
            >
              <View style={{ width: "10%", marginRight: 6 }}>
                <FontAwesomeIcon icon={faClock} size={24} color="#727272" />
              </View>

              <View style={{ width: "70%" }}>
                <Text
                  style={styles["bookcarpickupdetail__container-history-title"]}
                >
                  {location.properties.label}
                </Text>
                <Text
                  style={
                    styles["bookcarpickupdetail__container-history-content"]
                  }
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {location.properties.housenumber}{location.properties.housenumber ? ' ' : ''}{location.properties.street}{location.properties.street ? ',' : ''} {location.properties.county}, {location.properties.locality}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    );
  }
};

export default BookCarPickUpDetail;
