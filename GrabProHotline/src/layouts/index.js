import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="">
                <Outlet />
            </div>
        </>
    );
};

Layout.propTypes = {};

export default Layout;
