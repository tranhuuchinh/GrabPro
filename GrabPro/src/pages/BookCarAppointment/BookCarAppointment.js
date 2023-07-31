import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faLocationDot, faArrowRightLong, faPlus, faA, faChevronDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import HaLinh from "../../../assets/imgs/Favorite/halinh.png";
import CarV2 from "../../assets/imgs/BookCar/CarV2.png";
import styles from './BookCarAppointment.style';
import { useCustomFonts } from "../../styles/fonts";
import { Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const BookCarAppointment = () => {
    const fontsLoaded = useCustomFonts();
    const navigation =  useNavigation();

    if (!fontsLoaded) {
        return null;
    }
    else{
        return (
            <View style={styles.bookcarappointment__container}>
                <View style={styles["bookcarappointment__container-maps"]}>
                    <Image source={HaLinh} style={{width: "100%", height: "100%"}}/>
                </View>

                <Pressable style={styles["bookcarappointment__container-back"]} onPress={() => navigation.navigate("/bookcar-home")}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color='#000'/>
                </Pressable>
    
                <View style={{position: "absolute", backgroundColor: "#fff", width: "100%", bottom: 0}}>
                    <View style={styles["bookcarappointment__container-timer"]}>
                        <Text style={styles["bookcarappointment__container-timer-title"]}>Chọn khung giờ:</Text>
    
                        <Text style={styles["bookcarappointment__container-timer-content"]}>8 : 45   25/06/2023</Text>
    
                        <FontAwesomeIcon icon={faCalendar} size={24} color='#386D52' />
                    </View>
        
                    <Pressable onPress={() => navigation.navigate("/bookcar-destroy")}>
                        <Text style={styles["bookcarappointment__container-button"]}>Đặt xe GrabCar</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
};

export default BookCarAppointment;
