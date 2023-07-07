import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { preventAutoHide } from 'expo-app-loading/node_modules/expo-splash-screen/build/SplashScreen';

const styles = StyleSheet.create({
  bookcar__container: {
  },
  "bookcar__container-header":{
    backgroundColor: "#B8EDBF",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingTop: 20

  },
  "bookcar__container-header-left":{
    width: "50%",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 55
  },
  "bookcar__container-header-right":{
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 10,
    paddingBottom: 10
  },
  "bookcar__container-header-left-title":{
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 16,
  },
  "bookcar__container-header-left-content":{
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    marginTop: 7
  },
  "bookcar__container-body":{
    backgroundColor: "white",
    position: "relative",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },    
  "bookcar__container-search": {
    position: "absolute",
    top: -24,
    left: 0,
    width: "100%",
    height: 50,
    marginLeft: 20,
    paddingLeft: 55,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
  },
  "bookcar__container-search-input": {
    width: "100%",
    height: "100%",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold"
  },
  "bookcar__container-search-title": {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#616161",
  },
  "bookcar__container-location": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  "bookcar__container-location-title": {
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 6
  },
  "bookcar__container-location-content": {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#5B5A5A",
  },
  "bookcar__container-movemore": {
    marginTop: 20,
    marginBottom: 20
  },
  "bookcar__container-movemore-title": {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#464646",
    marginBottom: 10
  },
  "bookcar__container-movemore-book": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E7FCD1",
    borderRadius: 8
  },    
  "bookcar__container-movemore-book-content": {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#000",
    marginLeft: 14
  },
  "bookcar__container-favorlocation-header": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  "bookcar__container-favorlocation-title": {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#464646",
  },
  "bookcar__container-favorlocation-list": {
    display: "flex",
    flexDirection: 'row',
  },
  "bookcar__container-favorlocation-item": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "25%"
  },
  "bookcar__container-favorlocation-item-ic": {
    padding: 6, 
    backgroundColor: "#fff", 
    borderRadius: 200, 
    position: "absolute", 
    bottom: "-25%", 
    right: -10,
    elevation: 2
  },    
  "bookcar__container-favorlocation-content": {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#000",
    maxWidth: 50,
    textAlign: "center",
    marginTop: 10
  }
});

export default styles;
