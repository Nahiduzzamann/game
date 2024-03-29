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
  Select,
  useDisclosure,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import getWallet from "../../module/getWallet";
import url from "../../module";
import getPromotions from "../../module/getPromotions";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from "react-router-dom";

export default function Deposit() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const param = queryParams.get("id");
  // console.log(param);
  const { selectedLanguage } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [inputAmount, setInputAmount] = useState(200);
  const [apiData, setApiData] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [depositBonus, setDepositBonus] = useState(param);
  const [depositChannel, setDepositChannel] = useState("Cash Out");
  // console.log(depositBonus);
  const [loader, setLoader] = useState(false);
  const toast = useToast();

  const handleAmountClick = (amount) => {
    setSelectedAmount(parseFloat(amount));
    setInputAmount(parseFloat(amount));
  };

  const handleInputChange = (e) => {
    setInputAmount(e.target.value);
    // You can add validation or other logic as needed
  };
  const handleImageClick = (name) => {
    setSelectedImage(name);
  };

  useEffect(() => {
    apiCall();
    setSelectedImage('')
  }, [depositChannel]);
  const apiCall = async () => {
    try {
      const walletRes = await getWallet(depositChannel);
      setApiData(walletRes.data);
      localStorage.setItem("wallets", JSON.stringify(walletRes.data));
      const promotionRes = await getPromotions(true);
      setPromotions(promotionRes.data);
      localStorage.setItem("promotions", JSON.stringify(promotionRes.data));
    } catch (error) {
      console.error(error.response.data.error);
    }
  };
  const callDeposit = async () => {
    if (!inputAmount || !selectedImage) {
      return toast({
        title: "Enter amount and select payment method",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    if( parseFloat(inputAmount) < 200){
      return toast({
        title: "Enter amount (200-30,000)",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }else if( parseFloat(inputAmount) > 30000){
      return toast({
        title: "Enter amount (200-30,000)",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    try {
      openPopup();
    } catch (error) {}
  };
  const openPopup = () => {
    const hostname = window.location.hostname;
    //console.log(hostname);
    const url = `${hostname==="localhost"?"http://localhost:5173":`https://${hostname}`}/pay?walletId=${selectedImage}&amount=${inputAmount}&promotionId=${
      promotions?.filter((d) => d._id.match(depositBonus))[0]?._id
    }`;
    const width = 300;
    const height = 400;
    const popupSettings = `width=${width},height=${height},resizable=yes,scrollbars=yes,status=yes`;
    window.open(url, "_blank", popupSettings);
  };
  if (!apiData || !promotions) {
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
          {selectedLanguage === "en" ? "Deposit" : "জমা"}
        </h1>
        <p className="font-bold pt-5 pb-2">
          {selectedLanguage === "en"
            ? " Payment Channel"
            : "পরিশোধ পদ্ধতি"}
          <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
          {["Cash Out",'Send Money']?.map((data, index) => (
            <div
              key={index}
              onClick={() => setDepositChannel(data)}
              className={` flex  items-center rounded-md py-2 w-[150px] overflow-hidden m-2  hover:bg-blue-300 cursor-pointer ${
                depositChannel === data
                  ? "bg-blue-300 border-[#0082D6]"
                  : "bg-gray-200"
              }`}
            >
            
              <div className="w-full mx-2 text-center  font-medium my-1">
                {data}
              </div>
            </div>
          ))}
          
        </div>
        <div>Send Money charge 1.5% applicable</div>
        <p className="font-bold pt-5 pb-2">
          {selectedLanguage === "en"
            ? " Payment Methods"
            : "মূল্য পরিশোধ পদ্ধতি"}
          <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
          {apiData?.map((data, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(data._id)}
              className={` flex  items-center w-[150px] rounded-md overflow-hidden m-2  hover:bg-blue-300 cursor-pointer ${
                selectedImage === data._id
                  ? "bg-blue-300 border-[#0082D6]"
                  : "bg-gray-200"
              }`}
            >
              <img
                className="h-12 w-12"
                src={`${url}${data.icon}`}
                alt={`${data.methodName}`}
              />
              <div className="w-full mx-2 text-center  font-medium my-1">
                {data.methodName}
              </div>
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
                  inputAmount == amount ? "bg-blue-500" : ""
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
                  inputAmount == amount ? "bg-blue-500" : ""
                }`}
              >
                {amount}৳
              </div>
            ))}
          </div>

          <p className="font-bold pt-5 pb-2 flex">
            {selectedLanguage === "en" ? "Deposit Amount " : "জমা পরিমাণ "}
            <span className="text-red-400">(200৳-30,000৳)*</span>
          </p>

          <input
            type="number"
            value={inputAmount}
            onChange={handleInputChange}
            className="h-10 w-36 bg-gray-200 text-black border border-[#0082D6] font-bold text-center rounded-lg p-1 m-2"
          />
                    
        </div>
        {!param && (
          <div>
            {" "}
            <p className="font-bold pt-5 pb-2">
              {selectedLanguage === "en" ? "Deposit Bonus" : "জমা বোনাস"}
            </p>
            <Select
              onChange={(e) => {
                setDepositBonus(e.target.value);
              }}
              placeholder="No Bonus"
            >
              {promotions?.map((doc, i) => (
                <option key={i} value={doc._id}>
                  {doc.title}
                </option>
              ))}
            </Select>
          </div>
        )}

        <div className="pt-5 text-center">
          <div
            onClick={() => {
              if (loader) {
                return;
              }
              if (depositBonus) {
                onOpen();
              } else {
                callDeposit();
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
                "Deposit"
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
                      ? "Deposit Details"
                      : "জমার বিবরণ"}
                  </AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <div className="border-t-4 border-indigo-300 p-5">
                      <div className="p-2 font-semibold flex justify-between">
                        {selectedLanguage === "en"
                          ? "Deposit amount"
                          : "জমার পরিমাণ"}{" "}
                        <span className="ps-40">৳ {inputAmount}</span>
                      </div>
                      <div className="p-2 font-semibold flex justify-between">
                        {selectedLanguage === "en"
                          ? " Bonus Amount"
                          : "বোনাস পরিমাণ"}{" "}
                        <span className="ps-40">
                          ৳{" "}
                          {(inputAmount *
                            promotions?.filter((d) =>
                              d._id.match(depositBonus)
                            )[0]?.bonusPercentage) /
                            100}
                        </span>
                      </div>
                      <div className="p-2 font-semibold flex justify-between">
                        {selectedLanguage === "en"
                          ? "Target Turnover"
                          : "টার্গেট টার্নওভার"}{" "}
                        <span className="ps-40">
                          ৳{" "}
                          {
                            promotions?.filter((d) =>
                              d._id.match(depositBonus)
                            )[0]?.turnOverAmount
                          }
                        </span>
                      </div>
                    </div>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      {selectedLanguage === "en" ? " No" : "না"}
                    </Button>
                    <Button
                      disabled={loader}
                      onClick={() => {
                        onClose();
                        callDeposit();
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
