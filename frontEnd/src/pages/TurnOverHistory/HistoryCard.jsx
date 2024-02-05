import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Box, Progress, Text } from "@chakra-ui/react";

export default function HistoryCard({ data }) {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className="text-md gap-1 border-b-2 py-2 grid">
      <div className="font-semibold">
     
        {data.promotion.title}
      </div>
      <div className="">
        {
          data.totalTurnover && <ProgressBar targetAmount={data.promotion.turnOverAmount} doneAmount={data.totalTurnover} />
        }


        <div>
          <span className="font-bold text-yellow-600"> {
          selectedLanguage ==='en' ? "Status ":"স্ট্যাটাস "
        } </span>
          {
          data.totalTurnover ? ('Play More'):("OK")
        }
        </div>
        
      </div>
      <div className="text-gray-400 text-sm">
        {new Date(data.date).toDateString()}
      </div>
    </div>
  );
}

const ProgressBar = ({ targetAmount, doneAmount }) => {
  const percentageComplete = (doneAmount / targetAmount) * 100;

  return (
    <Box maxW="xl" mt={4}>
      <Text mb={2} fontSize="lg" fontWeight="bold">
        Progress: {percentageComplete.toFixed(2)}%
      </Text>
      <Text mb={2}>
        Complete Amount: {doneAmount} / Target Amount: {targetAmount}
      </Text>
      <Progress  hasStripe  value={percentageComplete} />
    </Box>
  );
};