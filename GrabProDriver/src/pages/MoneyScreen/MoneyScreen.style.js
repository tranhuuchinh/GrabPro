import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  money__container: {
    flex: 1,
    backgroundColor: "white ",
  },
  money__body: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white ",
  },
  money__item: {
    position: "relative",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#F3F3F3",
  },
  money__item_txt1: {
    fontSize: 16,
    marginBottom: 5,
  },
  money__item_txt2: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  money__item_icon: {
    position: "absolute",
    right: 8,
    top: "50%",
  },
});

export default styles;
