import React, { useState, useEffect } from "react";
import { Box, Input, Button, Stack, Text, useToast, Spinner } from "@chakra-ui/react";
import getWallet from "../../module/getWallet";
import url from "../../module";
import createUserWallet from "../../module/createUserWallet";
import { useNavigate } from "react-router-dom";

const BankDetails = () => {
  const [wallets, setWallets] = useState(null);
  const [walletNumber, setWalletNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const toast = useToast();
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

  const handleAddWallet = async () => {
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
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Add Bank Details
      </Text>

      <Stack spacing={4} mb={4}>
        {
            wallets ? (<div className="flex justify-center items-center flex-wrap gap-4">
            <span className="text-red-500">  Please select a wallet:</span>
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
          </div>):(<div className="flex justify-center items-center py-4"><Spinner color="blue.500"></Spinner></div>)
        }

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
          Add Wallet
        </Button>
      </Stack>
    </Box>
  );
};

export default BankDetails;
