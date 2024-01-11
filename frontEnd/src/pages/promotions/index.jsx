import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const Promotions = () => {
  return (
    <div className="px-6 py-3">
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList
          mb="1em"
          className="flex gap-3 w-full  md:flex-wrap overflow-x-scroll bg-white rounded-md p-2"
        >
          <Tab className="bg-gray-100 w-[150px] md:max-w-[150px] md:min-h-12 md:min-w-[220px] min-w-32 min-h-32 p-2 mb-2 md:mb-0">
            <h2 className="text-md text-black">All</h2>
          </Tab>
          <Tab className="bg-gray-100 w-[150px] md:max-w-[150px] md:min-h-12 md:min-w-[220px] min-w-32 min-h-32 p-2 mb-2 md:mb-0">
            <h2 className="text-md text-black">Sports</h2>
          </Tab>
        </TabList>
        <TabPanels className="bg-white rounded-md  ">
          <TabPanel>All Card</TabPanel>
          <TabPanel>Sports Card</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Promotions;
