import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
  },
  profile_banner: {
    width: "100%",
    height: 160,
    position: "relative",
    elevation: 5,
    zIndex: 5,
  },
  "profile_banner-avt": {
    position: "absolute",
    bottom: -50,
    left: 20,
  },
  "profile_avt-ctn": {
    position: "relative",
  },
  "profile_avt-infor": {
    position: "absolute",
    right: -160,
    top: 35,
    width: 150,
  },
  "profile_avt-name": {
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 2,
  },
  "profile_avt-intro": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  "profile_avt-intro-txt": {
    marginLeft: 7,
  },
  profile_body: {
    width: "100%",
    position: "relative",
    paddingHorizontal: 44,
  },
  profile_title: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 2,
  },
  profile_input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#F7F9FB",
    borderBottomWidth: 1,
    borderBottomColor: "#A79999",
    fontFamily: "Poppins_400Regular",
  },
  profile_btn: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "profile_btn-text": {
    color: "#6D6565",
    fontFamily: "Poppins_700Bold",
  },
  profile_alarm: {
    color: "red",
    fontSize: 13,
    marginTop: 3,
  },
});
export default styles;
