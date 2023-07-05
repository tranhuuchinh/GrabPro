import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search_container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  search_header: {
    height: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4,
    elevation: 4,
  },
  search_header_upper: {
    height: 36,
  },
  search_header_down: {
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 22,
  },
  search_header_down_back: {
    marginLeft: 22,
  },
  search_header_down_ctn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 43,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 8,
  },
  search_header_down_input: {
    paddingLeft: 12,
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    flex: 1,
    height: 43,
  },
  search_body: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  search_body_center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: 70,
  },
  search_body_icon: {
    width: 147,
    height: 148,
  },
  search_body_center_txt1:{
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 36.5,
  },
  search_body_center_txt2:{
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
    marginTop: 5,
  },
  search_context:{
    flex: 1,
    marginTop: 12,
    backgroundColor: "#F7F7F7",
  },
  search_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 22,
    height: 70,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 3,
    position: "relative",
  },
  "search_item-left": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "search_item-right": {
    display: "flex",
    marginLeft: 15,
    paddingRight: 80,
  },
  "search_item-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
  },
  "search_item-des": {
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    marginTop: 3,
  },
  "search_item-circle": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#4FAE5A",
  },
});
export default styles;
