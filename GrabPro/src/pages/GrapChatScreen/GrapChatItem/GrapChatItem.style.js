import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  grapChatItem: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
  },
  grapChatItem__body: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  grapChatItem__inform: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  grapChatItem__inform_img: {
    width: 20,
  },
  grapChatItem__img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  grapChatItem__name: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
  grapChatItem__msg: {
    fontFamily: "Poppins_400Regular",
    color: "#7A6D6D",
    fontSize: 12,
  },
  grapChatItem__time: {
    fontFamily: "Poppins_400Regular",
    color: "#7A6D6D",
    fontSize: 13,
    lineHeight: 50,
    paddingLeft: 8,
  },
});
export default styles;
