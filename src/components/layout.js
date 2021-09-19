import React from 'react';
import NavBar from './navbar';
import Footer from './footer';


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;