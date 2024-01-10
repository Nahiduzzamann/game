import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DepositHistory from "./DepositHistory";
import WithdrawalHistory from "./WithdrawalHistory";
import Transfer from "./Transfer";
import Rebate from "./Rebate";
import Bonus from "./Bonus";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";
import { MdOutlineAutorenew } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
export default function BetHistory() {
  const [selectedImage, setSelectedImage] = useState("");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("category");
    setCategory(JSON.parse(data));
  }, []);
  const handleImageClick = (name) => {
    setSelectedImage(name);
  };
  return (
    <div className="bg-gray-500 max-w-full overflow-scroll rounded-lg p-4 ">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
          History
        </h1>
        <Tabs className="w-full overflow-x-scroll">
          <TabList className="text-gray-700 w-full overflow-x-scroll">
            {category.map((doc, i) => (
              <Tab>
                <div className=" h-full  font-medium text-md">
                  <img className="h-5" src={doc?.subCategory[0].image_colored}/>
                  {doc.title}
                </div>
              </Tab>
            ))}

          </TabList>

          <TabPanels className="w-full">
            <TabPanel className="w-full">
              <DepositHistory />
            </TabPanel>
            <TabPanel>
              <WithdrawalHistory />
            </TabPanel>
            <TabPanel>
              <Transfer />
            </TabPanel>
            <TabPanel>
              <Rebate />
            </TabPanel>
            <TabPanel>
              <Bonus />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
