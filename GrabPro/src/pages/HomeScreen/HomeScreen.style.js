import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    position: "relative",
    flex: 1,
  },
  homeBanner: {
    height: 150,
    backgroundColor: colors.primary__650, // Màu xanh lá cây
  },
  homeSearchWrap: {
    flexDirection: "row",
    position: "absolute",
    top: 125,
    alignItems: "center",
    shadowColor: "lightgray", // Màu của box shadow
    shadowOffset: { width: -1, height: 1 }, // Khoảng cách và hướng của box shadow
    shadowOpacity: 5, // Độ mờ của box shadow
    shadowRadius: 4, // Bán kính của box shadow
    elevation: 4, // Độ cao của box shadow (áp dụng cho Android)
    marginHorizontal: 10,
  },
  homeCtnSearch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    padding: 8,
    height: 65,
    width: "80%",
  },

  homeFavorite: {
    backgroundColor: "white",
    width: "18%",
    height: 65,
    marginRight: 18,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderLeftColor: "lightgray",
    borderLeftWidth: 1,
    justifyContent: "center",
  },

  homeButtonFavorite: {
    alignItems: "center",
  },

  homeInput: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    color: "black",
  },
  homeButtonSearch: {
    borderRadius: 8,
    padding: 8,
    color: "black",
  },
});

export default styles;
