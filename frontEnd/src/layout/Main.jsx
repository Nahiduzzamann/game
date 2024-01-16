import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoginButton from "../pages/Shared/navBar/LoginButton";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("/play-game")

  return (
    <div className="bg-[#EBEBEB]">
      {noHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}

      <LoginButton />
      <ScrollToTop />
    </div>
  );
};

export default Main;
