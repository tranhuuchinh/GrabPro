import React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import PersonalScreen from "../pages/PersonalScreen/PersonalScreen";
import PaymentPerson from "../pages/PaymentPerson/PaymentPerson";

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/personal" element={<PersonalScreen />} />
        <Route path="/paymentperson" element={<PaymentPerson />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
