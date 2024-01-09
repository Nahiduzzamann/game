import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import url from "../../../module";
import getCategory from "../../../module/getCategory";
const GamesSection = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const cats = async () => {
      try {
        const cat = await getCategory(url);
        setData(cat.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    //setData(cat);
    //console.log(cat);
  }, []);
  return (
    <div className="px-6 py-3">
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList mb="1em" className="flex flex-wrap bg-white rounded-md p-2">
          {data &&
            data?.map((data, i) => {
              return (
                <Tab key={i} className="w-1/2 md:w-auto mb-2 md:mb-0">
                  <h2 className="text-md text-black">{data?.title}</h2>
                </Tab>
              );
            })}
        </TabList>
        <TabPanels>
          {data &&
            data?.map((data, i) => (
              <TabPanel key={i}>
                <p>{i}</p>
              </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default GamesSection;
