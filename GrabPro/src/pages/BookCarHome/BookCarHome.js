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

const locations = [
  {
    title: "145/44 Đường 3 Tháng 2",
    detail:
      "145/44 Đường 3 Tháng 2, P.11, Q.10, Hồ Chí Minh, 7haha 123 456 là lá la",
  },
  {
    title: "145/44 Đường 3 Tháng 2",
    detail:
      "145/44 Đường 3 Tháng 2, P.11, Q.10, Hồ Chí Minh, 7haha 123 456 là lá la",
  },
  {
    title: "145/44 Đường 3 Tháng 2",
    detail:
      "145/44 Đường 3 Tháng 2, P.11, Q.10, Hồ Chí Minh, 7haha 123 456 là lá la",
  },
];

const BookCarHome = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const [text, setText] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    const setDestination = new SetToCommand(StateManager, location);
    setDestination.execute();
    navigation.navigate("/bookcar-pickup");
  };
  const handlePressBookCar = () => {
    navigation.navigate("/bookcar-book");
  };

  const handleChangeText = (inputText) => {
    setText(inputText);
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
            {locations.map((location, index) => (
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
                      {location.title}
                    </Text>
                    <Text
                      style={styles["bookcar__container-location-content"]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {location.detail}
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
