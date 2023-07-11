import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  order__container: {
    flex: 1,
  },
  order_body: {
    flex: 1,
    paddingHorizontal: 17,
    marginTop: 10,
  },
  order_item: {
    width: "100%",
    height: 70,
    marginTop: 12,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    borderBottomColor: "#E8C5C5",
    borderBottomWidth: 1,
  },
  "order_item-right": {
    paddingTop: 3,
    marginLeft: 12,
    flex: 1,
  },
  "order_item-span": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  "order_item-right-price": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  "order_item-right-txtpr": {
    fontSize: 11,
    color: "#797070",
    fontFamily: "Poppins_500Medium",
  },
  "order_item-right-txtđ": {
    fontSize: 11,
    color: "#797070",
    fontFamily: "Poppins_500Medium",
    textDecorationLine: "underline",
  },
  "order_item-dtn": {
    fontSize: 11,
    fontFamily: "Poppins_500Medium",
  },
  "order_item-stt": {
    fontSize: 10,
    color: "#554848",
    fontFamily: "Poppins_400Regular",
  },
  "order_item-time": {
    fontSize: 10,
    color: "#776B6B",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
