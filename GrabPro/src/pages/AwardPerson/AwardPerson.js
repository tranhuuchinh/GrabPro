import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./AwardPerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import { LinearGradient } from "expo-linear-gradient";

const AwardPerson = () => {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.awperson_container}>
        <Heading title="Hạng thành viên" returnPath="/account" />
        <View style={styles.awperson_banner}>
          <View style={styles["awperson_banner-card"]}>
            <Text style={styles["awperson_banner-card-title"]}>Vàng</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles["awperson_banner-left"]}>
                <View style={styles["awperson_banner-progressbar"]}>
                  <View style={styles["awperson_banner-provalue"]}></View>
                </View>
              </View>
              <View style={styles["awperson_banner-right"]}>
                <Image
                  source={require("../../../assets/icons/Personal/ic_crown.png")}
                  style={{
                    width: 14,
                    height: 14,
                    marginBottom: 2,
                  }}
                />
              </View>
            </View>
            <Text style={styles["awperson_banner-card-txt"]}>
              Điểm cần để lên Diamond: 14
            </Text>
            <LinearGradient
              style={styles["awperson_banner-circle1"]}
              colors={["rgba(201, 255, 252, 1)", "rgba(90, 171, 166, 0)"]}
              start={[1, 0]}
              end={[1, 1]}
            ></LinearGradient>
            <LinearGradient
              style={styles["awperson_banner-circle2"]}
              colors={["rgba(154, 253, 28, 0.63)", "rgba(143, 255, 0, 0)"]}
              start={[0, 0]}
              end={[1, 1]}
            ></LinearGradient>
          </View>
        </View>
        <View style={styles.awperson_award}>
          <Text style={styles["awperson_award-title"]}>Bạn có</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles["awperson_award-mark"]}>136</Text>
            <Text style={styles["awperson_award-txt"]}>điểm GrabRewards</Text>
          </View>
        </View>
        <View style={styles.awperson_sales}>
          <Text style={styles["awperson_sales-title"]}>Ưu đãi hấp dẫn</Text>
          <View>
            <View style={styles["awperson_sales-item"]}>
              <View style={styles["awperson_sales-item-left"]}>
                <Image
                  source={require("../../../assets/imgs/Award/sale_banner.png")}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                ></Image>
              </View>
              <View style={styles["awperson_sales-item-right"]}>
                <Text style={styles["awperson_sales-right-title"]}>
                  Giảm 30% hóa đơn 300.000 VNĐ
                </Text>
                <Text style={styles["awperson_sales-right-type"]}>GrabCar</Text>
                <View style={styles["awperson_sales-right-infor"]}>
                  <FontAwesomeIcon
                    icon={faCrown}
                    style={{ marginRight: 5, marginBottom: 5 }}
                    size={15}
                    color="#999999"
                  />
                  <Text style={styles["awperson_sales-right-point"]}>
                    1,500
                  </Text>
                  <Text style={styles["awperson_sales-right-txt"]}>Points</Text>
                </View>
              </View>
            </View>
            <View style={styles["awperson_sales-item"]}>
              <View style={styles["awperson_sales-item-left"]}>
                <Image
                  source={require("../../../assets/imgs/Award/sale_banner.png")}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                ></Image>
              </View>
              <View style={styles["awperson_sales-item-right"]}>
                <Text style={styles["awperson_sales-right-title"]}>
                  Giảm 30% hóa đơn 300.000 VNĐ
                </Text>
                <Text style={styles["awperson_sales-right-type"]}>GrabCar</Text>
                <View style={styles["awperson_sales-right-infor"]}>
                  <FontAwesomeIcon
                    icon={faCrown}
                    style={{ marginRight: 5, marginBottom: 5 }}
                    size={15}
                    color="#999999"
                  />
                  <Text style={styles["awperson_sales-right-point"]}>
                    1,500
                  </Text>
                  <Text style={styles["awperson_sales-right-txt"]}>Points</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default AwardPerson;
