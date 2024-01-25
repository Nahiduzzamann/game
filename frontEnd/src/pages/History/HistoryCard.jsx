import React from "react";
import { TbBrandCashapp } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import url from "../../module";

export default function HistoryCard({
  id,
  amount,
  status,
  walletId,
  remarks,
  promotionId,
  date,
}) {
  const promotion = JSON.parse(localStorage.getItem("promotions"))?.filter(
    (d) => d._id === promotionId
  )[0];
  const wallet = JSON.parse(localStorage.getItem("wallets"))?.filter(
    (d) => d._id === walletId
  )[0];
  console.log(promotion);
  return (
    <div className="text-md gap-1 border-b-2 py-2 grid">
      <div>
        <span className="font-bold">ID - </span>
        {id}
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1">
          <TbBrandCashapp />
          {amount} BDT
        </div>
        <div className="flex items-center gap-1 text-green-500">
          <BiSolidOffer />
          {promotion
            ? ((parseInt(amount) * promotion.bonusPercentage) / 100).toFixed(2)
            : "0.00"}{" "}
          BDT
        </div>
        <div>
          <span className="font-bold text-yellow-600">Status </span>
          {status}
        </div>
        {wallet ? (
          <div className="flex items-center gap-2 font-semibold">
            <img className="w-8 h-8 rounded-md" src={url + wallet.icon} />
            {wallet.methodName}
          </div>
        ) : (
          <div>No Wallet Found</div>
        )}
      </div>
      <div>Remarks: {remarks}</div>
      <div className="text-gray-400 text-sm">
        {new Date(date).toDateString()}
      </div>
    </div>
  );
}
