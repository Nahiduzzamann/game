import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoginButton from "../pages/Shared/navBar/LoginButton";


const Main = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <LoginButton/>
      <ScrollToTop />
    </div>
  );
};

export default Main;
