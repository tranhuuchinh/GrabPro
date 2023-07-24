import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Import các màn hình
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import ActivityScreen from "../pages/ActivityScreen/ActivityScreen";
import PaymentScreen from "../pages/PaymentScreen/PaymentScreen";
import MessageScreen from "../pages/GrapChatScreen/GrapChatScreen";
import AccountScreen from "../pages/PersonalScreen/PersonalScreen";
import NavigateBar from "../components/Navigation/Navigation";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Trang chủ" component={HomeScreen} />
        <Stack.Screen name="Hoạt động" component={ActivityScreen} />
        <Stack.Screen name="Thanh toán" component={PaymentScreen} />
        <Stack.Screen name="Tin nhắn" component={MessageScreen} />
        <Stack.Screen name="Tài khoản" component={AccountScreen} />
      </Stack.Navigator>
      <NavigateBar />
    </View>
  );
};

export default MainNavigator;
