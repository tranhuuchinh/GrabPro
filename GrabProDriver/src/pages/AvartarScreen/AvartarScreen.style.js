import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avartar__container: {
    flex: 1,
    position: "relative",
  },
  avartar__body: {
    flex: 1,
  },
  avartar__navbar: {
    width: "100%",
    height: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  "avartar__navbar-item": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  "avartar__navbar-txt": {
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Poppins_400Regular",
  },
  "avartar__navbar-txt--active": {
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Poppins_400Regular",
    color: "#58BC6B",
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
    width: "80%",
    height: 300,
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
    justifyContent: "flex-end",
  },
  "profile_modal-button": {
    marginLeft: 22,
    marginTop: 25,
  },
  "profile_modal-txt": {
    color: "#4FAE5A",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});

export default styles;
