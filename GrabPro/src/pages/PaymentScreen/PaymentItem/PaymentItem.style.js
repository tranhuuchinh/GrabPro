import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingVertical: 4,
  },
  payment_item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  payment_item__left: {},
  payment_item__title: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.11,
    paddingTop: 12,
    paddingBottom: 4,
  },
  payment_item__description: {
    color: "#826E6E",
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: 0.09,
  },
  payment_item__right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  payment_item__price: {
    color: colors.primary__650,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  payment_item__icon: {
    color: "#666",
    marginHorizontal: 6,
  },
});
export default styles;
