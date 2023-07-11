import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  message__container: {
    flex: 1,
  },
  message_item: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 18,
    position: "relative",
    marginBottom: 5,
  },
  message_item__body: {
    marginLeft: 13,
    justifyContent: "center",
    paddingRight: 120,
  },
  message_item__img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  message_item__name: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    marginBottom: 2,
  },
  message_item__msg: {
    fontFamily: "Poppins_400Regular",
    color: "#7A6D6D",
    fontSize: 12,
  },
  message_item__time: {
    fontFamily: "Poppins_400Regular",
    color: "#7A6D6D",
    fontSize: 13,
    position: "absolute",
    right: 18,
    top: 22,
  },
});

export default styles;
