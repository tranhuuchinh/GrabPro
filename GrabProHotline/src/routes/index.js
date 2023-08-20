import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Geolocation from '../pages/geolocation/Geolocation';
import NotFound from '../pages/notFound';
import Layout from './../layouts/index';
import OrderTracking from '../pages/orderTracking/OrderTracking';

const Navigation = () => {
    const authenticated = true;
    return (
        <main>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" name="home" element={<Home />} />
                    <Route path="/geolocation" name="geolocation" element={<Geolocation />} />
                    <Route path="/tracking" name="tracking" element={<OrderTracking />} />
                </Route>
                <Route path="/login" name="login" element={<Login />} />
                <Route path="*" name="notFound" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default Navigation;
