import React from "react";
import Header from "../Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const Info = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Header></Header>
      <div className="container mx-auto">
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 my-4 h-min ">
          <h1 className="text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl">Other Topics</h1>
          <div className=" mt-4 flex flex-col">
            <NavLink activeClassName="active" className="ml-5 py-3 font-bold uppercase " to="/info/faq">FAQ</NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ml-5 py-3 font-bold uppercase " to="/info/aboutUs">About Us</NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ml-5 py-3 font-bold uppercase " to="/info/contactUs">Contact Us</NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ml-5 py-3 font-bold uppercase " to="/info/ResponsibleGaming">Responsible Gaming</NavLink>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <NavLink activeClassName="active" className="ml-5 py-3 font-bold uppercase " to="/info/Terms&Conditions">Terms & Conditions</NavLink>
          </div>
        </div>
        <div className="col-span-2 bg-white h-min md:mt-4">
        <Outlet></Outlet>
        </div>
      </div>
      </div>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
};

export default Info;
