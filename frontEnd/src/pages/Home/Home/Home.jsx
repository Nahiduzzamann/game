import React from "react";
import GamesSection from "../GamesSection/GamesSection";
import ReferralsSection from "../ReferralsSection/ReferralsSection";
import Slider from "../Slider";
import FavoriteGameSection from "../FavoriteGameSection/FavoriteGameSection";
import FeaturesGameSection from "../FeaturesGameSection/FeaturesGameSection";
import DownloadSection from "../Download/Download";
import LiveGames from "../LiveGames/LiveGames";



const Home = () => {
 
  return (

    <div>
      <Slider/>
      <GamesSection></GamesSection>
      <LiveGames></LiveGames>
      <FavoriteGameSection></FavoriteGameSection>
      <FeaturesGameSection></FeaturesGameSection>
      <DownloadSection></DownloadSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
