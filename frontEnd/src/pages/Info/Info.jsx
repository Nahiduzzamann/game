import React, { useContext } from "react";
import Header from "../Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import LoginButton from "../Shared/navBar/LoginButton";
import { AuthContext } from "../../providers/AuthProvider";

const Info = () => {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className="bg-[#EBEBEB]">
      <Header></Header>
      <div className="container mx-auto pb-8">

      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 my-4 h-min ">

          <h1 className="text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl">
          {
          selectedLanguage ==='en' ? "Other Topics":"অন্যান্য বিষয়"
        }
          </h1>
          <div className=" mt-4 flex flex-col">
            <NavLink activeClassName="active" className="ps-5 py-3 font-bold uppercase hover:bg-gray-300" to="/info/faq">
            {
          selectedLanguage ==='en' ? "FAQ":"FAQ"
        }
            </NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ps-5 py-3 font-bold uppercase hover:bg-gray-300 " to="/info/aboutUs">
            {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ps-5 py-3 font-bold uppercase hover:bg-gray-300" to="/info/contactUs">
            {
          selectedLanguage ==='en' ? "Contact Us":"যোগাযোগ করুন"
        }
        </NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ps-5 py-3 font-bold uppercase hover:bg-gray-300" to="/info/ResponsibleGaming">
            {
          selectedLanguage ==='en' ? "Responsible Gaming":"দায়িত্বশীল গেমিং"
        }
        </NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ps-5 py-3 font-bold uppercase hover:bg-gray-300" to="/info/Terms&Conditions">
            {
          selectedLanguage ==='en' ? "Terms & Conditions":"শর্তাবলী"
        }
        </NavLink>
          </div>
        </div>
        <div className="col-span-2 bg-white h-min md:mt-4">
        <Outlet></Outlet>
        </div>
      </div>
      </div>
      <Footer></Footer>
      <LoginButton/>
      <ScrollToTop />
    </div>
  );
};

export default Info;
