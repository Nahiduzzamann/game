import React from "react";
import GamesSection from "../GamesSection/GamesSection";
import Banner from "../Banner/Banner";
import ReferralsSection from "../ReferralsSection/ReferralsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GamesSection></GamesSection>
      <ReferralsSection></ReferralsSection>
    </div>
  );
};

export default Home;
