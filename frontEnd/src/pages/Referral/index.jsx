import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ResponsivePagination from "react-responsive-pagination";
import { AuthContext } from "../../providers/AuthProvider";
import getUserRefeeeal from "../../module/getUserReferral";

export default function Referral() {
  const [updateData, setUpdateData] = useState();
  const [currentData, setCurrentData] = useState();
  const [upCommingData, setUpCommingData] = useState();
  // console.log(currentData,upCommingData);
  const { selectedLanguage } = useContext(AuthContext);
  const [currentPage1, setCurrentPage1] = useState(1);
  const itemsPerPage1 = 6;
  const totalPages1 = Math.ceil(currentData?.length / itemsPerPage1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage2 = 6;
  const totalPages2 = Math.ceil(upCommingData?.length / itemsPerPage2);

  useEffect(() => {
    setCurrentData(null)
    getUserRefeeeal()
      .then((res) => {
        setCurrentData(res.data.current);
        setUpCommingData(res.data.upcoming);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [updateData]);

  return (
    <div className="bg-[url('/bg.jpg')]  min-h-screen object-fill bg-no-repeat bg-cover">
      <div className="w-full px-[4%] py-[1%] min-h-screen md:flex items-center  bg-gradient-to-b from-[#00000057] to-blue-500">
        <div className="min-h-[90vh]  flex-1 ">
          <div className=" font-medium text-2xl text-white">
            {selectedLanguage === "en" ? "My Rewards" : "আমার পুরস্কার"}
          </div>
          {
          currentData ?( currentData?.slice(
            (currentPage1 - 1) * itemsPerPage1,
            currentPage1 * itemsPerPage1
          ).map((d, i) => (
            <Card data={d} key={i} setUpdateData={setUpdateData} />
          ))):(<div className="flex justify-center items-center"><Spinner color="white"></Spinner></div>)

         
        
        }

          <div className="my-2">
            <ResponsivePagination
              current={currentPage1}
              total={totalPages1}
              onPageChange={setCurrentPage1}
            />
          </div>
        </div>
        <div className="min-h-[90vh] w-1 md:block hidden bg-white mx-[4%]"></div>
        <div className="min-h-[90vh] flex-1">
          <div className=" font-medium text-2xl text-white">
            {selectedLanguage === "en" ? "Upcoming Rewards" : "আসন্ন পুরস্কার"}
          </div>
          {upCommingData?.map((d, i) => (
            <Card2 data={d} key={i} />
          ))}
          <div className="my-2">
            <ResponsivePagination
             current={currentPage2}
             total={totalPages2}
             onPageChange={setCurrentPage2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


import cash from "./cash.svg";
import { Spinner } from "@chakra-ui/react";
 function Card2({ data }) {
  const { selectedLanguage } = useContext(AuthContext);

  return (
    <div className="bg-gray-200 my-4 px-[3%] py-[1%] rounded-md flex">
      <div className="flex-1">
        <div className="font-bold">{data.level}</div>
        <div className="font-normal text-gray-500">
          {selectedLanguage === "en"
            ? `Bet Amount ${data.targetTurnover} BDT`
            : `বাজির পরিমাণ ${data.targetTurnover} টাকা`}
        </div>
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <img className="w-8" src={cash} />
          <div className="text-blue-500 font-bold text-md">
            {selectedLanguage === "en"
              ? `${data.bonusAmount} BDT`
              : `${data.bonusAmount} টাকা`}
          </div>
        </div>
        
      </div>
    </div>
  );
}
