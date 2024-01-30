import React, { useContext } from "react";
import cash from "./cash.svg";
import { AuthContext } from "../../providers/AuthProvider";

export default function Card() {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className="bg-gray-200 my-4 px-[3%] py-[1%] rounded-md flex">
      <div className="flex-1">
        <div className="font-bold">
        {
          selectedLanguage ==='en' ? "Level 1":"স্তর 1"
        }
        </div>
        <div className="font-normal text-gray-500">
        {
          selectedLanguage ==='en' ? "Bet Amount 300 BDT":"বাজির পরিমাণ 300 টাকা"
        }
        </div>
        <div className="font-normal text-gray-500">
        {
          selectedLanguage ==='en' ? "On Slot game":"স্লট খেলায়"
        }
        </div>
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <img className="w-8" src={cash} />
          <div className="text-blue-500 font-bold text-md">
          {
          selectedLanguage ==='en' ? "20 BDT":"20 টাকা"
        }
        </div>
        </div>
        <div className="bg-green-600 rounded-3xl flex justify-center items-center text-white">
            
            {
          selectedLanguage ==='en' ? "Collect":"সংগ্রহ করুন"
        }
        </div>
      </div>
    </div>
  );
}
