import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  payment_detail: {
    backgroundColor: colors.bg_color,
    height: "100%",
  },
  payment_detail__title: {
    color: "#000",
    fontSize: 16,
    fontWeight: 600,
    padding: 10,
  },
  payment_detail__wrapper: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  payment_detail__wrapper_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  payment_detail__paid_title: {
    fontSize: 14,
    color: "#706969",
  },
  payment_detail__paid_total: {
    fontSize: 20,
    fontWeight: 500,
    alignSelf: "flex-end",
  },

  payment_detail__info_avatar: {
    width: 40,
    height: 40,
  },
  payment_detail__info_name: {
    fontSize: 16,
    fontWeight: 300,
    paddingLeft: 14,
  },
  payment_detail__info_title: {
    color: "#7F6A6A",
    fontSize: 14,
  },
  payment_detail__info_des: {},
});
export default styles;
