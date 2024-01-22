import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
export default function LoginButton() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  return (
    <div className={`${user && 'hidden'} w-full grid z-10 grid-cols-2 md:hidden fixed bottom-0`}>
      <div onClick={()=>navigate("/login")} className="flex justify-center items-center py-4 hover:bg-gray-700 bg-black text-white">
        Login
      </div>
      <div onClick={()=>navigate("/signup")} className="flex justify-center items-center py-4 hover:bg-blue-400 bg-blue-500 text-white">
        SignUp
      </div>
    </div>
  );
}
