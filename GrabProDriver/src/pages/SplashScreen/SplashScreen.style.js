import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  splash__container: {
    flex: 1,
    position: "relative",
  },
  "splash__container-logo": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 74,
  },
  "splash__container-txt": {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 16,
  },
  "splash__container-footer": {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  "splash__container-img": {
    position: "relative",
  },
  "splash__container-buttons": {
    position: "absolute",
    top: "25%",
    left: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  "splash__container-btn1": {
    width: "90%",
    height: 48,
    backgroundColor: "rgba(79, 174, 90, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(79, 174, 90, 1)",
    marginBottom: 16,
  },
  "splash__container-txt1": {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  "splash__container-btn2": {
    width: "90%",
    height: 48,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#676767",
  },
  "splash__container-txt2": {
    color: "#676767",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
});

export default styles;
