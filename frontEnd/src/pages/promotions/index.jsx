import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import PromotionsCard from "../../components/PromotionsCard";

const Promotions = () => {
  // Dummy data for each category
  const categories = [
    {
      title: "All",
      data: [
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "All Card 1",
          description: "Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "All Card 2",
          description: "Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "All Card 1",
          description: "Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "All Card 2",
          description: "Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "All Card 1",
          description: "Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "All Card 2",
          description: "Description 2",
        },
        // Add more data as needed
      ],
    },
    {
      title: "Sports",
      data: [
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "Sports Card 1",
          description: "Sports Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        // Add more data as needed
      ],
    },
    {
      title: "Casino",
      data: [
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "Sports Card 1",
          description: "Sports Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        // Add more data as needed
      ],
    },
    {
      title: "Slots",
      data: [
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "Sports Card 1",
          description: "Sports Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        // Add more data as needed
      ],
    },
    {
      title: "Table Games",
      data: [
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320370a22ee7.jpg",
          title: "Sports Card 1",
          description: "Sports Description 1",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
        {
          banner: "https://dpf3hni0r872w.cloudfront.net/cms/undefined/image/en-mobile-6320399b0d638.jpg",
          title: "Sports Card 2",
          description: "Sports Description 2",
        },
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
          {categories.map((card) => (
            <TabPanel key={card.title}>
              {/* Render card content using card.banner, card.title, card.description */}
              <div>
              <img src='https://akm-media.9terawolf.com/images/babu/game_banner/rng.jpg'  className="w-full rounded-t-xl" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 ">
              {selectedCategory.data.map((card, i) => (
                <PromotionsCard key={i} banner={card.banner} title={card.title} description={card.description}></PromotionsCard>
              ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Promotions;
