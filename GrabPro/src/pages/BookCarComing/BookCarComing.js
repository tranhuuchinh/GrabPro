import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faLocationDot, faArrowRightLong, faPlus, faA, faChevronDown, faStar, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import Book from "../../assets/imgs/BookCar/Book.png";
import styles from './BookCarComing.style';

const BookCarComing = () => {
    return (
        <View style={styles.bookcarcoming__container}>
            <View style={styles["bookcarcoming__container-maps"]}>
                <Image source={HaLinh} style={{width: "100%", height: "100vh"}}/>
            </View>

            <View style={{position: "absolute", backgroundColor: "#fff", width: "100%", bottom: 0}}>
                <View style={styles["bookcarcoming__container-time"]}>
                    <Text style={styles["bookcarcoming__container-time-title"]}>Tài xế đang đến</Text>

                    <Text style={styles["bookcarcoming__container-time-title"]}>4 phút</Text>
                </View>

                <View style={styles["bookcarcoming__container-info"]}>
                    <View style={styles["bookcarcoming__container-info-left"]}>
                        <View style={{marginRight: 10}}>
                            <Image source={Book} style={{width: 48, height: 48}}/>
                        </View>

                        <View>
                            <Text style={styles["bookcarcoming__container-info-left-name"]}>Jenny Huỳnh</Text>

                            <View style={styles["bookcarcoming__container-info-left-wrapper"]}>
                                <Text style={styles["bookcarcoming__container-info-left-star"]}>5.0</Text>

                                <FontAwesomeIcon icon={faStar} size={12} color='yellow' />
                            </View>
                        </View>

                    </View>

                    <View style={styles["bookcarcoming__container-info-right"]}>
                        <Text style={styles["bookcarcoming__container-info-right-title"]}>51G-123.45</Text>

                        <Text style={styles["bookcarcoming__container-info-right-content"]}>Đỏ - Ferrari</Text>
                    </View>
                </View>

                <View style={styles["bookcarcoming__container-message"]}>
                    <View style={styles["bookcarcoming__container-message-left"]}>
                        <FontAwesomeIcon icon={faCommentDots} size={24} color='#5a5959' />
                        <Text style={styles["bookcarcoming__container-message-content"]}>Chat với tài xế</Text>
                    </View>

                    <View style={styles["bookcarcoming__container-message-right"]}>
                        <FontAwesomeIcon icon={faPhone} size={24} color='#5a5959' style={styles["bookcarcoming__container-message-right-ic"]}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BookCarComing;
