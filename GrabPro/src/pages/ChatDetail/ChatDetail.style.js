import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  chatDetail: {
    height: "100%",
  },
  chatDetail__inform: {
    backgroundColor: "#F0ECEC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  chatDetail__chat: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4,
    elevation: 4,
  },
  chatDetail__inform_txt: {
    color: "#757373",
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Poppins_300Light",
  },
});
export default styles;
