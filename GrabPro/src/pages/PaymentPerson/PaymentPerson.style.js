import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  pmperson_container: {
    height: "auto",
    flex: 1,
  },
  pmperson_body: {
    flex: 1,
    backgroundColor: colors.bg_color,
  },
  "pmperson_body-title": {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    marginTop: 12,
    marginLeft: 22,
  },
  pmperson_item: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    marginBottom: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 21,
    alignItems: "center",
    position: "relative",
  },
  "pmperson_item-icon": {
    position: "absolute",
    right: 23,
    top: "50%",
    transform: [{ translateY: -14 }],
  },
  "pmperson_item-left": {
    width: 40,
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  "pmperson_item-right": {
    marginLeft: 15,
  },
  "pmperson_item-text1": {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  "pmperson_item-text2": {
    fontSize: 11,
    fontFamily: "Poppins_300Light",
  },
  pmperson_btn: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#14BF61",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
  "pmperson_btn-text": {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    letterSpacing: 0.12,
    color: "#FFF",
  },
});
export default styles;
