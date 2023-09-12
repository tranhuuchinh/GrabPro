import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import styles from "./ActivityDetail.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleArrowUp,
  faLocationArrow,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useCustomFonts } from "../../styles/fonts";
import Heading from "../../components/Heading/Heading";
import Grab from "../../../assets/icons/ActivityDetail/ic_grab.png";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../hooks/useAxios";
import { axiosClient } from "../../api/axios";

const truncateString = (inputString, maxLength) => {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength) + "...";
  }
  return inputString;
};

const formatDate = (inputDate) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

const formatNumberWithDots = (inputNumber) => {
  if (isNaN(inputNumber)) {
    return inputNumber;
  }

  const formattedNumber = Number(inputNumber).toLocaleString("en-US");
  return formattedNumber;
};

const ActivityDetail = () => {
  const fontsLoaded = useCustomFonts();
  const route = useRoute();
  const props = route.params;
  const [rating, setRating] = useState(props.feedback);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [trans, setTrans] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const [response, error, isLoading] = useAxios(
    "get",
    `/driver/${props.idDriver}`,
    {},
    {},
    []
  );

  useEffect(() => {
    if (response && response.data !== undefined) {
      setName(response.data.fullname);
      setCode(response.data.transport.code);
      setTrans(response.data.transport.name);
    }
  }, [isLoading]);

  useEffect(() => {
    setRating(props.feedback);
  }, [props]);

  useEffect(() => {
    setIsEditable(false);
    const object = {
      star: rating,
    };
    axiosClient.patch(`/orders/${props._id}`, object, {}, []).then((res) => {
      if (res.status === "success") {
        setIsEditable(true);
      }
    });
  }, [rating]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView style={styles.dtactivity_container}>
        <Heading title="Thông tin cuốc đi" returnPath="Hoạt động" />
        <View style={styles.dtactivity_infor}>
          <View style={styles.dtactivity_heading}>
            <Text style={styles.dtactivity_heading_txt1}>
              Chuyến đi đã hoàn thành
            </Text>
            <Text style={styles.dtactivity_heading_txt2}>
              {formatDate(props.updatedAt)}
            </Text>
          </View>
          <View style={styles.dtactivity_heading}>
            <Text style={styles.dtactivity_heading_txt1}>Mã đặt xe</Text>
            <Text style={styles.dtactivity_heading_txt2}>{props.code}</Text>
          </View>
        </View>
        <View style={styles.dtactivity_banner}>
          <View>
            <Text style={styles.dtactivity_banner_title1}>
              Cảm ơn bạn đã chọn {props.type}
            </Text>
            <Text style={styles.dtactivity_banner_title2}>
              Bạn muốn đi đâu, {props.type} cân tất
            </Text>
          </View>
          <Image
            source={Grab}
            style={{
              width: 64,
              height: 23,
            }}
          />
        </View>
        <View style={styles.dtactivity_rate}>
          <Text style={styles.dtactivity_rate_title}>
            Bạn thấy tài xế như thế nào ?
          </Text>
          <Text style={styles.dtactivity_rate_title}>
            (1 sao: Tệ, 5 sao: Tốt)
          </Text>
          <View style={styles.dtactivity_stars}>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <Pressable
                  key={index}
                  onPress={() => setRating(index)}
                  disabled={!isEditable}
                >
                  {index <= rating ? (
                    <FontAwesomeIcon
                      size={32}
                      icon={faStar}
                      color="rgb(255, 205, 29)"
                      style={{ marginRight: 5, marginLeft: 5 }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size={32}
                      icon={faStar}
                      color="#DADADA"
                      style={{ marginRight: 5, marginLeft: 5 }}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={styles.dactivity_item}>
          <View style={styles["dactivity_item-left"]}>
            <Image
              source={HaLinh}
              style={{ width: 45, height: 45, borderRadius: 45 }}
            ></Image>
          </View>
          <View style={styles["dactivity_item-right"]}>
            <Text style={styles["dactivity_item-title"]}>{name}</Text>
            <Text style={styles["dactivity_item-des"]}>
              {code} • {trans}
            </Text>
          </View>
        </View>
        <View style={styles.dactivity_detail}>
          <Text style={styles.dactivity_detail_title}>Chi tiết chuyến đi</Text>
          <View style={styles.dactivity_detail_item}>
            <FontAwesomeIcon icon={faCircleArrowUp} size={25} color="#4FAE5A" />
            <View style={styles.dactivity_detail_right}>
              <Text style={styles.dactivity_detail_txt1}>Điểm đón</Text>
              <Text
                style={styles.dactivity_detail_txt2}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {truncateString(props.from.address, 45)}
              </Text>
            </View>
          </View>
          <View style={styles.dactivity_detail_item}>
            <View style={styles.dactivity_detail_left}>
              <FontAwesomeIcon icon={faLocationArrow} size={15} color="white" />
              <View style={styles.dactivity_line}></View>
            </View>
            <View style={styles.dactivity_detail_right}>
              <Text style={styles.dactivity_detail_txt1}>
                Điểm đến • {props.distance}
              </Text>
              <Text
                style={styles.dactivity_detail_txt2}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {truncateString(props.to.address, 45)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.dactivity_payment}>
          <Text style={styles.dactivity_payment_title}>
            Chi tiết thanh toán
          </Text>
          <View style={styles.dactivity_payment_item}>
            <Text style={styles.dactivity_payment_txt1}>Cước phí</Text>
            <View style={styles.dactivity_payment_txt2}>
              <Text style={styles.dactivity_payment_txt1}>
                {formatNumberWithDots(props.tax)}
              </Text>
              <Text style={styles.dactivity_payment_d}>đ</Text>
            </View>
          </View>
          <View style={styles.dactivity_payment_item}>
            <Text style={styles.dactivity_payment_txt1}>Phí nền tảng</Text>
            <View style={styles.dactivity_payment_txt2}>
              <Text style={styles.dactivity_payment_txt1}>
                {formatNumberWithDots(props.baseTax)}
              </Text>
              <Text style={styles.dactivity_payment_d}>đ</Text>
            </View>
          </View>
          <View style={styles.dactivity_payment_item}>
            <Text style={styles.dactivity_payment_txt1}>Giảm giá</Text>
            <View style={styles.dactivity_payment_txt2}>
              <Text style={styles.dactivity_payment_txt1}>
                -{formatNumberWithDots(props.sale)}
              </Text>
              <Text style={styles.dactivity_payment_d}>đ</Text>
            </View>
          </View>
          <View style={styles.dactivity_payment_item}>
            <Text style={styles.dactivity_payment_txt}>Tổng tiền</Text>
            <View style={styles.dactivity_payment_txt2}>
              <Text style={styles.dactivity_payment_txt}>
                {formatNumberWithDots(props.totalPrice)}
              </Text>
              <Text style={styles.dactivity_payment_dt}>đ</Text>
            </View>
          </View>
          <View style={{ marginTop: 21 }}>
            <View style={styles.dactivity_payment_item}>
              <Text style={styles.dactivity_payment_txt}>
                Thanh toán bằng tiền mặt
              </Text>
              <View style={styles.dactivity_payment_txt2}>
                <Text style={styles.dactivity_payment_txt}>
                  {formatNumberWithDots(props.totalPrice)}
                </Text>
                <Text style={styles.dactivity_payment_dt}>đ</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default ActivityDetail;
