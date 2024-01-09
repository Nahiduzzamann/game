import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ProfileMenuBar from "../components/ProfileMenuBar";

const Profile = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Header></Header>
      <div className="md:flex  md:gap-4 px-4 py-4">
        <ProfileMenuBar />
        <div className="md:col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>

      <ScrollToTop />
    </div>
  );
};

export default Profile;
