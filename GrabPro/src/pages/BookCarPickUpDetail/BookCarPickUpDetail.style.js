import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bookcarpickupdetail__container: {
    marginTop: 35,
  },
  "bookcarpickupdetail__container-header": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
    marginBottom: 20,
  },
  "bookcarpickupdetail__container-header-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    marginLeft: 14,
  },
  "bookcarpickupdetail__container-search": {
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    marginHorizontal: 23,
    padding: 10,
  },
  "bookcarpickupdetail__container-search-up": {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  "bookcarpickupdetail__container-search-down": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  "bookcarpickupdetail__container-search-up-title": {
    width: "70%",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#A3A3A3",
    marginLeft: 14,
    paddingBottom: 10,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 1,
  },
  "bookcarpickupdetail__container-search-down-title": {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#A3A3A3",
    marginLeft: 14,
  },
  "bookcarpickupdetail__container-list": {
    marginTop: 10,
    marginHorizontal: 26,
  },
  "bookcarpickupdetail__container-list-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    marginBottom: 10,
  },
  "bookcarpickupdetail__container-history": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  "bookcarpickupdetail__container-history-title": {
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 6,
  },
  "bookcarpickupdetail__container-history-content": {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#5B5A5A",
  },
});

export default styles;
