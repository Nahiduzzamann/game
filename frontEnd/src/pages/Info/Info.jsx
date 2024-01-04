import React from "react";
import Header from "../Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const Info = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Header></Header>
      <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white">
          <h1 className="text-center font-bold text-xl pt-4">Other Topics</h1>
          <div className=" mt-4 flex flex-col">
            <Link className="ml-5 py-3 font-bold uppercase " to="/info/faq">FAQ</Link>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <Link className="ml-5 py-3 font-bold uppercase " to="/info/aboutUs">About Us</Link>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <Link className="ml-5 py-3 font-bold uppercase " to="/info/contactUs">Contact Us</Link>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <Link className="ml-5 py-3 font-bold uppercase " to="/info/ResponsibleGaming">Responsible Gaming</Link>
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <Link className="ml-5 py-3 font-bold uppercase " to="/info/Terms&Conditions">Terms & Conditions</Link>
          </div>
        </div>
        <div className="col-span-2 bg-white h-min">
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
