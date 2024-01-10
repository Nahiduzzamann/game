import React from "react";
import { TbBrandCashapp } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

export default function HistoryCard({ data }) {
  return (
    <div className="text-md gap-1 border-b-2 py-2 grid">
      <div>
        <span className="font-bold">ID - </span>
        {data.id}
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1">
          <TbBrandCashapp />
          {data.amount} BDT
        </div>
        <div className="flex items-center gap-1 text-green-500">
        <BiSolidOffer />
          {data.bonus} BDT
        </div>
        <div>
          <span className="font-bold text-yellow-600">Status </span>
          {data.status}
        </div>
        <div className="flex items-center gap-1">
          <img
            className="w-10 h-5"
            src="https://seeklogo.com/images/B/bkash-logo-250D6142D9-seeklogo.com.png"
          />
          {data.method}
        </div>
      </div>
      <div className="text-gray-400 text-sm">
        {new Date(data.date).toDateString()}
      </div>
    </div>
  );
}
