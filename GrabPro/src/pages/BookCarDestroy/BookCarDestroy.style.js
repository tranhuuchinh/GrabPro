import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { preventAutoHide } from 'expo-app-loading/node_modules/expo-splash-screen/build/SplashScreen';

const styles = StyleSheet.create({
  bookcardestroy__container: {
    position: "relative"
  }, 
  "bookcardestroy__container-maps": {
    // zIndex: 0
  },
  "bookcardestroy__container-location": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF9F8",
    marginVertical: 14,
    paddingVertical: 14,
    paddingHorizontal: 16
  },
  "bookcardestroy__container-location-title": {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Poppins",
    color: "#000",
    marginLeft: 16
  },
  "bookcardestroy__container-button": {
    textAlign: "center",
    marginHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: "#FFF0F0",
    color: "red",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: 600,
    borderRadius: 8,
    marginBottom: 14
  },
});

export default styles;
