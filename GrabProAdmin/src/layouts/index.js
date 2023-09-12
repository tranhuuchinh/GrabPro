import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

const Layout = () => {
  return (
    <div className=''>
      <Header />
      <div style={{margin: '60px 0 0 70px'}}>
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

Layout.propTypes = {

};

export default Layout;
