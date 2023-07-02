import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  activity_container: {
    flex: 1,
    backgroundColor: "white",
  },
  activity_header: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    paddingLeft: 17,
  },
  "activity_header-title": {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 43,
  },
  "activity_header-control": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 14,
  },
  "activity_header-btn": {
    width: 140,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#E5EEFC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  "activity_header-txt": {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: colors.primary__800,
  },
  "activity_header-btn--active": {
    width: 140,
    height: 34,
    borderRadius: 50,
    backgroundColor: colors.primary__800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  "activity_header-txt--active": {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "white",
  },
  activity_body: {
    flex: 1,
    paddingHorizontal: 17,
    marginTop: 10,
  },
  activity_item: {
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
  "activity_item-right": {
    paddingTop: 3,
    marginLeft: 12,
    flex: 1,
  },
  "activity_item-span": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  "activity_item-right-price": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  "activity_item-right-txtpr": {
    fontSize: 11,
    color: "#797070",
    fontFamily: "Poppins_500Medium",
  },
  "activity_item-right-txtđ": {
    fontSize: 11,
    color: "#797070",
    fontFamily: "Poppins_500Medium",
    textDecorationLine: "underline",
  },
  "activity_item-dtn": {
    fontSize: 11,
    fontFamily: "Poppins_500Medium",
  },
  "activity_item-stt": {
    fontSize: 10,
    color: "#554848",
    fontFamily: "Poppins_400Regular",
  },
  "activity_item-time": {
    fontSize: 10,
    color: "#776B6B",
    fontFamily: "Poppins_400Regular",
  },
  "activity_item-fb": {
    position: "absolute",
    bottom: 15,
    right: 0,
    fontSize: 10,
    color: "#4FAE5A",
    fontFamily: "Poppins_500Medium",
  },
});
export default styles;
