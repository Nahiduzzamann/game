import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import url from "../../../module";
import getCategory from "../../../module/getCategory";
import { useNavigate } from "react-router-dom";

const GamesSection = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const [dataSubCategory, setDataSubCategory] = useState(null);
  // console.log(dataSubCategory);
  const navigate = useNavigate();

  useEffect(() => {
    const cats = () => {
      try {
        const cat = localStorage.getItem("category");
        setDataCategory(JSON.parse(cat));
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    //setData(cat);
    //console.log(cat);
  }, []);

  useEffect(() => {
    if (dataCategory) {
      handleSubCategory(0);
    }
  }, [dataCategory]);

  const handleSubCategory = (index = 0) => {
    const category = dataCategory[index];
    const subCategory = category.subCategory;
    setDataSubCategory(subCategory);
  };

  return (
    <div className="px-6 py-3">
      <Tabs isFitted variant="" colorScheme="blue">
        <TabList mb="1em" className="w-full bg-[#EBEBEB]  pt-4">
          <div className="grid grid-cols-4 lg:gap-12 md:gap-10 gap-2 w-full">
            {dataCategory &&
              dataCategory?.map((data, i) => {
                return (
                  <Tab
                    onClick={() => handleSubCategory(i)}
                    key={i}
                    style={{ padding: "0px", borderRadius:'10%' }}
                    className="bg-[#D9D9D9]  w-full border-black shadow-md shadow-black relative "
                  >
                    <img
                    style={{ padding: "0px", borderRadius:'10%' }}
                      src={`./casino${i+1}.png`}
                      alt="Your Image"
                      className="object-cover object-center w-full h-full "
                    />
                    <div style={{ padding: "0px", borderRadius:'10%' }} className="flex items-end justify-center absolute w-full h-full  bg-gradient-to-b  from-[#fffcfc00] via-transparent to-[#000000]">
                      <h2 className="md:text-2xl text-sm font-semibold text-white pb-2">{data?.title}</h2>
                    </div>
                  </Tab>
                );
              })}
          </div>
        </TabList>
        <TabPanels className="bg-white rounded-md  ">
          {dataCategory &&
            dataCategory?.map((data, i) => (
              <TabPanel key={i}>
                <div className="grid cursor-pointer md:grid-cols-4 xl:grid-cols-8 grid-cols-2">
                  {dataSubCategory?.map((data, j) => (
                    <div
                      onClick={() => {
                        navigate(`/games/${data.slag}/${i}`);
                      }}
                      key={j}
                      className="p-2 flex gap-2 items-center bg-gray-700 hover:bg-blue-200 text-white m-2 shadow shadow-gray-200 rounded-md"
                    >
                      <img src={`${url}${data?.icon}`}></img>
                      <div className="text-lg">{data.title}</div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default GamesSection;
