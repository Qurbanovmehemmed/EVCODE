import React from "react";
import Hero from "../components/hero/Hero";
import Awesome from "../components/awesome/Awesome";
import BestSellers from "../components/bestSellers/BestSellers";
import SubscribeAll from "../components/Subscribe/SubscribeAll";
import Creative from "../components/creative/Creative";

const Home = () => {
  return (
    <div>
      <Hero />
      <Awesome />
      <BestSellers />
      <SubscribeAll />
      <Creative/>
    </div>
  );
};

export default Home;
