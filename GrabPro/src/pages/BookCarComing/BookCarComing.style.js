import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bookcarcoming__container: {
    position: "relative",
    flex: 1,
  },
  "bookcarcoming__container-maps": {
    flex: 1,
  },
  "bookcarcoming__container-time": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EFF9F8",
    marginVertical: 14,
    paddingVertical: 14,
    paddingHorizontal: 23,
  },
  "bookcarcoming__container-time-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
  },
  "bookcarcoming__container-info": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 23,
    marginBottom: 20,
  },
  "bookcarcoming__container-info-left": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  "bookcarcoming__container-info-left-name": {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#000",
  },
  "bookcarcoming__container-info-left-wrapper": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  "bookcarcoming__container-info-left-star": {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#000",
  },
  "bookcarcoming__container-info-right-title": {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
  },
  "bookcarcoming__container-info-right-content": {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#000",
  },
  "bookcarcoming__container-message": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 23,
    marginBottom: 10,
  },
  "bookcarcoming__container-message-left": {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EEEF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 20,
    borderRadius: 8,
  },
  "bookcarcoming__container-message-content": {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#5a5959",
    marginLeft: 14,
  },
  "bookcarcoming__container-message-right": {
    width: "20%",
  },
  "bookcarcoming__container-message-right-ic": {
    padding: 10,
    borderColor: "#5a5959",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default styles;
