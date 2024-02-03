import React, { useContext } from "react";
import { TbBrandCashapp } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import url from "../../module";
import { AuthContext } from "../../providers/AuthProvider";

export default function HistoryCard({
  id,
  amount,
  status,
  walletId,
  remarks,
  promotionId,
  date,
}) {
  const { selectedLanguage } = useContext(AuthContext);
  const promotion = JSON.parse(localStorage.getItem("promotions"))?.filter(
    (d) => d._id === promotionId
  )[0];
  const wallet = JSON.parse(localStorage.getItem("wallets"))?.filter(
    (d) => d._id === walletId
  )[0];
  //console.log(promotion);
  return (
    <div className="text-md gap-1 border-b-2 py-2 grid">
      <div>
        <span className="font-bold">
        {
          selectedLanguage ==='en' ? "ID - ":"আইডি -"
        }
        </span>
        {id}
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1">
          <TbBrandCashapp />
          {amount}{
          selectedLanguage ==='en' ? "BDT":"টাকা"
        }
        </div>
        <div className="flex items-center gap-1 text-green-500">
          <BiSolidOffer />
          {promotion
            ? ((parseInt(amount) * promotion.bonusPercentage) / 100).toFixed(2)
            : "0.00"}{" "}
          
          {
          selectedLanguage ==='en' ? "BDT":"টাকা"
        }
        </div>
        <div>
          <span className="font-bold text-yellow-600"> 
          {
          selectedLanguage ==='en' ? "Status":"স্ট্যাটাস"
        }
        </span>
          {status}
        </div>
        {wallet ? (
          <div className="flex items-center gap-2 font-semibold">
            <img className="w-8 h-8 rounded-md" src={url + wallet.icon} />
            {wallet.methodName}
          </div>
        ) : (
          <div>
            {
          selectedLanguage ==='en' ? "No Wallet Found":"কোন ওয়ালেট পাওয়া যায়নি"
        }
          </div>
        )}
      </div>
      <div> 
      {
          selectedLanguage ==='en' ? "Remarks: ":"মন্তব্য:"
        }
        {remarks}</div>
      <div className="text-gray-400 text-sm">
        {new Date(date).toDateString()}
      </div>
    </div>
  );
}
