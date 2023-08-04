import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  payment: {
    display: "flex",
    backgroundColor: "white",
  },
  payment_banner: {
    paddingTop: 20,
    backgroundColor: colors.banner__color,
    position: "relative",
    overflow: "hidden",
    width: "100%",
    minHeight: 160,
    marginBottom: 10,
  },
  payment_heading: {
    padding: 30,
  },
  payment_name: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  payment_slogan: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
  },
  payment_image: {
    position: "absolute",
    right: -20,
    top: 60,
    width: 138,
    height: 120,
  },
  payment_body__option: {
    display: "flex",
    flexDirection: "row",
  },
  "payment_body-btn": {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 10,
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "white",
  },
  "payment_body-icon": {
    marginRight: 10,
  },
  "payment_body-btn--text": {
    fontFamily: "Poppins_300Light",
  },

  scroll_view: {
    justifyContent: "center",
  },
  payment_body: {
    paddingHorizontal: 10,
  },
  payment_body__title: {
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 14,
    fontFamily: "Poppins_500Medium",
  },
});
export default styles;
