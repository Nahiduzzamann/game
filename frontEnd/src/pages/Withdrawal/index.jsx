import React, { useState, useEffect } from "react";
import { Input, Button, Stack, Text, useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import getUserWallet from "../../module/getUserWallet";
import url from "../../module";

const Withdrawal = () => {
  const [withdrawableAmount, setWithdrawableAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    getUserWallet()
    .then((response) => {
      setPaymentMethods(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching wallets:", error);
    });
  }, []);

  const handleWithdrawal = async () => {
    if(!withdrawableAmount){
      return  toast({
        title: "Enter Amount",
        description: "An error occurred during withdrawal.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }else if(!selectedImage){
      return  toast({
        title: "Select Wallet",
        description: "An error occurred during withdrawal.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);

    // Simulating an API call for withdrawal
    try {
      // Add your withdrawal logic here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Withdrawal Successful",
        description: `Successfully withdrew ${withdrawableAmount}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Withdrawal Failed",
        description: "An error occurred during withdrawal.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  const handleImageClick = (name) => {
    setSelectedImage(name);
  };
  const handleAddPaymentMethod = () => {
    navigate("/user/bank-details");
  };

  return (
    <div className="container mx-auto p-4">
    {
      paymentMethods.length > 0 && <h1 className="text-2xl font-semibold mb-4 ">
      Withdraw Your Available Amount{" "}
    </h1>
    }
      

      <Stack spacing={4} mb={4}>
        <Input
         borderColor='gray.600'
          type="text"
          value={withdrawableAmount}
          onChange={(e) => setWithdrawableAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </Stack>

      {paymentMethods.length > 0 ? (
        <Stack spacing={2} mb={4}>
          <Text fontSize="sm" fontWeight="medium">
            Payment Methods:
          </Text>
          {
         
          paymentMethods &&  <span className="text-red-500"> Select Your Wallet-</span>
          }
          {
            paymentMethods ? (<div className="flex justify-center items-center flex-wrap gap-4">
            
            {paymentMethods?.map((data, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(data._id)}
                className={` flex  items-center rounded-md overflow-hidden m-2 p-1 hover:bg-gray-300 cursor-pointer ${
                  selectedImage === data._id
                    ? "bg-blue-300 border-[#0082D6]"
                    : "bg-gray-200"
                }`}
              >
                <img
                  className="h-12 w-12"
                  src={`${url}${data.wallet.icon}`}
                  alt={`${data.methodName}`}
                />
                <div className="w-full mx-2 text-center  font-medium my-1">
                  {data.wallet.methodName}
                </div>
                <p>{data.walletNumber}</p>
              </div>
            ))}
          </div>):(<div className="flex justify-center items-center py-4"><Spinner color="blue.500"></Spinner></div>)
        }
        </Stack>
      ) : (
        <Button
          onClick={handleAddPaymentMethod}
          isLoading={loading}
          loadingText="Adding..."
          colorScheme="blue"
          size="sm"
        >
          Add Payment Method
        </Button>
      )}
      {paymentMethods.length > 0 && (
        <Button
          onClick={handleWithdrawal}
          isLoading={loading}
          loadingText="Withdrawing..."
          colorScheme="green"
          size="md"
        >
          Withdraw
        </Button>
      )}
    </div>
  );
};

export default Withdrawal;
