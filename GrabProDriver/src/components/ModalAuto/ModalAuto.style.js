import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  auto_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    width: "100%",
    flex: 1,
    zIndex: 10,
    elevation: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  auto_modal: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 28,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  "auto_modal-title": {
    color: "#434343",
    fontFamily: "Poppins_500Medium",
    marginTop: 20,
  },
});

export default styles;
