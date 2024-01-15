import React from 'react';
import { FaFlag } from "react-icons/fa";

const Phone = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-blue-50 p-25'>
            <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
                <p className='text-center text-3xl p-3 font-semibold'>Register Now</p>
                <div className='border-b-2 pt-5 border-gray-400'></div>
                <form action="">
                <div className=" mt-3">
                   <label for="username" className='block text-base mb-2'>Phone Number:</label>
                   <div className='flex'>
                   <FaFlag className='border-2 border-gray-600 me-2 rounded p-4 bg-blue-500 text-white'/><input type="text" className="w-72 text-base py-1 px-1 border-2 border-gray-600 rounded" id="username" name="username" placeholder='Fill Up Hare'></input>
                   </div>
                </div>

                <div className=" mt-3">
                   <label for="password" className='block text-base mb-2'>Referral Code:</label>
                    <input type="password" className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded" id="password" name="password" placeholder='(Optional)'></input>
                </div>

                <div className="mt-3 flex">
                    <input type="checkbox" className="border-2 border-gray-600 rounded p-2" id="checkbox" name="checkbox"></input>
                    <p className='ps-3 pt-5'>I am of legal age and I agree with the <a href="facebook.com">Terms and Conditions</a> </p>

                </div>

                <div className="mt-4 text-center border-2 rounded p-2 bg-black bg-yellow-500 hover:bg-red-400">
                  <button className='text-center'><a href="">Sing Up</a></button>
                </div>

               {/* <div className='border-b-2 pt-5 border-red-400'></div>
                <label for="password" className='block text-base mt-3'>Already have an account?</label>
                <div className="text-center border-2 rounded p-1 bg-yellow-500 text-black hover:bg-red-400">
                  <button className='text-center'>Login</button>
                </div> */}

                </form>
            </div>
        </div>
    );
};

export default Phone;