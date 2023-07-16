import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import font from "../../styles/fonts";

const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary__750, // Màu nền xanh
  },
  login_logo: {
    marginBottom: 20,
    marginTop: 120,
  },
  login_title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    // fontFamily: "Poppins_700Bold",
  },

  loginButtonWrap: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingBottom: 100,
    marginTop: 350,
  },

  loginButtonBy: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  loginButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },

  loginHorizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: "center",
  },
  login_line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  login_text: {
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
  },
});
export default styles;
