import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Order from '../pages/Order/Order';
import User from '../pages/User/User';
import NotFound from '../pages/notFound';
import Layout from './../layouts/index';
import SideBar from '../components/SideBar/SideBar';

const Navigation = () => {
  const authenticated = true;
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            name="home"
            element={<Home />}
          />

          <Route
            path="/invoice"
            name="home"
            element={<Order />}
          />

          <Route
            path="/user"
            name="home"
            element={<User />}
          />
        </Route>
        <Route path="*" name="notFound" element={<Navigate to='/' />} />
      </Routes>
    </main>
  );
};

export default Navigation;
