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

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/wait" element={<WaitScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/lgphone" element={<LoginByPhone />} />
        <Route path="/verify" element={<LoginVerification />} />
        {/* <Route path="/" element={<HomeScreen />} /> */}

        <Route path="/chatdetail" element={<ChatDetail />} />
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
        <Route path="/bookcar-home" element={<BookCarHome />} />
        <Route path="/bookcar-pickup" element={<BookCarPickUp />} />
        <Route
          path="/bookcar-pickup-detail"
          element={<BookCarPickUpDetail />}
        />
        <Route path="/bookcar-book" element={<BookCar />} />
        <Route path="/bookcar-destroy" element={<BookCarDestroy />} />
        <Route path="/bookcar-coming" element={<BookCarComing />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/bookcar-appointment" element={<BookCarAppointment />} />

        <Route path="/" element={<BookCarHome />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
