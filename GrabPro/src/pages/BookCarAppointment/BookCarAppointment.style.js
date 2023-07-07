import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { preventAutoHide } from 'expo-app-loading/node_modules/expo-splash-screen/build/SplashScreen';

const styles = StyleSheet.create({
  bookcarappointment__container: {
    position: "relative"
  }, 
  "bookcarappointment__container-maps": {
    // zIndex: 0
  },
  "bookcarappointment__container-back": {
    position: "absolute",
    top: 0,
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 200,
    marginTop: 30,
    marginLeft: 20
  },
  "bookcarappointment__container-timer":{
    backgroundColor: "#EFF9F8",
    paddingHorizontal: 22,
    paddingVertical: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  "bookcarappointment__container-timer-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000"
  },
  "bookcarappointment__container-timer-content": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 4
  },
  "bookcarappointment__container-button": {
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
});

export default styles;
