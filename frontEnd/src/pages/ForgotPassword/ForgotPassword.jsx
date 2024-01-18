import React from 'react';
import { FaFlag } from "react-icons/fa";
const ForgotPassword =()=>{
    return (

     <div className="flex justify-center items-center h-screen bg-blue-50 p-25">
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
        <p className="text-center text-3xl p-3 font-semibold">Reset Password</p>
        <div className="border-b-2 pt-2 border-gray-400"></div>
        <div className="pt-5 border-gray-400">

        <form>
        <div className="mt-5">
            <label
              htmlFor="username"
              className="block text-base mb-2 font-semibold"
            >
              Username: <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="username"
              name="username"
              placeholder="Fill Up Here"
            />
          </div>
          <div className="mt-3">
            <label className="block text-base mb-2 font-semibold">Enter your phone number to reset : <span className='text-red-500'>*</span></label>
            <div className="flex">
              <div className=" border-gray-600 rounded flex items-center justify-center p-2 me-2 bg-blue-200">
                <FaFlag className="text-blue-600" />
              </div>
              <input
                type="text"
                className="w-72 text-base py-1 px-1 border-2 border-gray-600 rounded"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Fill Up Here"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-base mb-2 font-semibold">Request OTP: <span className='text-red-500'>*</span></label>
            <input
              type="text"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="referralCode"
              name="referralCode"
              placeholder="Fill Up Here"
            />
          </div>

          <div className="mt-3 text-red-500"></div>

          <button className='mt-4 w-full text-center rounded p-2 bg-black text-white font-bold hover:bg-red-400'>Reset</button>
          <div className="border-b-2 pt-8 border-red-400"></div>
          <label
            htmlFor="password"
            className="block text-base mt-5 pb-1 font-semibold"
          >
            Don not have an account?
          </label>
          <button className='mt-4 w-full text-center rounded p-2 bg-yellow-500 text-white font-bold hover:bg-red-400'>Sing Up</button>
          </form>
        </div>
     </div>
    </div>
    )
}
export default ForgotPassword;