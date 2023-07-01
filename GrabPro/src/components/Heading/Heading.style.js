import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading_container: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4,
    elevation: 4,
  },
  heading_upper: {
    height: 36,
    width: "100%",
    backgroundColor: "white",
  },
  heading_content: {
    height: 44,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
export default styles;
