import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  person_container: {
    height: "auto",
    flex: 1,
  },
  person_banner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 145,
    paddingLeft: 22,
    paddingTop: 20,
    backgroundColor: colors.banner__color,
    position: "relative",
    overflow: "hidden",
  },
  person_name: {
    fontSize: 20,
  },
  icon_user: {
    marginRight: 15,
  },
  personal_banner_btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 10,
    marginTop: 1,
  },
  person_background: {
    position: "absolute",
    right: -25,
    top: 60,
    width: 138,
    height: 120,
  },
  person_body: {
    flex: 1,
    paddingHorizontal: 18,
  },
  person_item: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 5,
    borderBottomColor: "#E8C5C5",
    borderBottomWidth: 1,
  },
  "person_item-text": {
    fontSize: 14,
    color: colors.txt_color_900,
  },
  "person_item-right": {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
export default styles;
