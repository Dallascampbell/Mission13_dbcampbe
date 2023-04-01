import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

//Pull the Navbar into every page and the rest of the content
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
