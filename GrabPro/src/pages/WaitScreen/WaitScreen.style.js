import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  wait_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary__750, // Màu nền xanh
  },
  wait_logo: {
    marginBottom: 20,
    marginTop: 120,
  },
  wait_title: {
    fontSize: 16,
    color: "white",
  },
  wait_illustrationBg: {
    width: "100%",
    position: "relative",
    top: 50,
    resizeMode: "contain",
  },
  wait_bottomBg: {
    width: "100%",
    resizeMode: "center",
    position: "absolute",
    bottom: -97,
  },

  waitButtonWrap: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingBottom: 100,
  },

  waitButtonLogin: {
    backgroundColor: colors.primary__750,
    borderRadius: 8,
    width: "90%",
    height: 50,
    backgroundColor: "#4FAE5A",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTextLogin: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  waitButtonRegister: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Độ dày của border
    borderColor: "gray", // Màu sắc của border
    marginTop: 15,
  },

  buttonTextRegister: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default styles;
