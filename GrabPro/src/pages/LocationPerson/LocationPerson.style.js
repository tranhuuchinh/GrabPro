import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  location_container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  location_txt1: {
    fontSize: 13,
    color: "#706666",
    fontFamily: "Poppins_600SemiBold",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 22,
  },
  location_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 22,
    height: 70,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 3,
    position: "relative",
  },
  "location_item-left": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "location_item-right": {
    display: "flex",
    marginLeft: 15,
    paddingRight: 80,
  },
  "location_item-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
  },
  "location_item-des": {
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    marginTop: 3,
  },
  "location_item-circle": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#4FAE5A",
  },
  "location_item-trash": {
    position: "absolute",
    right: 23,
  },
  location_overlay: {
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
  location_modal: {
    width: "85%",
    height: 110,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 28,
  },
  "location_modal-title": {
    color: "#434343",
    fontFamily: "Poppins_500Medium",
    marginTop: 20,
  },
  "location_modal-btns": {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  "location_modal-button": {
    marginLeft: 22,
    marginTop: 25,
  },
  "location_modal-txt": {
    color: "#4FAE5A",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});
export default styles;
