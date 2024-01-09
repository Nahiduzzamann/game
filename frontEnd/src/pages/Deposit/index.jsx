import React from 'react'
import { Select } from '@chakra-ui/react'
import { BsQuestionOctagonFill } from "react-icons/bs";
export default function Deposit() {
  return (
    <div className='p-5 bg-white'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl'>Deposit</h1>

            <p className='font-bold pt-5 pb-2'>Payment Methods <span className='text-red-500 ps-5'>*</span></p>
            <div className='flex'>
                <div className="border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400">
                    <img className="h-12 w-20" src="https://www.babu88.co/static/svg/deposit-ewallet-nagad.svg"  srcset="" />
                </div>
                <div className="border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400">
                    <img className="h-12 w-20" src="https://www.babu88.co/static/svg/deposit-ewallet-rocket.svg" 
                      classNamealt="text-white bg-blue-500 rounded-lg p-2 m-2" srcset="" />
                </div>
                <div className="border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400">
                    <img className="h-12 w-20" src="https://www.babu88.co/static/svg/deposit-ewallet-bkash.svg" 
                      classNamealt="text-white bg-blue-500 rounded-lg p-2 m-2" srcset="" />
                </div>

                <div className="border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400">
                    <img className="h-12 w-20" src="https://www.babu88.co/static/svg/deposit-ewallet-upay.svg" 
                      classNamealt="text-white bg-blue-500 rounded-lg p-2 m-2" srcset="" />
                </div>
              </div>

                <p className='font-bold pt-5 pb-2'>Deposit Channel <span className='text-red-500 ps-5'>*</span></p>
                <div className='text-center'>
                    <p className="h-12 w-20 border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400"> DPAY</p>
                </div>
                <div className='text-center pt-4 flex'>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 200</p>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 500</p>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 2000</p>
                </div>
                <div className='text-center flex'>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 5000</p>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 10000</p>
                    <p className="h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 hover:bg-yellow-400"> 20000</p>
                </div>

                <p className='font-bold pt-5 pb-2 flex justify-between'>Deposit Amount * <BsQuestionOctagonFill/></p>
                
                 <Select placeholder='2000'>
                     <option value='option1'>200</option>
                     <option value='option2'>500</option>
                     <option value='option3'>2000</option>
                  </Select>


                  
                <p className='font-bold pt-5 pb-2'>Deposit Bonus <span className='text-red-500 ps-5'>*</span></p>
                
                <Select placeholder='No Bounce'>
                    <option value='option3'>Slots 5% Unlimited Deposit Bonus -5.00%</option>
                    <option value='option1'>Live Casino 5% Unlimited Deposit Bonus -5.00%</option>
                    <option value='option2'>Live Casino Weekly 20% Deposit Bonus -20.00%</option>
                    <option value='option3'>Slots 20% Weekly Deposit Bonus -20.00%</option>
                 </Select>

        </div>
  )
}
