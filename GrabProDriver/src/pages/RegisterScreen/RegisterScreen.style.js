import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  register__container: {
    flex: 1,
  },
  register__body: {
    flex: 1,
    marginTop: 22,
    width: "100%",
    paddingHorizontal: 26,
  },
  register_title: {
    color: "#6C6363",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 5,
  },
  register_input: {
    width: "100%",
    paddingHorizontal: 19,
    paddingVertical: 8,
    fontSize: 13,
    color: "black",
    fontFamily: "Poppins_500Medium",
    borderColor: "black",
    borderWidth: 0.25,
    borderRadius: 6,
  },
  register_alarm: {
    color: "red",
    fontSize: 13,
    marginTop: 10,
  },
  register__btn_ctn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  register__btn: {
    width: 150,
    height: 40,
    backgroundColor: "#14BF61",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  register__btn_txt: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
  },
});

export default styles;
