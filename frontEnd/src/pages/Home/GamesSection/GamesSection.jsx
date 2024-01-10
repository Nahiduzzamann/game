import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import url from "../../../module";
import getCategory from "../../../module/getCategory";
const GamesSection = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const [dataSubCategory, setDataSubCategory] = useState(null);
  // console.log(dataSubCategory);

  useEffect(() => {
    const cats = async () => {
      try {
        const cat = await getCategory(url);
        setDataCategory(cat.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    //setData(cat);
    //console.log(cat);
  }, []);

  useEffect(() => {
   if(dataCategory){
    handleSubCategory(0)
   }
  }, [dataCategory]);

  const handleSubCategory = (index = 0) => {
    const category = dataCategory[index];
    const subCategory = category.subCategory;
    setDataSubCategory(subCategory);
  };

  return (
    <div className="px-6 py-3">
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList mb="1em" className="flex gap-3 w-full overflow-x-scroll bg-white rounded-md p-2">
          {dataCategory &&
            dataCategory?.map((data, i) => {
              return (
                <Tab
                  onClick={() => handleSubCategory(i)}
                  key={i}
                  className="bg-gray-100 w-[150px] md:min-h-12 md:min-w-[220px] min-w-32 min-h-32 p-2 mb-2 md:mb-0"
                >
                  <h2 className="text-md text-black">{data?.title}</h2>
                </Tab>
              );
            })}
        </TabList>
        <TabPanels className="bg-white rounded-md  overflow-scroll">
          {dataCategory &&
            dataCategory?.map((data, i) => (
              <TabPanel key={i}>
                <div className="grid grid-cols-3 ">
                  {dataSubCategory?.map((data, i) => (
                    <div key={i} className="p-2 bg-gray-100 text-white m-2 shadow shadow-gray-200 rounded-md">
                      <img src={data?.image_colored}></img>
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
