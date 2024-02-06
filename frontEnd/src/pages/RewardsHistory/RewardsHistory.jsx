import { Badge, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getRewardsHistory from "../../module/getRewardsHistory";
const RewardsHistory = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1]);

  useEffect(() => {
    getRewardsHistory()
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
      <div className="p-5 bg-white rounded-md">
        <div className="flex justify-center flex-wrap gap-2">
          {data?.map((d, i) => (
            <RewardCard data={d} key={i}></RewardCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RewardsHistory;

const RewardCard = ({ data }) => {
  const { _id,userId, date, amount } = data;

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
            Reward Details
          </Badge>
          <Text fontSize="sm" color="gray.500">
            {new Date(date).toLocaleString()}
          </Text>
        </HStack>
        <Text fontSize="lg" fontWeight="semibold">
          TnxID: {_id}
        </Text>
        <VStack spacing={1} align="start" w="100%">
          <Text fontSize="sm" color="gray.500">
            User ID:
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {userId}
          </Text>
        </VStack>
        <VStack spacing={1} align="start" w="100%">
          <Text fontSize="sm" color="gray.500">
            Amount:
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {amount}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
