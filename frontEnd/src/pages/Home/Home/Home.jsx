import React from "react";
import GamesSection from "../GamesSection/GamesSection";
import ReferralsSection from "../ReferralsSection/ReferralsSection";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider/>
      
      <GamesSection></GamesSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
