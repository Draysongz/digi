import React from "react";
// import "./css/dashboard.css";
import Dash from "./Dash";
import { Flex } from "@chakra-ui/react";
import { SideBarFunc } from "./SideBarFunc";

const MainDashboard = () => {
  return (
    <>
      <Flex flexDir={["column", "column", "row"]}>
        <SideBarFunc />
        <Dash />
      </Flex>
    </>
  );
};

export default MainDashboard;
