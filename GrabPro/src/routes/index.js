import React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import PersonalScreen from "../pages/PersonalScreen/PersonalScreen";
import PaymentPerson from "../pages/PaymentPerson/PaymentPerson";
import AwardPerson from "../pages/AwardPerson/AwardPerson";
import FavoritePerson from "../pages/FavoritePerson/FavoritePerson";
import PaymentScreen from "../pages/PaymentScreen/PaymentScreen";
import PaymentDetail from "../pages/PaymentDetail/PaymentDetail";
import ProfilePerson from "../pages/ProfilePerson/ProfilePerson";
import ActivityScreen from "../pages/ActivityScreen/ActivityScreen";
import GrapChatScreen from "../pages/GrapChatScreen/GrapChatScreen";
import ActivityDetail from "../pages/ActivityDetail/ActivityDetail";
import LocationPerson from "../pages/LocationPerson/LocationPerson";
import SearchScreen from "../pages/SearchScreen/SearchScreen";
import ChatDetail from "../pages/ChatDetail/ChatDetail";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import WaitScreen from "../pages/WaitScreen/WaitScreen";
import LoginScreen from "../pages/LoginScreen/LoginScreen";

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/wait" element={<WaitScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/splash" element={<SplashScreen />} />

        {/* <Route path="/" element={<ChatDetail />} /> */}
        <Route path="/chat-inform" element={<GrapChatScreen />} />
        <Route path="/personal" element={<PersonalScreen />} />
        <Route path="/paymentperson" element={<PaymentPerson />} />
        <Route path="/awardperson" element={<AwardPerson />} />
        <Route path="/favorite" element={<FavoritePerson />} />

        <Route path="/payment-history" element={<PaymentScreen />} />
        <Route path="/payment-detail" element={<PaymentDetail />} />
        <Route path="/profile" element={<ProfilePerson />} />
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/activity-detail" element={<ActivityDetail />} />
        <Route path="/locationperson" element={<LocationPerson />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
