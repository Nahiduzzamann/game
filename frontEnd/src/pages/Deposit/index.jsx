import React from 'react'
import { Select } from '@chakra-ui/react'
export default function Deposit() {
  return (
    <div className='p-5 bg-white'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>Deposit</h1>

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


                <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Central Wallet</p>
            <p className='font-medium pb-5'>All deposited amount and bonus will be deposited into a single central wallet and bets can be placed.</p>

        </div>
  )
}
