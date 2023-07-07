import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { preventAutoHide } from 'expo-app-loading/node_modules/expo-splash-screen/build/SplashScreen';

const styles = StyleSheet.create({
  bookcar__container: {
    position: "relative"
  }, 
  "bookcar__container-maps": {
    // zIndex: 0
  },
  "bookcar__container-back": {
    position: "absolute",
    top: 0,
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 200,
    marginTop: 30,
    marginLeft: 20
  },
  "bookcar__container-timer":{
    backgroundColor: "#02B250",
    paddingHorizontal: 22,
    paddingVertical: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  "bookcar__container-timer-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#fff"
  },
  "bookcar__container-timer-content": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 4
  },
  "bookcar__container-location": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF9F8",
    marginVertical: 14,
    paddingVertical: 14,
    paddingLeft: 22,
    paddingRight: 10
  },
  "bookcar__container-location-title": {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    color: "#464646"
  },
  "bookcar__container-location-content": {
    fontSize: 10,
    fontFamily: "Poppins_600SemiBold",
    color: "#5b5a5a"
  },
  "bookcar__container-location-price": {
    width: "20%",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
    color: "#000",
    textAlign: "right"
  },
  "bookcar__container-button": {
    textAlign: "center",
    marginHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: "#02B250",
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    borderRadius: 8,
    marginBottom: 14
  },
  "bookcar__container-payment": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20  
  },
  "bookcar__container-payment-left": {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRightColor: "#ccc",
    borderRightStyle: "solid",
    borderRightWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  "bookcar__container-payment-left-title": {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    marginLeft: 14,
  },
  "bookcar__container-payment-right": {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "bookcar__container-payment-right-title": {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
  },
});

export default styles;
