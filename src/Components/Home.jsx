import React from "react";
import Hero from "./Hero/Hero";
import WithSubnavigation from "./Navbar/WithSubnavigation";

const Home = () => {
  return (
    <>
      <WithSubnavigation />
      <Hero />
    </>
  );
};

export default Home;
