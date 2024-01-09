import React from "react";
import { FaDollarSign } from "react-icons/fa";

export default function ProfileMenuBar() {
  return (
    <div className="bg-white px-1 py-2 rounded-md">
      <div className="font-semibold text-gray-600 ml-3">User Profile</div>
      <div>
        <div className="flex items-center gap-2 hover:bg-gray-600 px-2 py-1 rounded-md hover:text-white">
          <FaDollarSign />
          <div>Deposit</div>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-600 px-2 py-1 rounded-md hover:text-white">
          <FaDollarSign />
          <div>Deposit</div>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-600 px-2 py-1 rounded-md hover:text-white">
          <FaDollarSign />
          <div>Deposit</div>
        </div>
      </div>
    </div>
  );
}
