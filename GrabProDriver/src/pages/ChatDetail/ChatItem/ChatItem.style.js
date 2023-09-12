import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  chatItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chatItem__time: {
    paddingVertical: 10,
    color: "#777777",
    textAlign: "center",
    fontFamily: "Poppins_300Light",
  },
  chatItem__wrap_content: {
    flexDirection: "row",
  },
  chatItem__wrapper: {
    borderColor: "#A6A6A6",
    borderStyle: "solid",
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 8,
    maxWidth: "70%",
  },
  chatItem__msg: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
  chatItem__img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  marginLeft50: {
    marginLeft: 50,
  },
  marginLeftAuto: {
    marginLeft: "auto",
  },
  bgColor: {
    backgroundColor: "#F1EAEA",
  },
});
export default styles;
