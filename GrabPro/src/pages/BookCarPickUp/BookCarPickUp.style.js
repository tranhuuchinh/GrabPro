import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { preventAutoHide } from 'expo-app-loading/node_modules/expo-splash-screen/build/SplashScreen';

const styles = StyleSheet.create({
  bookcarchoicedes__container: {
    position: "relative"
  }, 
  "bookcarchoicedes__container-maps": {
    // zIndex: 0
  },
  "bookcarchoicedes__container-back": {
    position: "absolute",
    top: 0,
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: "50%",
    margin: 20,
  },
  "bookcarchoicedes__container-location": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    marginVertical: 14,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  "bookcarchoicedes__container-location-title": {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    color: "#464646"
  },
  "bookcarchoicedes__container-location-content": {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#5b5a5a"
  },
  "bookcarchoicedes__container-location-button": {
    width: "20%",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: "#086F09",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#086F09"
  },
  "bookcarchoicedes__container-title": {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#565656",
    marginHorizontal: 15,
    marginBottom: 10
  },
  "bookcarchoicedes__container-wrapper": {
    backgroundColor: "#E0FFDF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14
  },
  "bookcarchoicedes__container-gate-ic": {
    padding: 6,
    backgroundColor: "#01880F",
    color: "#fff",
    borderRadius: "50%",
    width: "fit-content",
    marginRight: 16
  },
  "bookcarchoicedes__container-gate-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
  },
  "bookcarchoicedes__container-button": {
    textAlign: "center",
    marginHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: "#02B250",
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    borderRadius: 8,
    marginBottom: 14
  }
});

export default styles;
