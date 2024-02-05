import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DepositHistory from "./DepositHistory";
import WithdrawalHistory from "./WithdrawalHistory";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { AuthContext } from "../../providers/AuthProvider";
import getUserTurnoverHistory from "../../module/getUserTurnoverHistory";
export default function TurnOverHistory() {
  const { selectedLanguage } = useContext(AuthContext);
  const [completeData, setCompleteData] = useState(null);
  const [pendingData, setPendingData] = useState(null);
  // console.log(completeData, pendingData);
  useEffect(() => {
    getUserTurnoverHistory()
      .then((res) => {
        // console.log(res.data);
        let t = [];
        let f = [];
        res.data.map((d) => {
          if (d.completed) {
            t.push(d);
          } else {
            f.push(d);
          }
          setCompleteData(t);
          setPendingData(f);
        });
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div className="bg-gray-500 max-w-full overflow-scroll rounded-lg p-4 ">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
          {selectedLanguage === "en" ? "History" : "ইতিহাস"}
        </h1>
        <Tabs className="w-full overflow-x-scroll">
          <TabList className="text-gray-700">
            <Tab>
              <div className="flex gap-2 items-center font-medium text-md">
                <RiMoneyDollarCircleFill size={24} />
                Pending
              </div>
            </Tab>
            <Tab>
              <div className="flex gap-2 items-center font-medium text-md">
                <GiReceiveMoney size={24} />
                Complete
              </div>
            </Tab>
          </TabList>

          <TabPanels className="w-full">
            <TabPanel className="w-full">
              <DepositHistory data={pendingData}/>
            </TabPanel>
            <TabPanel>
              <WithdrawalHistory data={completeData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
