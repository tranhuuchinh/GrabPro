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
  "profile_avt-crown": {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#58C5CA",
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
    fontSize: 11,
    color: "#696969",
    fontFamily: "Poppins_400Regular",
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
  profile_footer: {
    marginTop: 15,
    flex: 1,
  },
  "profile_footer-title": {
    marginLeft: 20,
    fontSize: 14,
    color: "#7A7272",
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 15,
  },
  "profile_footer-item": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 65,
    backgroundColor: "white",
    paddingLeft: 25,
    position: "relative",
  },
  "profile_footer-text": {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginLeft: 20,
  },
  "profile_footer-switch": {
    position: "absolute",
    right: 15,
  },
  profile_btn: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "profile_footer-btn": {
    width: 115,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
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
  profile_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.38)",
    width: "100%",
    flex: 1,
    zIndex: 10,
    elevation: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profile_modal: {
    width: "85%",
    height: 110,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 28,
  },
  "profile_modal-title": {
    color: "#434343",
    fontFamily: "Poppins_500Medium",
    marginTop: 20,
  },
  "profile_modal-btns": {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  },
  "profile_modal-button":{
    marginLeft: 22,
    marginTop: 25,
  },
  "profile_modal-txt":{
    color: "#4FAE5A",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  }
});
export default styles;
