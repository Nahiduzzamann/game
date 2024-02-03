import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Input,
  Button,
  Stack,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import getWallet from "../../module/getWallet";
import url from "../../module";
import createUserWallet from "../../module/createUserWallet";
import { useNavigate } from "react-router-dom";
import getUserWallet from "../../module/getUserWallet";
import { RiDeleteBin3Line } from "react-icons/ri";
import deleteUserWallet from "../../module/deleteUserWallet";
import { AuthContext } from "../../providers/AuthProvider";
const BankDetails = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const [wallets, setWallets] = useState(null);
  const [walletNumber, setWalletNumber] = useState("");
  const [update, setUpdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const toast = useToast();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getWallet()
      .then((response) => {
        setWallets(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wallets:", error);
      });
  }, []);

  const handleImageClick = (name) => {
    setSelectedImage(name);
  };
  const handleDeleteAccount = (walletId) => {
    deleteUserWallet(walletId)
      .then((response) => {
        setUpdate(response);
        //  console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching wallets:", error);
      });
  };
  useEffect(() => {
    getUserWallet()
      .then((response) => {
        setPaymentMethods(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wallets:", error);
      });
  }, [update]);
  const handleAddWallet = async () => {
    if(!selectedImage){
      return toast({
        title: "Select Wallet",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);
    if (!walletNumber) {
      setLoading(false);
      return toast({
        title: "Add Wallet Number",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    createUserWallet(selectedImage, walletNumber)
      .then(() => {
        setLoading(false);
        toast({
          title: "Wallet Added",
          description: "Wallet successfully added!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/user/withdrawal");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding wallet:", error);
        toast({
          title: "Error",
          description: "An error occurred while adding the wallet.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
      <div className="p-5 bg-white rounded-md">
        <Box p={4}>
          <div>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
             
              {
               selectedLanguage ==='en' ? "Your Account":"আপনার অ্যাকাউন্ট"
              }
            </Text>
            {paymentMethods.length <= 0 && (
              <div className="text-center text-red-500 my-2">
                 {
          selectedLanguage ==='en' ? "Add Wallet then Withdraw!":"ওয়ালেট যোগ করুন তারপর উত্তোলন করুন!"
        }{" "}
              </div>
            )}

            <div className="flex gap-2 flex-wrap">
            {paymentMethods?.map((data, index) => (
              <div
                key={index}
                className={` flex gap-2 items-center rounded-md overflow-hidden m-2  hover:bg-gray-300 cursor-pointer ${
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
                <div className="w-full  font-medium my-1">
                  {data.wallet.methodName}
                  <p>{data.wallet.walletNumber}</p>
                </div>
                <RiDeleteBin3Line
                  onClick={() => handleDeleteAccount(data._id)}
                  className="mr-2 text-4xl text-red-500 rounded-lg hover:border border-red-500"
                />
              </div>
            ))}
            </div>
          </div>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
           
            {
               selectedLanguage ==='en' ? "Add Bank Details":"ব্যাঙ্কের বিবরণ যোগ করুন"
              }
          </Text>

          <Stack spacing={4} mb={4}>

          <span className="text-red-500"> {
               selectedLanguage ==='en' ? "Select a wallet to add- ":"যোগ করার জন্য একটি ওয়ালেট নির্বাচন করুন-"
              }</span>
            {wallets ? (
              <div className="flex  items-center flex-wrap gap-4">
             
                {wallets?.map((data, index) => (
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
            ) : (
              <div className="flex justify-center items-center py-4">
                <Spinner color="blue.500"></Spinner>
              </div>
            )}

            {selectedImage && (
              <Input
                borderColor="gray.600"
                type="text"
                placeholder="Enter Wallet Number"
                value={walletNumber}
                onChange={(e) => setWalletNumber(e.target.value)}
              />
            )}

            <Button
              onClick={handleAddWallet}
              isLoading={loading}
              loadingText="Adding..."
              colorScheme="blue"
              size="md"
            >
              {
               selectedLanguage ==='en' ? "Add Wallet ":"ওয়ালেট যোগ করুন"
              }
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default BankDetails;
