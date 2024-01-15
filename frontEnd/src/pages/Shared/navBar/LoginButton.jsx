import React from "react";
import { useNavigate } from "react-router-dom";
export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <div className=" w-full grid grid-cols-2 md:hidden fixed bottom-0">
      <div onClick={()=>navigate("/login")} className="flex justify-center items-center py-4 hover:bg-gray-700 bg-black text-white">
        Login
      </div>
      <div onClick={()=>navigate("/signup")} className="flex justify-center items-center py-4 hover:bg-blue-400 bg-blue-500 text-white">
        SignUp
      </div>
    </div>
  );
}
