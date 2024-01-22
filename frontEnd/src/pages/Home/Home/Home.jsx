import React from "react";
import GamesSection from "../GamesSection/GamesSection";
import ReferralsSection from "../ReferralsSection/ReferralsSection";
import Slider from "../Slider";
import FavoriteGameSection from "../FavoriteGameSection/FavoriteGameSection";
import FeaturesGameSection from "../FeaturesGameSection/FeaturesGameSection";



const Home = () => {
 
  return (

    <div>
      <Slider/>
      <GamesSection></GamesSection>
      <FavoriteGameSection></FavoriteGameSection>
      <FeaturesGameSection></FeaturesGameSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
