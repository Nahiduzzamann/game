import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const GamesSection = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Cricket</Tab>
          <Tab>Casino</Tab>
          <Tab>Slot</Tab>
          <Tab>Table</Tab>
          <Tab>Sports</Tab>
          <Tab>Fishing</Tab>
          <Tab>Crash</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>fdvs!</p>
          </TabPanel>
          <TabPanel>
            <p>sdvfedfs!</p>
          </TabPanel>
          <TabPanel>
            <p>sfedfwsa!</p>
          </TabPanel>
          <TabPanel>
            <p>edfvedfswed!</p>
          </TabPanel>
          <TabPanel>
            <p>egfesdgrdfe4rf!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default GamesSection;
