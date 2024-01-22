import React from "react";
import GamesSection from "../GamesSection/GamesSection";
import ReferralsSection from "../ReferralsSection/ReferralsSection";
import Slider from "../Slider";
import FavoriteGameSection from "../FavoriteGameSection/FavoriteGameSection";



const Home = () => {
 
  return (

    <div>
      <Slider/>
      <GamesSection></GamesSection>
      <FavoriteGameSection></FavoriteGameSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
