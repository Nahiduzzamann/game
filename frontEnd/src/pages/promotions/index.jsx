import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";

const Promotions = () => {
  // Dummy data for each category
  const categories = [
    {
      title: "All",
      data: [
        { banner: "all1.jpg", title: "All Card 1", description: "Description 1" },
        { banner: "all2.jpg", title: "All Card 2", description: "Description 2" },
        // Add more data as needed
      ],
    },
    {
      title: "Sports",
      data: [
        { banner: "sports1.jpg", title: "Sports Card 1", description: "Sports Description 1" },
        { banner: "sports2.jpg", title: "Sports Card 2", description: "Sports Description 2" },
        // Add more data as needed
      ],
    },
    // Repeat the structure for other categories
    // ...
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="px-6 py-3">
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList
          mb="1em"
          className="flex gap-3 w-full md:flex-wrap overflow-x-scroll bg-white rounded-md p-2"
        >
          {categories.map((category) => (
            <Tab
              key={category.title}
              className="bg-gray-100 w-[150px] md:max-w-[150px] md:min-h-12 md:min-w-[220px] min-w-32 min-h-32 p-2 mb-2 md:mb-0"
              onClick={() => setSelectedCategory(category)}
            >
              <h2 className="text-md text-black">{category.title}</h2>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="bg-white rounded-md">
          {selectedCategory.data.map((card) => (
            <TabPanel key={card.title}>
              {/* Render card content using card.banner, card.title, card.description */}
              <div>
                <img src={card.banner} alt={card.title} className="w-full" />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Promotions;
