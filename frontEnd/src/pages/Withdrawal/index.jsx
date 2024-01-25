import React, { useState, useEffect } from "react";
import { Input, Button, Stack, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Withdrawal = () => {
  const [withdrawableAmount, setWithdrawableAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Dummy data for demonstration
    // setPaymentMethods(['Dummy Payment Method 1', 'Dummy Payment Method 2']);
  }, []);

  const handleWithdrawal = async () => {
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

  const handleAddPaymentMethod = () => {
    navigate("/user/bank-details");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 ">
        Withdraw Your Available Amount{" "}
      </h1>

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
          <ul className="list-disc ml-4">
            {paymentMethods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
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
