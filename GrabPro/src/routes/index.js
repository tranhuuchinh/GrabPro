import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import HomeScreen from '../pages/HomeScreen/HomeScreen';

const AppRouter = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
