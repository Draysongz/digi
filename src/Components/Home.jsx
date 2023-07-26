import React from "react";
import Hero from "./Hero/Hero";
import WithSubnavigation from "./Navbar/WithSubnavigation";
import HeroC from "./HeroC/HeroC";

const Home = () => {
  return (
    <>
      <WithSubnavigation />
      <Hero />
      <HeroC/>

    </>
  );
};

export default Home;
