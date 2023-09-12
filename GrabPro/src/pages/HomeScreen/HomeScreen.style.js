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
    width: "95%",
    alignItems: "center",
    shadowColor: "#lightgray",
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
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
    width: "82%",
  },

  homeFavorite: {
    backgroundColor: "white",
    width: "18%",
    height: 65,
    marginRight: 18,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderLeftColor: "lightgray",
    borderLeftWidth: 3,
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
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  homeWrapCardType: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    minHeight: 70,
    maxHeight: 100,
    borderRadius: 10,
    marginRight: 0,
    padding: 10,
  },
  homeWrapScore: {
    flex: 3,
    position: "relative",
  },

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
