import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faLocationDot, faArrowRightLong, faPlus, faA } from "@fortawesome/free-solid-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import styles from './BookCarPickUp.style';
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from 'react-router-native';

const BookCarPickUp = () => {
    const fontsLoaded = useCustomFonts();
    const navigation = useNavigate();

    const handleBack = () => {
        navigation("/personal")
    }

    if (!fontsLoaded) {
        return null;
    }
    else {
        return (
            <View style={styles.bookcarchoicedes__container}>
                <View style={styles["bookcarchoicedes__container-maps"]}>
                    <Image source={HaLinh} style={{width: "100%", height: "100vh"}}/>
                </View>
    
                <View style={styles["bookcarchoicedes__container-back"]} onPress={() => handleBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color='#000'/>
                </View>
    
                <View style={{position: "absolute", backgroundColor: "#fff", width: "100%", bottom: 0}}>
                    <View style={styles["bookcarchoicedes__container-location"]}>
                        <View style={{width: "80%"}}>
                            <Text style={styles["bookcarchoicedes__container-location-title"]}>Trường Đại học Khoa học tự nhiên</Text>
                            <Text style={styles["bookcarchoicedes__container-location-content"]} ellipsizeMode='tail' numberOfLines={1}>135b Trần Hưng Đạo, P.Cầu Ông Lãnh, Q.1, Hồ Chí Minh</Text>
                        </View>
    
                        <Text style={styles["bookcarchoicedes__container-location-button"]}>Thay đổi</Text>
                    </View>
    
                    <Text style={styles["bookcarchoicedes__container-title"]}>Chọn địa điểm đón</Text>
    
                    <View style={styles["bookcarchoicedes__container-wrapper"]}>
                        <FontAwesomeIcon icon={faA} size={12} style={styles["bookcarchoicedes__container-gate-ic"]}/>
    
                        <Text style={styles["bookcarchoicedes__container-gate-title"]}>Cổng chính</Text>
                    </View>
    
                    <Text style={styles["bookcarchoicedes__container-button"]}>Chọn điểm đón này</Text>
                </View>
            </View>
        );   
    }
};

export default BookCarPickUp;
