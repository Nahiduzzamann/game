import React from 'react';

import { Outlet } from "react-router-dom";
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Main = () => {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop />
    </>
  );
};

export default Main;
