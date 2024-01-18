import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import getWallet from "../../module/getWallet";
import url from "../../module";

export default function Deposit() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [inputAmount, setInputAmount] = useState(200);
  const [apiData, setApiData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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

  useEffect(() => {
    getWallet()
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          {apiData?.map((data, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(name)}
              className={`border-2 border-gray-500 rounded-lg p-2 m-2 hover:bg-gray-200 cursor-pointer ${
                selectedImage === name ? "bg-gray-200 border-[#0082D6]" : ""
              }`}
            >
              <img
                className="h-12 w-20"
                src={`${url}${data.icon}`}
                alt={`${data.methodName}`}
              />
            </div>
          ))}
        </div>

        <div>
          <div className="text-center pt-4 flex items-center">
            {[200, 500, 1000].map((amount) => (
              <div
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`h-10 w-36 flex justify-center bg-black text-white items-center font-bold text-center rounded-lg p-1 m-2 cursor-pointer ${
                  selectedAmount == amount ? "bg-blue-500" : ""
                }`}
              >
                {amount}
              </div>
            ))}
          </div>
          <div className="text-center flex">
            {[5000, 10000, 20000].map((amount) => (
              <div
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`h-10 w-36 bg-black flex justify-center items-center text-white font-bold text-center rounded-lg p-1 m-2 cursor-pointer ${
                  selectedAmount == amount ? "bg-blue-500" : ""
                }`}
              >
                {amount}
              </div>
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
          <div className="bg-[#0082D6] p-2 rounded-lg font-bold hover:bg-[#58b4f1]">
            <button className="text-white" onClick={onOpen}>
              Deposite
            </button>
            <div>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <div></div>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button colorScheme="red" ml={3}>
                      Yes
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
