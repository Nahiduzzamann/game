import React, { useContext, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import getUserWallet from "../../module/getUserWallet";
import url from "../../module";
import makeWithdraw from "../../module/makeWithdraw";
import { AuthContext } from "../../providers/AuthProvider";
import {useNavigate} from 'react-router-dom'
export default function Withdrawal() {
  const { selectedLanguage } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState("");
  // console.log(selectedImage);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [inputAmount, setInputAmount] = useState(500);
  const [apiData, setApiData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const navigate =useNavigate()
  const { setUpdateUserState } = useContext(AuthContext);
  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setInputAmount(amount);
  };

  const handleInputChange = (e) => {
    setInputAmount(e.target.value);
    // You can add validation or other logic as needed
  };
  const handleImageClick = (wallet) => {
    setSelectedImage(wallet);
  };

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const walletRes = await getUserWallet();
      setApiData(walletRes.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };
  useEffect(() => {
    if(apiData?.length == 0){
      navigate('/user/bank-details')
    }
  }, [apiData]);
  const callWithdraw = () => {
    if (!inputAmount || !selectedImage) {
      return toast({
        title: "Enter amount",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoader(true);
    makeWithdraw(selectedImage._id, inputAmount)
      .then(() => {
        setLoader(false);
        setUpdateUserState(Math.random());
        toast({
          title: "Withdraw Success",
          status: "info",
          duration: 10000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);

        toast({
          title: error.response?.data?.error || "Somthing went wrong",
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      });
  };
  if (!apiData) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </div>
    );
  }

 
  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
          {selectedLanguage === "en" ? " Withdrawal" : "উত্তোলন করুন"}
        </h1>

        <p className="font-bold pt-5 pb-2">
          {selectedLanguage === "en" ? "Payment Methods" : "মূল্য পরিশোধ পদ্ধতি"}
          <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
          {apiData?.map((data, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(data)}
              className={` flex  items-center rounded-md overflow-hidden m-2  hover:bg-gray-300 cursor-pointer ${
                selectedImage._id === data._id
                  ? "bg-blue-300 border-[#0082D6]"
                  : "bg-gray-200"
              }`}
            >
              <img
                className="h-12 w-12"
                src={`${url}${data?.wallet?.icon}`}
                alt={`${data.wallet?.methodName}`}
              />
              <div className="w-full mx-2  font-medium my-1">
                {data.wallet?.methodName}
                <p>{data.walletNumber}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center pt-4 flex items-center">
            {[500, 800, 1000].map((amount) => (
              <div
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`h-10 w-36 flex justify-center bg-black text-white items-center font-bold text-center rounded-lg p-1 m-2 cursor-pointer ${
                  selectedAmount == amount ? "bg-blue-500" : ""
                }`}
              >
                {amount}৳
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
                {amount}৳
              </div>
            ))}
          </div>

          <p className="font-bold pt-5 pb-2">
            {selectedLanguage === "en" ? " Withdrawable Amount" : "উত্তোলনযোগ্য পরিমাণ"}{" "}
            <span className="text-red-400">(500৳-30,000৳)*</span>
          </p>
          <input
            type="number"
            value={inputAmount}
            onChange={handleInputChange}
            className="h-10 w-36 bg-gray-200 text-black border border-[#0082D6] font-bold text-center rounded-lg p-1 m-2"
          />
        </div>

        <div className="pt-5 text-center">
          <div
            onClick={() => {
              if (!selectedImage) {
                return toast({
                  title: "Select withraw method",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                onOpen();
              }
            }}
            className="bg-[#0082D6] p-2 rounded-lg font-bold hover:bg-[#58b4f1]"
          >
            <button className="text-white">
              {loader ? (
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.100"
                  color="blue.500"
                  size={"sm"}
                />
              ) : (
                "Withdraw"
              )}
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
                  <AlertDialogHeader>
                    {selectedLanguage === "en"
                      ? "Withdraw Details"
                      : "উত্তোলন বিবরণ"}
                  </AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <div className="border-t-4 border-indigo-300 p-5">
                      <div className="p-2 font-semibold items-center flex justify-between border-b-2">
                        <p>
                          {selectedLanguage === "en"
                            ? "Withdraw method"
                            : "উত্তোলন পদ্ধতি"}
                        </p>
                        <div
                          className={` flex  items-center rounded-md overflow-hidden m-2`}
                        >
                          <img
                            className="h-12 w-12"
                            src={`${url}${selectedImage?.wallet?.icon}`}
                            alt={`${selectedImage?.wallet?.methodName}`}
                       
                          />
                          <div className="w-full mx-2  font-medium my-1">
                            {selectedImage?.wallet?.methodName}
                            <p>{selectedImage?.walletNumber}</p>
                           
                          </div>
                        </div>
                      </div>
                      <div className="p-2 font-semibold flex justify-between">
                        {selectedLanguage === "en"
                          ? " Withdrawable amount"
                          : "উত্তোলন পরিমাণ"}{" "}
                        <span className="ps-40">{inputAmount}৳ </span>
                      </div>
                    </div>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                     
                      {selectedLanguage === "en" ? "No" : "না"}
                    </Button>
                    <Button
                      disabled={loader}
                      onClick={() => {
                        onClose();
                        callWithdraw();
                      }}
                      colorScheme="red"
                      ml={3}
                    >
                      {loader ? (
                        <Spinner
                          thickness="2px"
                          speed="0.65s"
                          emptyColor="gray.100"
                          color="blue.500"
                          size={"sm"}
                        />
                      ) : (
                        "Confirm"
                      )}
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
