import React from 'react';

const SignUp = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-blue-50 p-25'>
            <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-indigo-500">
                <p className='text-center text-3xl p-3 font-semibold'>Register Now</p>
                <div className='border-b-2 pt-5 border-gray-400'></div>
                <form action="">
                <div className=" mt-3">
                   <label for="username" className='block text-base mb-2'>Username:</label>
                    <input type="text" className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded" id="username" name="username" placeholder='Fill Up Hare'></input>
                </div>

                <div className=" mt-3">
                   <label for="password" className='block text-base mb-2'>Password:</label>
                    <input type="password" className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded" id="password" name="password" placeholder='Fill Up Hare'></input>
                </div>

                <div className=" mt-3">
                   <label for="password" className='block text-base mb-2'>Confirm Password:</label>
                    <input type="password" className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded" id="password" name="password" placeholder='Fill Up Hare'></input>
                </div>

                <div className=" mt-3">
                   <label for="password" className='block text-base mb-2'>Currency</label>
                   <select name="cars" id="cars" className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded">
                        <option value="volvo">BDT</option>
                        <option value="saab">INR</option>
                        <option value="opel">NPR</option>
                    </select>
                </div>

                <div className="mt-4 text-center border-2 rounded p-1 bg-black text-yellow-100 hover:bg-red-400">
                  <button className='text-center'>Next</button>
                </div>
               <div className='border-b-2 pt-5 border-red-400'></div>
                <label for="password" className='block text-base mt-3'>Already have an account?</label>
                <div className="text-center border-2 rounded p-1 bg-yellow-500 text-black hover:bg-red-400">
                  <button className='text-center'>Login</button>
                </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;