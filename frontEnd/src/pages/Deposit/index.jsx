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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import getWallet from "../../module/getWallet";
import url from "../../module";
import getPromotions from "../../module/getPromotions";

export default function Deposit() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [inputAmount, setInputAmount] = useState(200);
  const [apiData, setApiData] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [depositBonus, setDepositBonus] = useState(null);
  const [loader, setLoader] = useState(false);
  const toast = useToast();

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
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const walletRes = await getWallet();
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
    if (!inputAmount || !selectedImage ) {
      return toast({
        title: "Enter amount and select payment method",
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
    const url = `https://${hostname}/pay?walletId=${selectedImage}&amount=${inputAmount}&promotionId=${
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
          Deposit
        </h1>

        <p className="font-bold pt-5 pb-2">
          Payment Methods <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
          {apiData?.map((data, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(data._id)}
              className={` flex  items-center rounded-md overflow-hidden m-2  hover:bg-gray-300 cursor-pointer ${
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

        <p className="font-bold pt-5 pb-2">Deposit Bonus</p>

        <Select
        
          onChange={(e) => {
            setDepositBonus(e.target.value);
          }}
          placeholder="No Bounce"
        >
          {promotions?.map((doc, i) => (
            <option key={i} value={doc._id}>
              {doc.title}
            </option>
          ))}
        </Select>

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
                  <AlertDialogHeader>Deposit Details</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <div className="border-t-4 border-indigo-300 p-5">
                      <div className="p-2 font-semibold flex justify-between">
                        Deposit amount{" "}
                        <span className="ps-40">৳ {inputAmount}</span>
                      </div>
                      <div className="p-2 font-semibold flex justify-between">
                        Bonus Amount{" "}
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
                        Target Turnover{" "}
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
                      No
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
