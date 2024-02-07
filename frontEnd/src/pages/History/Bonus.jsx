import React, { useContext, useEffect, useState } from "react";
import getUserTurnoverBonus from "../../module/getUserTurnoverBonus";
import { Box, Badge, Text, VStack, HStack } from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";
export default function Bonus() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserTurnoverBonus().then((res) => {
      //console.log(res.data);
      setData(res.data);
    });
  }, []);

  return(
    <div>
      <div>
        <input className="border px-5 py-2 rounded-md w-full" placeholder="Search"/>
      </div>
      <div className="flex justify-center flex-wrap gap-2">
      {data?.map((d,i)=>(
       <TransactionCard data={d} key={i}/>
      ))}
      </div>
    </div>
  )
 
}
const TransactionCard = ({ data }) => {
  const { selectedLanguage } = useContext(AuthContext);
  const { _id, date, userId, amount } = data;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
    >
      <VStack spacing={2} align="start">
        <HStack justify="space-between" w="100%">
          <Badge borderRadius="full" px="2" colorScheme="purple">
            
            {
            selectedLanguage === "en" ? "Transaction Details"
            : "লেনদেন বিবরণী"
            }
          </Badge>
          <Text fontSize="sm" color="gray.500">
            {new Date(date).toLocaleString()}
          </Text>
        </HStack>
        <Text fontSize="lg" fontWeight="semibold">
           {
            selectedLanguage === "en" ? "Transaction ID:"
            : "লেনদেন নাম্বার:"
            }
            {_id}
        </Text>
        <VStack spacing={1} align="start" w="100%">
          <Text fontSize="sm" color="gray.500">
            
            {
            selectedLanguage === "en" ? "User ID:"
            : "ব্যবহারকারী আইডি:"
            }
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {userId}
          </Text>
        </VStack>
        <VStack spacing={1} align="start" w="100%">
          <Text fontSize="sm" color="gray.500">
           
            {
            selectedLanguage === "en" ? " Amount:"
            : "পরিমাণ:"
            }
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {amount}
          </Text>
        </VStack>
        
      </VStack>
    </Box>
  );
};