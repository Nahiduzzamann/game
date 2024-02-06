import React, { useContext } from "react";
import cash from "./cash.svg";
import { AuthContext } from "../../providers/AuthProvider";
import getCollectRewards from "../../module/getCollectRewards";

export default function Card({ data, setUpdateData }) {
  const { selectedLanguage } = useContext(AuthContext);

  const handleRewardCollect = (id) => {
    getCollectRewards(id)
      .then(() => {
        // console.log(res);
        setUpdateData(Math.random());
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
        {data.applied ? (
          <div className="bg-green-400 rounded-3xl pointer-events-none flex justify-center items-center text-white">
      Collected
          </div>
        ) : (
          <button
            onClick={() => handleRewardCollect(data._id)}
            className="bg-green-600 hover:shadow-md shadow-lime-950 rounded-3xl flex justify-center items-center text-white"
          >
            {selectedLanguage === "en" ? "Collect" : "সংগ্রহ করুন"}
          </button>
        )}
      </div>
    </div>
  );
}
