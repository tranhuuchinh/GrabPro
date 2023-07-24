import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  navContainer: {},
  navNavWrap: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "lightgray", // Màu của box shadow
    shadowOffset: { width: 0, height: -0.5 }, // Khoảng cách và hướng của box shadow
    shadowOpacity: 10, // Độ mờ của box shadow
    shadowRadius: 1, // Bán kính của box shadow
    elevation: 1, // Độ cao của box shadow (áp dụng cho Android)
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItemWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navIcNav: {
    width: 25,
    height: 24,
    marginBottom: 5,
  },
  navTextNav: {
    fontSize: 10,
    textAlign: "center",
    color: "gray",
    fontFamily: "Poppins_500Medium",
  },

  selectedTextNav: {
    color: colors.primary__700,
    fontWeight: 600,
  },
});

export default styles;
