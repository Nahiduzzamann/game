// import React, { useState, useEffect } from "react";
// import { Input, Button, Stack, Text, useToast, Spinner } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import getUserWallet from "../../module/getUserWallet";
// import url from "../../module";

// const Withdrawal = () => {
//   const [withdrawableAmount, setWithdrawableAmount] = useState("");
//   const [paymentMethods, setPaymentMethods] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const toast = useToast();
//   const [selectedImage, setSelectedImage] = useState("");
//   useEffect(() => {
//     getUserWallet()
//     .then((response) => {
//       setPaymentMethods(response.data);
//       // console.log(response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching wallets:", error);
//     });
//   }, []);

//   const handleWithdrawal = async () => {
//     if(!withdrawableAmount){
//       return  toast({
//         title: "Enter Amount",
//         description: "An error occurred during withdrawal.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }else if(!selectedImage){
//       return  toast({
//         title: "Select Wallet",
//         description: "An error occurred during withdrawal.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//     setLoading(true);

//     // Simulating an API call for withdrawal
//     try {
//       // Add your withdrawal logic here
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       toast({
//         title: "Withdrawal Successful",
//         description: `Successfully withdrew ${withdrawableAmount}`,
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: "Withdrawal Failed",
//         description: "An error occurred during withdrawal.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleImageClick = (name) => {
//     setSelectedImage(name);
//   };
//   const handleAddPaymentMethod = () => {
//     navigate("/user/bank-details");
//   };

//   return (
//     <div className="container mx-auto p-4">
//     {
//       paymentMethods.length > 0 && <h1 className="text-2xl font-semibold mb-4 ">
//       Withdraw Your Available Amount{" "}
//     </h1>
//     }
      

//       <Stack spacing={4} mb={4}>
//         <Input
//          borderColor='gray.600'
//           type="text"
//           value={withdrawableAmount}
//           onChange={(e) => setWithdrawableAmount(e.target.value)}
//           placeholder="Enter amount"
//         />
//       </Stack>

//       {paymentMethods.length > 0 ? (
//         <Stack spacing={2} mb={4}>
//           <Text fontSize="sm" fontWeight="medium">
//             Payment Methods:
//           </Text>
//           {
         
//           paymentMethods &&  <span className="text-red-500"> Select Your Wallet-</span>
//           }
//           {
//             paymentMethods ? (<div className="flex justify-center items-center flex-wrap gap-4">
            
//             {paymentMethods?.map((data, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleImageClick(data._id)}
//                 className={` flex  items-center rounded-md overflow-hidden m-2 p-1 hover:bg-gray-300 cursor-pointer ${
//                   selectedImage === data._id
//                     ? "bg-blue-300 border-[#0082D6]"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 <img
//                   className="h-12 w-12"
//                   src={`${url}${data.wallet.icon}`}
//                   alt={`${data.methodName}`}
//                 />
//                 <div className="w-full mx-2 text-center  font-medium my-1">
//                   {data.wallet.methodName}
//                 </div>
//                 <p>{data.walletNumber}</p>
//               </div>
//             ))}
//           </div>):(<div className="flex justify-center items-center py-4"><Spinner color="blue.500"></Spinner></div>)
//         }
//         </Stack>
//       ) : (
//         <Button
//           onClick={handleAddPaymentMethod}
//           isLoading={loading}
//           loadingText="Adding..."
//           colorScheme="blue"
//           size="sm"
//         >
//           Add Payment Method
//         </Button>
//       )}
//       {paymentMethods.length > 0 && (
//         <Button
//           onClick={handleWithdrawal}
//           isLoading={loading}
//           loadingText="Withdrawing..."
//           colorScheme="green"
//           size="md"
//         >
//           Withdraw
//         </Button>
//       )}
//     </div>
//   );
// };























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
  useDisclosure,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import getUserWallet from "../../module/getUserWallet";
import url from "../../module";

export default function Withdrawal() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [inputAmount, setInputAmount] = useState(200);
  const [apiData, setApiData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
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
      const walletRes = await getUserWallet();
      setApiData(walletRes.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };
  const callWithdraw = async () => {
    if (!inputAmount || !selectedImage) {
      return toast({
        title: "Enter amount and select withraw method",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    try {
      openPopup();
    } catch (error) {console.log(error)}
  };
  const openPopup = () => {
    
    const width = 300;
    const height = 400;
    const popupSettings = `width=${width},height=${height},resizable=yes,scrollbars=yes,status=yes`;
    window.open(url, "_blank", popupSettings);
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
          Withdraw
        </h1>

        <p className="font-bold pt-5 pb-2">
        Withdraw Methods <span className="text-red-500 ">*</span>
        </p>
        <div className="flex">
          {apiData?.map((data, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(data.wallet._id)}
              className={` flex  items-center rounded-md overflow-hidden m-2  hover:bg-gray-300 cursor-pointer ${
                selectedImage === data.wallet._id
                  ? "bg-blue-300 border-[#0082D6]"
                  : "bg-gray-200"
              }`}
            >
              <img
                className="h-12 w-12"
                src={`${url}${data.wallet.icon}`}
                alt={`${data.wallet.methodName}`}
              />
              <div className="w-full mx-2  font-medium my-1">
                {data.wallet.methodName}
               <p>{data.wallet.walletNumber}</p>
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
            Withdraw Amount *
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
              if (loader) {
                return;
              }
              else {
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
                  <AlertDialogHeader>Withdraw Details</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <div className="border-t-4 border-indigo-300 p-5">
                      <div className="p-2 font-semibold flex justify-between">
                      Withdraw amount{" "}
                        <span className="ps-40">৳ {inputAmount}</span>
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
