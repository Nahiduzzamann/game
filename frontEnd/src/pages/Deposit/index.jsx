import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";

export default function Deposit() {
  const [selectedImage, setSelectedImage] = useState('');
const [selectedAmount, setSelectedAmount] = useState(200);
  const [inputAmount, setInputAmount] = useState(200);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setInputAmount(amount);
  };

  const handleInputChange = (e) => {
    setInputAmount(e.target.value);
    // You can add validation or other logic as needed
  };
  const handleImageClick = (name) => {
    setSelectedImage(name);
  };
  return (
    <div className="bg-gray-500 rounded-lg p-4">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
          Deposit
        </h1>

        <p className="font-bold pt-5 pb-2">
          Payment Methods <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
      {['nagad', 'rocket', 'bkash', 'upay'].map((name,index) => (
        <div
          key={index}
          onClick={() => handleImageClick(name)}
          className={`border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-200 cursor-pointer ${
            selectedImage === name ? 'bg-gray-200 border-[#0082D6]' : ''
          }`}
        >
          <img
            className="h-12 w-20"
            src={`https://www.babu88.co/static/svg/deposit-ewallet-${name}.svg`}
            alt={`Image ${name}`}
          />
        </div>
      ))}
    </div>

        <p className="font-bold pt-5 pb-2">
          Deposit Channel <span className="text-red-500">*</span>
        </p>
        <div className="text-center">
          <p className="h-12 w-20 border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-400">
            {" "}
            DPAY
          </p>
        </div>
        <div>
      <div className="text-center pt-4 flex">
        {[200, 500, 1000].map((amount) => (
          <p
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className={`h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 cursor-pointer ${
              selectedAmount === amount ? 'bg-[#0082D6]' : ''
            }`}
          >
            {amount}
          </p>
        ))}
      </div>
      <div className="text-center flex">
        {[5000, 10000, 20000].map((amount) => (
          <p
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className={`h-10 w-36 bg-black text-white font-bold text-center rounded-lg p-1 m-2 cursor-pointer ${
              selectedAmount === amount ? 'bg-[#0082D6]' : ''
            }`}
          >
            {amount}
          </p>
        ))}
      </div>

      <p className="font-bold pt-5 pb-2 flex justify-between">
          Deposit Amount * <BsQuestionOctagonFill />
        </p>
      <input
        type="number"
        value={inputAmount}
        onChange={handleInputChange}
        className="h-10 w-36 bg-gray-200 text-black border border-[#0082D6] font-bold text-center rounded-lg p-1 m-2"
      />
    </div>

        <p className="font-bold pt-5 pb-2">
          Deposit Bonus <span className="text-red-500 ">*</span>
        </p>

        <Select placeholder="No Bounce">
          <option value="option3">
            Slots 5% Unlimited Deposit Bonus -5.00%
          </option>
          <option value="option1">
            Live Casino 5% Unlimited Deposit Bonus -5.00%
          </option>
          <option value="option2">
            Live Casino Weekly 20% Deposit Bonus -20.00%
          </option>
          <option value="option3">
            Slots 20% Weekly Deposit Bonus -20.00%
          </option>
        </Select>

        <div className="pt-5 text-center">
          <form
            action="/action_page.php"
            className="bg-[#0082D6] p-2 rounded-lg font-bold hover:bg-[#58b4f1]"
          >
            <button className="text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
