import React from "react";
import cash from "./cash.svg";

export default function Card() {
  return (
    <div className="bg-gray-200 my-4 px-[3%] py-[1%] rounded-md flex">
      <div className="flex-1">
        <div className="font-bold">Level 1</div>
        <div className="font-normal text-gray-500">Bet Amount 300 BDT</div>
        <div className="font-normal text-gray-500">On Slot game</div>
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <img className="w-8" src={cash} />
          <div className="text-blue-500 font-bold text-md">20 BDT</div>
        </div>
        <div className="bg-green-600 rounded-3xl flex justify-center items-center text-white">
            Collect
        </div>
      </div>
    </div>
  );
}
