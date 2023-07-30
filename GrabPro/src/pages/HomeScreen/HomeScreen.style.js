import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    position: "relative",
    flex: 1,
  },
  homeBanner: {
    height: 100,
    backgroundColor: colors.primary__650, // Màu xanh lá cây
  },
  homeSearchWrap: {
    flexDirection: "row",
    position: "absolute",
    top: 70,
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

  homeBookType: {
    flexDirection: "row",
    marginTop: 60,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  homeBookCar: {
    marginRight: 30,
    textAlign: "center",
  },

  homeBookBike: {
    marginRight: 30,
    textAlign: "center",
  },

  homeBookTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
  homeWrapCard: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  homeWrapCardType: {
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    minHeight: 70,
    maxHeight: 100,
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
  },
  homeWrapScore: {},

  homeWrapCardScore: {
    flex: 1.2,
    justifyContent: "center",
    maxHeight: 100,
    minHeight: 70,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    marginLeft: 10,
    flexDirection: "row",
    padding: 10,
  },
  homeWrapScore: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
