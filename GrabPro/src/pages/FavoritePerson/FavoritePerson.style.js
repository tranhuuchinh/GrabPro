import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  favorite_container: {
    height: "auto",
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  favorite_txt1: {
    fontSize: 13,
    color: "#706666",
    fontFamily: "Poppins_600SemiBold",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 22,
  },
  favorite_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 22,
    paddingRight: 30,
    height: 70,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 3,
  },
  "favorite_item-left":{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "favorite_item-right":{
    display: "flex",
    marginLeft: 15,
  },
  "favorite_item-title":{
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
  },
  "favorite_item-des":{
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    marginTop: 3,
    paddingRight: 25,
  },
  "favorite_item-circle":{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#4FAE5A"
  }
});
export default styles;
