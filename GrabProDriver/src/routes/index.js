import React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen";
import AvartarScreen from "../pages/AvartarScreen/AvartarScreen";
import ProfileScreen from "../pages/ProfileScreen/ProfileScreen";
import ChatDetail from "../pages/ChatDetail/ChatDetail";
import MoneyScreen from "../pages/MoneyScreen/MoneyScreen";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import HomePage from "../pages/Home/HomePage";

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/s" element={<HomeScreen />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/avartar" element={<AvartarScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/chat" element={<ChatDetail />} />
        <Route path="/money" element={<MoneyScreen />} />
        <Route path="/order" element={<OrderDetail />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
