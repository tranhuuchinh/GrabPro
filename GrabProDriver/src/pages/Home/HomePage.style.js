import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    flexDirection: "column",
  },
  homePageImage: {
    flex: 0.9,
  },

  homePageConnect: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  homePageWrap: {
    flexDirection: "row",
    flex: 0.25,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    top: -10,
    backgroundColor: "white",
  },

  homePageWrapOption: {
    flexDirection: "row",
    flex: 0.55,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  homePageOption: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 50,
  },
});

export default styles;
