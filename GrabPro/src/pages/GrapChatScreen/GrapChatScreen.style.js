import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  chat: {
    display: "flex",
    backgroundColor: "white",
  },
  chat_banner: {
    paddingTop: 20,
    backgroundColor: colors.banner__color,
    width: "100%",
    minHeight: 120,
    marginBottom: 10,
  },
  chat_heading: {
    padding: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chat_name: {
    fontFamily: "Poppins_400Regular",
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10,
  },
  chat_slogan: {
    fontSize: 12,
  },
  chat_image: {
    width: 120,
    resizeMode: "contain",
  },
  chat_body__option: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
  },
  "chat_body-btn": {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 8,
    borderRadius: 50,
    backgroundColor: "#E5EEFC",
  },
  "chat_body-btn--text": {
    color: colors.primary__800,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 16,
    fontSize: 12,
  },
  "chat_body-btn--active": {
    backgroundColor: colors.primary__800,
  },
  "chat_body-btn--text--active": {
    color: "#fff",
  },

  scroll_view: {
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  chat_body: {
    paddingHorizontal: 10,
  },
});
export default styles;
