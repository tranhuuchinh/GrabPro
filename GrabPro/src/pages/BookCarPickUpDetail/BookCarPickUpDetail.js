import React from "react";
import { Image, Pressable, Text, View } from "react-native";
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
} from "../../service/commandbook/command";

const historyList = [
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

const BookCarPickUpDetail = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  //Chọn địa điểm đến
  // location là object:
  // {
  //   title: 'Tên địa điểm',
  //   latitude: 12,
  //   altitude: 23
  // }
  // const setFrom = new SetFromCommand(StateManager, location);
  // setFrom.execute();
  // const setDestination = new SetToCommand(StateManager, location);
  // setDestination.execute();

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
            <Text
              style={styles["bookcarpickupdetail__container-search-up-title"]}
            >
              Tìm địa điểm đón/nhận hàng
            </Text>
          </View>

          <View style={styles["bookcarpickupdetail__container-search-down"]}>
            <FontAwesomeIcon icon={faLocationDot} size={24} color="gray" />
            <Text
              style={styles["bookcarpickupdetail__container-search-down-title"]}
            >
              227 Nguyễn Văn Cừ
            </Text>
          </View>
        </View>

        <View style={styles["bookcarpickupdetail__container-list"]}>
          <Text style={styles["bookcarpickupdetail__container-list-title"]}>
            Lịch sử
          </Text>

          {historyList.map((history, index) => (
            <Pressable
              style={styles["bookcarpickupdetail__container-history"]}
              key={index}
            >
              <View style={{ width: "10%", marginRight: 6 }}>
                <FontAwesomeIcon icon={faClock} size={24} color="#727272" />
              </View>

              <View style={{ width: "70%" }}>
                <Text
                  style={styles["bookcarpickupdetail__container-history-title"]}
                >
                  145/44 Đường 3 Tháng 2
                </Text>
                <Text
                  style={
                    styles["bookcarpickupdetail__container-history-content"]
                  }
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  145/44 Đường 3 Tháng 2, P.11, Q.10, Hồ Chí Minh, 7haha 123 456
                  là lá la
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
