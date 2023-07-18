import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import ImageMap from "../../assets/imgs/Home/image3.png";
import styles from "./HomePage.style";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLocationDot,
  faCar,
  faDollarSign,
  faBolt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

const HomePage = () => {
  return (
    <View style={styles.homePageContainer}>
      <View style={{ flex: 1, position: "relative" }}>
        <View style={styles.homePageImage}>
          <Image source={ImageMap} style={{ width: "100%", height: "100%" }} />
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            bottom: 0,
            flex: 0.3,
            position: "relative",
          }}
        >
          <View style={styles.homePageWrap}>
            <View style={styles.homePageStatus}></View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                textAlign: "center",
              }}
            >
              Bạn đang offline
            </Text>
          </View>

          <View style={styles.homePageWrapOption}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homePageOption}>
                <FontAwesomeIcon icon={faCar} size={30} color="#fff" />
              </View>
              <Text
                style={{
                  width: 70,
                  height: 40,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Loại dịch vụ
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homePageOption}>
                <FontAwesomeIcon icon={faLocationDot} size={30} color="#fff" />
              </View>
              <Text
                style={{
                  width: 70,
                  height: 40,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Điểm đến yêu thích
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homePageOption}>
                <FontAwesomeIcon
                  style={{ width: 70, fontSize: 12 }}
                  icon={faDollarSign}
                  size={30}
                  color="#fff"
                />
              </View>
              <Text
                style={{
                  width: 70,
                  height: 40,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Tiền vốn hoạt động
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homePageOption}>
                <FontAwesomeIcon icon={faBolt} size={30} color="#fff" />
              </View>

              <Text
                style={{
                  width: 70,
                  height: 40,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Tự động nhận
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.homePageOption}>
                <FontAwesomeIcon icon={faEllipsis} size={30} color="#fff" />
              </View>
              <Text
                style={{
                  width: 70,
                  height: 40,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Xem thêm
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
