import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import GameHistory from "./GameHistory";
import { AuthContext } from "../../providers/AuthProvider";

export default function BetHistory() {
  const { selectedLanguage } = useContext(AuthContext);
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
    <div className="bg-gray-500 max-w-full  rounded-lg p-4 ">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
          
          {
          selectedLanguage ==='en' ? "History":"ইতিহাস"
        }
        </h1>
        <Tabs className="w-full  ">
          <div className="w-full overflow-x-auto">
            <TabList className="text-gray-700 w-full  ">
              {category.map((doc, i) => (
                <Tab key={i}>
                  <div className=" h-full  font-medium text-md">
                    <img
                      className="h-5"
                      src={doc?.subCategory[0]?.image_colored}
                    />
                    {doc.title}
                  </div>
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className="w-full">
            {category.map((doc, i) => (
              <TabPanel key={i} className="w-full">
                <GameHistory index={i} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
