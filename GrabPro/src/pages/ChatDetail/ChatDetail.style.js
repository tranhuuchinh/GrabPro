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
  chatDetail__inform_txt: {
    color: "#757373",
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Poppins_300Light",
  },
});
export default styles;
