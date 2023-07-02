import React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import PersonalScreen from "../pages/PersonalScreen/PersonalScreen";
import PaymentPerson from "../pages/PaymentPerson/PaymentPerson";
import AwardPerson from "../pages/AwardPerson/AwardPerson";
import FavoritePerson from "../pages/FavoritePerson/FavoritePerson";
import ProfilePerson from "../pages/ProfilePerson/ProfilePerson";

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/personal" element={<PersonalScreen />} />
        <Route path="/paymentperson" element={<PaymentPerson />} />
        <Route path="/awardperson" element={<AwardPerson />} />
        <Route path="/favorite" element={<FavoritePerson />} />
        <Route path="/profile" element={<ProfilePerson />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
