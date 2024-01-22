import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoginButton from "../pages/Shared/navBar/LoginButton";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const location = useLocation();
  const {setUpdateUserState } = useContext(AuthContext);
 

  useEffect(() => {
    setUpdateUserState(Math.random())

  },[location])
  const noHeaderFooter =
    location.pathname.includes("/play-game")

  return (
    <div className="bg-White">
      {noHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}

      <LoginButton />
      <ScrollToTop />
    </div>
  );
};

export default Main;
