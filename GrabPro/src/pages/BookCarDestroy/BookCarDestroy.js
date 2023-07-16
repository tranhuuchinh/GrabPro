import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faLocationDot, faArrowRightLong, faPlus, faA, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from './BookCarDestroy.style';
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from 'react-router-native';

const BookCarDestroy = () => {
    const fontsLoaded = useCustomFonts();
    const navigation = useNavigate();

    if (!fontsLoaded) {
        return null;
    }
    else{
        return (
            <View style={styles.bookcardestroy__container}>
                <View style={styles["bookcardestroy__container-maps"]}>
                    <Image source={HaLinh} style={{width: "100%", height: "100%"}}/>
                </View>

                <Pressable style={styles["bookcardestroy__container-back"]} onPress={() => navigation("/bookcar-book")}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color='#000'/>
                </Pressable>
    
                <View style={{position: "absolute", backgroundColor: "#fff", width: "100%", bottom: 0}}>
                    <View style={styles["bookcardestroy__container-location"]}>
                        <View>
                            <Image source={CarV2} style={{width: 41, height: 36}}/>
                        </View>
    
                        <Text style={styles["bookcardestroy__container-location-title"]}>Đang kết nối bạn với tài xế</Text>
                    </View>
    
                    <Pressable onPress={() => navigation("/bookcar-home")}>
                        <Text style={styles["bookcardestroy__container-button"]}>Hủy nhanh</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
};

export default BookCarDestroy;
