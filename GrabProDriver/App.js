import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChartSimple,
  faWallet,
  faCircleUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./src/routes";

import SplashScreen from "./src/pages/SplashScreen/SplashScreen";
import RegisterScreen from "./src/pages/RegisterScreen/RegisterScreen";
import LogInScreen from "./src/pages/LogInScreen/LogInScreen";
import UpdateScreen from "./src/pages/UpdateScreen/UpdateScreen";
import HomePage from "./src/pages/Home/HomePage";
import FavouriteScreen from "./src/pages/FavouriteScreen/FavouriteScreen";
import SettingPage from "./src/pages/SettingPage/SettingPage";
import MoneyScreen from "./src/pages/MoneyScreen/MoneyScreen";
import WalletScreen from "./src/pages/WalletPage/WalletPage";
import OrderScreen from "./src/pages/OrderDetail/OrderDetail";
import CreditWalletPage from "./src/pages/WalletPage/CreditWalletPage";
import AddMoney from "./src/pages/WalletPage/AddMoney";
import ActivityDetail from "./src/pages/ActivityDetail/ActivityDetail";
import AccountScreen from "./src/pages/AvartarScreen/components/AccountScreen/AccountScreen";
import MessageScreen from "./src/pages/AvartarScreen/components/MessageScreen/MessageScreen";
import ProfileScreen from "./src/pages/ProfileScreen/ProfileScreen";
import ChatDetail from "./src/pages/ChatDetail/ChatDetail";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MoneyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/income"
    >
      <Stack.Screen name="/income" component={MoneyScreen} />
      <Stack.Screen name="/order" component={OrderScreen} />
      <Stack.Screen name="/order-detail" component={ActivityDetail} />
    </Stack.Navigator>
  );
};

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/wallet"
    >
      <Stack.Screen name="/wallet" component={WalletScreen} />
      <Stack.Screen name="/credit" component={CreditWalletPage} />
      <Stack.Screen name="/addmoney" component={AddMoney} />
    </Stack.Navigator>
  );
};

const PaymentStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          switch (route.name) {
            case "Thu nhập":
              icon = (
                <FontAwesomeIcon
                  icon={faChartSimple}
                  size={size}
                  color={color}
                />
              );
              break;
            case "Ví":
              icon = (
                <FontAwesomeIcon icon={faWallet} size={size} color={color} />
              );
              break;
            default:
              icon = null;
          }
          return icon;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#58BC6B",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <BottomTab.Screen name="Thu nhập" component={MoneyStack} />
      <BottomTab.Screen name="Ví" component={WalletStack} />
    </BottomTab.Navigator>
  );
};

const MessageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/message"
    >
      <Stack.Screen name="/message" component={MessageScreen} />
      <Stack.Screen name="/chat" component={ChatDetail} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="/avatar"
    >
      <Stack.Screen name="/avatar" component={AccountScreen} />
      <Stack.Screen name="/profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          switch (route.name) {
            case "Tài khoản":
              icon = (
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size={size}
                  color={color}
                />
              );
              break;
            case "Tin nhắn":
              icon = (
                <FontAwesomeIcon icon={faMessage} size={size} color={color} />
              );
              break;
            default:
              icon = null;
          }
          return icon;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#58BC6B",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <BottomTab.Screen name="Tài khoản" component={ProfileStack} />
      <BottomTab.Screen name="Tin nhắn" component={MessageStack} />
    </BottomTab.Navigator>
  );
};

const RegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/register-default" component={RegisterScreen} />
      <Stack.Screen name="/update" component={UpdateScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/splash" component={SplashScreen} />
        <Stack.Screen name="/login" component={LogInScreen} />
        <Stack.Screen name="/register" component={RegisterStack} />
        <Stack.Screen name="/home" component={HomePage} />
        <Stack.Screen name="/favorite" component={FavouriteScreen} />
        <Stack.Screen name="/setting" component={SettingPage} />
        <Stack.Screen name="/payment" component={PaymentStack} />
        <Stack.Screen name="/account" component={AccountStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
