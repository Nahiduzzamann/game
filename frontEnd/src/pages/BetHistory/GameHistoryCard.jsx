import React,{ useContext } from "react";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
export default function GameHistoryCard({ data }) {
  const { selectedLanguage } = useContext(AuthContext);
  const { _doc, game } = data;
  return (
    <div className="my-3 flex flex-wrap gap-2 border-b py-1">
      <img className="w-20 h-20  rounded-md" alt={game.name} src={game.img} />
      <div>
        <div className="font-medium text-xl line-clamp-1 max-w-[150px]">{game.name}</div>
        <div className="text-gray-500 text-lg">
          {
          selectedLanguage ==='en' ? "Session ":"সেশন"
        }<span className="font-semibold">{_doc.id}</span>
        </div>
        <div className="text-gray-400">
          {new Date(_doc.date).toDateString()}
        </div>
      </div>
      <div className="h-full items-end grid md:ml-5">
        <div className="flex items-center gap-2">
          <FaMoneyBillTransfer color="red" size={24} />
          
          {
          selectedLanguage ==='en' ? "Loss ":"ক্ষতি"
        }
         <span className="font-semibold">{_doc.bet}
         
         {
          selectedLanguage ==='en' ? "BDT ":"টাকা"
        }
        </span>
        </div>
        <div className="flex items-center gap-2">
          <FaMoneyBillTrendUp  color="green" size={24} />
          
          {
          selectedLanguage ==='en' ? "Win ":"Win"
        } <span className="font-semibold">{_doc.win}
        {
          selectedLanguage ==='en' ? "BDT ":"টাকা"
        }</span>
        </div>
      </div>
    </div>
  );
}
