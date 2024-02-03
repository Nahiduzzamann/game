import React, { useContext } from "react";
import { FaDollarSign, FaHistory, FaUser } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FiGift, FiMessageSquare } from "react-icons/fi";
import { AiTwotoneBank } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";

export default function ProfileMenuBar() {
  const { selectedLanguage } = useContext(AuthContext);
  const { pathname } = useLocation();
  const navigate=useNavigate()

  return (
    <div className="bg-white px-2 py-2 rounded-md h-min">
      <div className="font-semibold text-gray-500 ml-2 mb-2">
        
        {
          selectedLanguage ==='en' ? "Banking Profile":"ব্যাংকিং প্রোফাইল"
        }
      </div>
      <div className="grid gap-2">
        <div onClick={()=>navigate("/user/deposit")}
          className={`${
            pathname === "/user/deposit" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 w-[220px] py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaDollarSign />
          <div className="text-xs font-medium">{
          selectedLanguage ==='en' ? "Deposit":"জমা"
        }</div>
        </div>
        <div onClick={()=>navigate("/user/withdrawal")}
          className={`${
            pathname === "/user/withdrawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <BiMoneyWithdraw />
          <div className="text-xs font-medium"> 
          {
          selectedLanguage ==='en' ? "Withdrawal":"উত্তোলন"
        }
        </div>
        </div>
        <div onClick={()=>navigate("/user/history")}
          className={`${
            pathname === "/user/history" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">{
          selectedLanguage ==='en' ? "History":"ইতিহাস"
        }</div>
        </div>
        <div onClick={()=>navigate("/user/turn-over")}
          className={`${
            pathname === "/user/turn-over" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Turnover History":"টার্নওভার ইতিহাস"
        }
        </div>
        </div>
        <div onClick={()=>navigate("/user/bet-history")}
          className={`${
            pathname === "/user/bet-history" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Bet History":"বাজি ইতিহাস"
        }
        </div>
        </div>
        <div
        onClick={()=>navigate("/user/claimVoucher")}
          className={`${
            pathname === "/user/claimVoucher" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiGift />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Claim Voucher":"ভাউচার দাবি করুন"
        }
        </div>
        </div>
      </div>
      <div className="font-semibold text-gray-500 ml-2 my-2">
      {
          selectedLanguage ==='en' ? "User Profile":"ব্যবহারকারী প্রোফাইল"
        }
        </div>
      <div className="grid gap-2">
        <div
        onClick={()=>navigate("/user/myprofile")}
          className={`${
            pathname === "/user/myprofile" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaUser />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "My Profile":"আমার প্রোফাইল"
        }
          </div>
        </div>
        <div
        onClick={()=>navigate("/user/changePassword")}
          className={`${
            pathname === "/user/changePassword" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <MdOutlinePassword />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Change Password":"পাসওয়ার্ড পরিবর্তন করুন"
        }
        </div>
        </div>
        <div
         onClick={()=>navigate("/user/bank-details")}
          className={`${
            pathname === "/user/bank-details" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <AiTwotoneBank />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Bank Details":"ব্যাংক বিবরণ"
        }
        </div>
        </div>
        <div
          className={`${
            pathname === "/user/withdrhawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiMessageSquare />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Messages":"বার্তা"
        }
        </div>
        </div>
        <div
          className={`${
            pathname === "/user/withdryawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiGift />
          <div className="text-xs font-medium">
          {
          selectedLanguage ==='en' ? "Rewards":"পুরস্কার"
        }
        </div>
        </div>
       
      </div>
    </div>
  );
}
