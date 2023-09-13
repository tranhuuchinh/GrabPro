import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faChartBar,
  faWallet,
  faEnvelope,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "./src/pages/HomeScreen/HomeScreen";
import ActivityScreen from "./src/pages/ActivityScreen/ActivityScreen";
import PaymentScreen from "./src/pages/PaymentScreen/PaymentScreen";
import MessageScreen from "./src/pages/GrapChatScreen/GrapChatScreen";
import AccountScreen from "./src/pages/PersonalScreen/PersonalScreen";

import PaymentPerson from "./src/pages/PaymentPerson/PaymentPerson";
import AwardPerson from "./src/pages/AwardPerson/AwardPerson";
import FavoritePerson from "./src/pages/FavoritePerson/FavoritePerson";
import PaymentDetail from "./src/pages/PaymentDetail/PaymentDetail";
import ProfilePerson from "./src/pages/ProfilePerson/ProfilePerson";
import ActivityDetail from "./src/pages/ActivityDetail/ActivityDetail";
import LocationPerson from "./src/pages/LocationPerson/LocationPerson";
import BookCarHome from "./src/pages/BookCarHome/BookCarHome";
import BookCarPickUp from "./src/pages/BookCarPickUp/BookCarPickUp";
import BookCar from "./src/pages/BookCar/BookCar";
import BookCarDestroy from "./src/pages/BookCarDestroy/BookCarDestroy";
import BookCarComing from "./src/pages/BookCarComing/BookCarComing";
import BookCarPickUpDetail from "./src/pages/BookCarPickUpDetail/BookCarPickUpDetail";
import SearchScreen from "./src/pages/SearchScreen/SearchScreen";
import ChatDetail from "./src/pages/ChatDetail/ChatDetail";
import ChatBook from "./src/pages/ChatBook/ChatBook";
import SplashScreen from "./src/pages/SplashScreen/SplashScreen";
import WaitScreen from "./src/pages/WaitScreen/WaitScreen";
import RegisterScreen from "./src/pages/LoginScreen/LoginScreen";
import LoginByPhone from "./src/pages/LoginScreen/LoginByPhone/LoginByPhone";
import LoginVerification from "./src/pages/LoginScreen/LoginByPhone/LoginVerification";
import LogInScreens from "./src/pages/LoginScreenMain/LogInScreenMain";
import * as Permissions from "expo-permissions";
import { LogBox } from "react-native";

import { socketCustomer, socketDriver } from "./src/service/socket";

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BookCarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/bookcar"
    >
      <Stack.Screen name="/bookcar" component={BookCarHome} />
      <Stack.Screen name="/bookcar-pickup" component={BookCarPickUp} />
      <Stack.Screen name="/bookcar-book" component={BookCar} />
      <Stack.Screen name="/bookcar-destroy" component={BookCarDestroy} />
      <Stack.Screen name="/bookcar-coming" component={BookCarComing} />
      <Stack.Screen name="/bookcar-pickup-dt" component={BookCarPickUpDetail} />
      <Stack.Screen name="/bookcar-chat" component={ChatBook} />
    </Stack.Navigator>
  );
};

const OtherStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/account"
    >
      <Stack.Screen name="/account" component={AccountScreen} />
      <Stack.Screen name="/profile" component={ProfilePerson} />
      <Stack.Screen name="/awardperson" component={AwardPerson} />
      <Stack.Screen name="/favorite" component={FavoritePerson} />
      <Stack.Screen name="/locationperson" component={LocationPerson} />
      <Stack.Screen name="/paymentperson" component={PaymentPerson} />
    </Stack.Navigator>
  );
};

const MesssageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/messages" component={MessageScreen} />
    </Stack.Navigator>
  );
};

const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          switch (route.name) {
            case "Trang chủ":
              icon = (
                <FontAwesomeIcon icon={faHome} size={size} color={color} />
              );
              break;
            case "Hoạt động":
              icon = (
                <FontAwesomeIcon icon={faChartBar} size={size} color={color} />
              );
              break;
            case "Thanh toán":
              icon = (
                <FontAwesomeIcon icon={faWallet} size={size} color={color} />
              );
              break;
            case "Tin nhắn":
              icon = (
                <FontAwesomeIcon icon={faEnvelope} size={size} color={color} />
              );
              break;
            case "Tài khoản":
              icon = (
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size={size}
                  color={color}
                />
              );
              break;
            default:
              icon = null;
          }
          return icon;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <BottomTab.Screen name="Trang chủ" component={HomeScreen} />
      <BottomTab.Screen name="Hoạt động" component={ActivityScreen} />
      <BottomTab.Screen name="Thanh toán" component={PaymentScreen} />
      <BottomTab.Screen name="Tin nhắn" component={MesssageStack} />
      <BottomTab.Screen name="Tài khoản" component={AccountStack} />
      <BottomTab.Screen
        name="Khác"
        component={OtherStack}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="/chatdetail"
        component={ChatDetail}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="/activity-detail"
        component={ActivityDetail}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="/payment-detail"
        component={PaymentDetail}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="/bookcar-home"
        component={BookCarStack}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
};

const App = () => {
  //   // Function to get permission for location
  //   const requestLocationPermission = async () => {
  //     const { status } = await Permissions.askAsync(Permissions.LOCATION);

  //     if (status === 'granted') {
  //       console.log('You can use Geolocation');

  //       return true;
  //     } else {
  //       console.log('You cannot use Geolocation');
  //       return false;
  //     }
  //   };
  // useEffect(() => {
  //   requestLocationPermission();
  // })
  useEffect(() => {
    console.log("Bố láo");

    socketCustomer.on("connect", () => {
      console.log("Connected to server customer");
    });

    socketCustomer.on("customerClient", (message) => {
      console.log(message);
    });

    socketCustomer.on("disconnect", () => {
      console.log("Disconnected from server customer");
    });

    return () => {
      socketCustomer.disconnect();
    };
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/splash" component={SplashScreen} />
        <Stack.Screen name="/wait" component={WaitScreen} />
        <Stack.Screen name="/register" component={RegisterScreen} />
        <Stack.Screen name="/loginMain" component={LogInScreens} />
        <Stack.Screen name="/lgphone" component={LoginByPhone} />
        <Stack.Screen name="/verify" component={LoginVerification} />
        <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
