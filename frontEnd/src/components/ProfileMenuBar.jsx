import React from "react";
import { FaDollarSign, FaHistory, FaUser } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FiGift, FiMessageSquare } from "react-icons/fi";
import { AiTwotoneBank } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";

export default function ProfileMenuBar() {
  const { pathname } = useLocation();
  const navigate=useNavigate()

  return (
    <div className="bg-white px-2 py-2 rounded-md h-min">
      <div className="font-semibold text-gray-500 ml-2 mb-2">
        Banking Profile
      </div>
      <div className="grid gap-2">
        <div onClick={()=>navigate("/user/deposit")}
          className={`${
            pathname === "/user/deposit" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 w-[220px] py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaDollarSign />
          <div className="text-xs font-medium">Deposit</div>
        </div>
        <div onClick={()=>navigate("/user/withdrawal")}
          className={`${
            pathname === "/user/withdrawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <BiMoneyWithdraw />
          <div className="text-xs font-medium">Withdrawal</div>
        </div>
        <div onClick={()=>navigate("/user/history")}
          className={`${
            pathname === "/user/history" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">History</div>
        </div>
        <div onClick={()=>navigate("/user/turn-over")}
          className={`${
            pathname === "/user/turn-over" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">Turnover History</div>
        </div>
        <div onClick={()=>navigate("/user/bet-history")}
          className={`${
            pathname === "/user/bet-history" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaHistory />
          <div className="text-xs font-medium">Bet History</div>
        </div>
        <div
        onClick={()=>navigate("/user/claimVoucher")}
          className={`${
            pathname === "/user/claimVoucher" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiGift />
          <div className="text-xs font-medium">Claim Voucher</div>
        </div>
      </div>
      <div className="font-semibold text-gray-500 ml-2 my-2">User Profile</div>
      <div className="grid gap-2">
        <div
        onClick={()=>navigate("/user/myprofile")}
          className={`${
            pathname === "/user/myprofile" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FaUser />
          <div className="text-xs font-medium">My Profile</div>
        </div>
        <div
        onClick={()=>navigate("/user/changePassword")}
          className={`${
            pathname === "/user/changePassword" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <MdOutlinePassword />
          <div className="text-xs font-medium">Change Password</div>
        </div>
        <div
          className={`${
            pathname === "/user/withddrawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <AiTwotoneBank />
          <div className="text-xs font-medium">Bank Details</div>
        </div>
        <div
          className={`${
            pathname === "/user/withdrhawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiMessageSquare />
          <div className="text-xs font-medium">Messages</div>
        </div>
        <div
          className={`${
            pathname === "/user/withdryawal" && "bg-gray-600 text-white"
          } flex items-center gap-2 hover:bg-gray-500 px-2 py-[6px] rounded-md hover:text-white cursor-pointer`}
        >
          <FiGift />
          <div className="text-xs font-medium">Rewards</div>
        </div>
       
      </div>
    </div>
  );
}
