import React, { useState } from "react";
import Card from "./Card";
import ResponsivePagination from "react-responsive-pagination";

export default function Referral() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(6 / 6);
  return (
    <div className="bg-[url('/bg.jpg')]  min-h-screen object-fill bg-no-repeat bg-cover">
      <div className="w-full px-[4%] py-[1%] min-h-screen md:flex items-center  bg-gradient-to-b from-[#00000057] to-blue-500">
        <div className="min-h-[90vh]  flex-1 ">
          <div className=" font-medium text-2xl text-white">My Rewards</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="my-2">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div className="min-h-[90vh] w-1 md:block hidden bg-white mx-[4%]"></div>
        <div className="min-h-[90vh] flex-1">
          <div className=" font-medium text-2xl text-white">
            Upcoming Rewards
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="my-2">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
