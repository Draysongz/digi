import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import WithSubnavigation from "./Navbar/WithSubnavigation";

const Home = () => {
  return (
    <>
      <WithSubnavigation />
      <Hero />

      <div className="Container">
        <ul>
          <li>
            <Link to="/options">Options page</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
