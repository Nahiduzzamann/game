import React, { useEffect, useState } from "react";
import GamesSection from "../GamesSection/GamesSection";
import ReferralsSection from "../ReferralsSection/ReferralsSection";
import Slider from "../Slider";
import FavoriteGameSection from "../FavoriteGameSection/FavoriteGameSection";
import FeaturesGameSection from "../FeaturesGameSection/FeaturesGameSection";
import DownloadSection from "../Download/Download";
import LiveGames from "../LiveGames/LiveGames";
import Cricket from "../Cricket/Cricket";
import { Spinner } from "@chakra-ui/react";
import getSliderImage from "../../../module/getSliderImage";



const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSliderImages = async () => {
      try {
        const res = await getSliderImage();
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log('error');
      }
    };
    getSliderImages();
  }, []);
  return (

    <div>
      {
        data?.length >0 ? ( <Slider data={data}/>):(<div className="flex justify-center items-center w-full h-[200px]">
          <p>Loading banner... </p>
          <Spinner size='md' color="blue"></Spinner>
        </div>)
      }
     
      <GamesSection></GamesSection>
      <Cricket/>
      <LiveGames></LiveGames>
      <FavoriteGameSection></FavoriteGameSection>
      <FeaturesGameSection></FeaturesGameSection>
      <DownloadSection></DownloadSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
