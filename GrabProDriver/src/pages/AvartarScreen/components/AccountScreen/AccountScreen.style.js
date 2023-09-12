import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  account__container: {
    flex: 1,
  },
  account__infor: {
    marginTop: 10,
    height: 72,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "relative",
  },
  "account_infor-right": {
    marginLeft: 11,
  },
  "account_infor-txt1": {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  "account_infor-upper": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  "account_infor-txt2": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 7,
  },
  account__item: {
    width: "100%",
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#F1EDED",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 22,
  },
  account__item_final: {
    width: "100%",
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 22,
  },
  "account_item-txt": {
    marginLeft: 13,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  "account_item-txt-final": {
    marginLeft: 13,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#FB2323",
  },
});

export default styles;
