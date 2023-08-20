import React, { useState } from "react";
import { Image, Text, View, TextInput, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faLocationDot,
  faArrowRightLong,
  faPlus,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import Car from "../../assets/imgs/BookCar/Car.png";
import LocationItem from "../../assets/imgs/BookCar/LocationItem.png";
import Book from "../../assets/imgs/BookCar/Book.png";
import Favor from "../../assets/imgs/BookCar/Favor.png";
import styles from "./BookCarHome.style";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import StateManager from "../../service/commandbook/receiver";
import { SetToCommand } from "../../service/commandbook/command";

const apiKey = '5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114'

const BookCarHome = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [text, setText] = useState("");
  const [dataSearch, setDataSearch] = useState([]);


  const handlePressBack = () => {
    navigation.goBack();
  };
  const handlePressLocation = (location) => {
    //Chọn địa điểm đến
    // location là object:
    // {
    //   title: 'Tên địa điểm',
    //   latitude: 12,
    //   altitude: 23
    // }

    const setLocationTo = {
      name: location.properties.name,
      lat: location.geometry.coordinates[1],
      lng: location.geometry.coordinates[0]
    };

    const setDestination = new SetToCommand(StateManager, setLocationTo);
    setDestination.execute();
    navigation.navigate("/bookcar-pickup", { locationFrom: null, locationTo: location});
  };
  const handlePressBookCar = () => {
    navigation.navigate("/bookcar-book");
  };

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
  
  

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.bookcar__container}>
        <View style={styles["bookcar__container-header"]}>
          <View style={styles["bookcar__container-header-left"]}>
            <Pressable onPress={() => handlePressBack()}>
              <FontAwesomeIcon icon={faChevronLeft} size={20} color="#434343" />
            </Pressable>
            <Text style={styles["bookcar__container-header-left-title"]}>
              Di chuyển
            </Text>
            <Text style={styles["bookcar__container-header-left-content"]}>
              Chúng tôi sẽ đưa bạn đến bất kì đâu!
            </Text>
          </View>
          <View style={styles["bookcar__container-header-right"]}>
            <Image source={Car} />
          </View>
        </View>
        <View style={styles["bookcar__container-body"]}>
          <View style={styles["bookcar__container-search"]}>
            <TextInput
              style={styles["bookcar__container-search-input"]}
              value={text}
              onChangeText={handleChangeText}
              placeholder="Đến đâu?"
              autoFocus={false}
            />
            <FontAwesomeIcon
              icon={faLocationDot}
              size={18}
              color="#ef5e50"
              style={{
                marginRight: 10,
                position: "absolute",
                left: 24,
                top: "25%",
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            {dataSearch && dataSearch.map((location, index) => (
              <Pressable
                onPress={() => handlePressLocation(location)}
                key={index}
              >
                <View style={styles["bookcar__container-location"]}>
                  <View style={{ width: "10%" }}>
                    <Image
                      source={LocationItem}
                      style={{ width: 25, height: 25 }}
                    />
                  </View>

                  <View style={{ width: "70%" }}>
                    <Text style={styles["bookcar__container-location-title"]}>
                      {location.properties.label}
                    </Text>
                    <Text
                      style={styles["bookcar__container-location-content"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {location.properties.housenumber}{location.properties.housenumber ? ' ' : ''}{location.properties.street}{location.properties.street ? ',' : ''} {location.properties.county}, {location.properties.locality}
                    </Text>
                  </View>

                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    size={16}
                    color="#434343"
                    style={{ width: "20%" }}
                  />
                </View>
              </Pressable>
            ))}

          </View>

          <View style={styles["bookcar__container-movemore"]}>
            <Text style={styles["bookcar__container-movemore-title"]}>
              Thêm nhiều cách để di chuyển
            </Text>

            <Pressable
              style={styles["bookcar__container-movemore-book"]}
              onPress={() => handlePressBookCar()}
            >
              <Image source={Book} style={{ width: 36, height: 36 }} />
              <Text style={styles["bookcar__container-movemore-book-content"]}>
                Thuê xe đặt lịch trước
              </Text>
            </Pressable>
          </View>

          <View>
            <View style={styles["bookcar__container-favorlocation-header"]}>
              <Text style={styles["bookcar__container-favorlocation-title"]}>
                Đến các địa điểm yêu thích
              </Text>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#EFF9F8",
                  borderRadius: 200,
                }}
              ></View>
            </View>

            <View style={styles["bookcar__container-favorlocation-list"]}>
              <View style={styles["bookcar__container-favorlocation-item"]}>
                <View
                  style={{
                    padding: 13,
                    backgroundColor: "#EFF9F8",
                    borderRadius: 200,
                  }}
                >
                  <Image source={Favor} style={{ width: 24, height: 24 }} />
                </View>

                <Text
                  style={styles["bookcar__container-favorlocation-content"]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  KTX 135B Trần Hưng Đạo
                </Text>
              </View>

              <View style={styles["bookcar__container-favorlocation-item"]}>
                <View
                  style={{
                    padding: 13,
                    backgroundColor: "#EFF9F8",
                    borderRadius: 200,
                    position: "relative",
                  }}
                >
                  <Image source={Favor} style={{ width: 24, height: 24 }} />

                  <View
                    style={styles["bookcar__container-favorlocation-item-ic"]}
                  >
                    <FontAwesomeIcon icon={faPlus} size={12} color="#434343" />
                  </View>
                </View>

                <Text
                  style={styles["bookcar__container-favorlocation-content"]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Nhà
                </Text>
              </View>

              <View style={styles["bookcar__container-favorlocation-item"]}>
                <View
                  style={{
                    padding: 13,
                    backgroundColor: "#EFF9F8",
                    borderRadius: 200,
                  }}
                >
                  <Image source={Favor} style={{ width: 24, height: 24 }} />

                  <View
                    style={styles["bookcar__container-favorlocation-item-ic"]}
                  >
                    <FontAwesomeIcon icon={faPlus} size={12} color="#434343" />
                  </View>
                </View>

                <Text
                  style={styles["bookcar__container-favorlocation-content"]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Cơ quan
                </Text>
              </View>

              <View style={styles["bookcar__container-favorlocation-item"]}>
                <View
                  style={{
                    padding: 13,
                    backgroundColor: "#EFF9F8",
                    borderRadius: 200,
                  }}
                >
                  <Image source={Favor} style={{ width: 24, height: 24 }} />

                  <View
                    style={styles["bookcar__container-favorlocation-item-ic"]}
                  >
                    <FontAwesomeIcon icon={faPlus} size={12} color="#434343" />
                  </View>
                </View>

                <Text
                  style={styles["bookcar__container-favorlocation-content"]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Mới
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default BookCarHome;
