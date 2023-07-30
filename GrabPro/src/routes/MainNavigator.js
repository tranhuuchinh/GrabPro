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

import PersonalScreen from "../pages/PersonalScreen/PersonalScreen";
import PaymentPerson from "../pages/PaymentPerson/PaymentPerson";
import AwardPerson from "../pages/AwardPerson/AwardPerson";
import FavoritePerson from "../pages/FavoritePerson/FavoritePerson";
import PaymentDetail from "../pages/PaymentDetail/PaymentDetail";
import ProfilePerson from "../pages/ProfilePerson/ProfilePerson";
import GrapChatScreen from "../pages/GrapChatScreen/GrapChatScreen";
import ActivityDetail from "../pages/ActivityDetail/ActivityDetail";
import LocationPerson from "../pages/LocationPerson/LocationPerson";
import BookCarHome from "../pages/BookCarHome/BookCarHome";
import BookCarPickUp from "../pages/BookCarPickUp/BookCarPickUp";
import BookCar from "../pages/BookCar/BookCar";
import BookCarDestroy from "../pages/BookCarDestroy/BookCarDestroy";
import BookCarComing from "../pages/BookCarComing/BookCarComing";
import BookCarPickUpDetail from "../pages/BookCarPickUpDetail/BookCarPickUpDetail";
import SearchScreen from "../pages/SearchScreen/SearchScreen";
import ChatDetail from "../pages/ChatDetail/ChatDetail";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import WaitScreen from "../pages/WaitScreen/WaitScreen";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import BookCarAppointment from "./../pages/BookCarAppointment/BookCarAppointment";
import LoginByPhone from "../pages/LoginScreen/LoginByPhone/LoginByPhone";
import LoginVerification from "../pages/LoginScreen/LoginByPhone/LoginVerification";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Trang chủ" component={HomeScreen} />
        <Stack.Screen name="Hoạt động" component={ActivityScreen} />
        <Stack.Screen name="Thanh toán" component={PaymentScreen} />
        <Stack.Screen name="Tin nhắn" component={MessageScreen} />
        <Stack.Screen name="Tài khoản" component={AccountScreen} />

        {/* <Stack.Screen name="/"                      component={HomeScreen} /> */}
        <Stack.Screen name="/wait" component={WaitScreen} />
        <Stack.Screen name="/login" component={LoginScreen} />
        <Stack.Screen name="/splash" component={SplashScreen} />
        <Stack.Screen name="/lgphone" component={LoginByPhone} />
        <Stack.Screen name="/verify" component={LoginVerification} />

        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="/chat-inform" component={GrapChatScreen} />
        <Stack.Screen name="/personal" component={PersonalScreen} />
        <Stack.Screen name="/paymentperson" component={PaymentPerson} />
        <Stack.Screen name="/awardperson" component={AwardPerson} />
        <Stack.Screen name="/favorite" component={FavoritePerson} />

        {/* <Stack.Screen name="/payment-history"       component={PaymentScreen} /> */}
        <Stack.Screen name="/payment-detail" component={PaymentDetail} />
        <Stack.Screen name="/profile" component={ProfilePerson} />
        {/* <Stack.Screen name="/activity"              component={ActivityScreen} /> */}
        <Stack.Screen name="/activity-detail" component={ActivityDetail} />
        <Stack.Screen name="/locationperson" component={LocationPerson} />
        <Stack.Screen name="/bookcar-home" component={BookCarHome} />
        <Stack.Screen name="/bookcar-pickup" component={BookCarPickUp} />
        <Stack.Screen
          name="/bookcar-pickup-detail"
          component={BookCarPickUpDetail}
        />
        <Stack.Screen name="/bookcar-book" component={BookCar} />
        <Stack.Screen name="/bookcar-destroy" component={BookCarDestroy} />
        <Stack.Screen name="/bookcar-coming" component={BookCarComing} />
        <Stack.Screen name="/search" component={SearchScreen} />
        <Stack.Screen
          name="/bookcar-appointment"
          component={BookCarAppointment}
        />
      </Stack.Navigator>
      {/* <NavigateBar /> */}
    </View>
  );
};

export default MainNavigator;
