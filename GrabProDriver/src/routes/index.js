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
import FavouriteScreen from "../pages/FavouriteScreen/FavouriteScreen";
import SettingPage from "../pages/SettingPage/SettingPage";
import WalletPage from "../pages/WalletPage/WalletPage";
import CreditWalletPage from "../pages/WalletPage/CreditWalletPage";
import AddMoney from "../pages/WalletPage/AddMoney";

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/s" element={<HomePage />} />
        <Route path="/s" element={<FavouriteScreen />} />
        <Route path="/s" element={<SettingPage />} />
        <Route path="/s" element={<WalletPage />} />
        <Route path="/s" element={<CreditWalletPage />} />
        <Route path="/sss" element={<AddMoney />} />
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
