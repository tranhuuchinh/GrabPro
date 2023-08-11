import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./AwardPerson.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCustomFonts } from "../../styles/fonts";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../hooks/useAxios";

const AwardPerson = () => {
  const fontsLoaded = useCustomFonts();
  const [point, setPoint] = useState("");
  const [next, setNext] = useState("");
  const route = useRoute();
  const props = route.params;

  const [response, error, isLoading] = useAxios(
    "get",
    "/sales/awards",
    {},
    {},
    []
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      response.data.forEach((item, index) => {
        if (item.title === props.award) {
          setPoint(response.data[index + 1].maxpoint);
          setNext(response.data[index + 1].title);
        }
      });
    }
  }, [isLoading]);

  const calculateDis = (a, b) => {
    return ((a * 100) / b).toString() + "%";
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.awperson_container}>
        <Heading title="Hạng thành viên" returnPath="/account" />
        <View style={styles.awperson_banner}>
          <View style={styles["awperson_banner-card"]}>
            <Text style={styles["awperson_banner-card-title"]}>
              {props.award}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles["awperson_banner-left"]}>
                <View style={styles["awperson_banner-progressbar"]}>
                  <View
                    style={{
                      width: calculateDis(props.point, point),
                      height: "100%",
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  ></View>
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
              Điểm cần để lên {next}: {point - props.point}
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
            <Text style={styles["awperson_award-mark"]}>{props.point}</Text>
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
