import React from "react";
import WithSubnavigation from "../Navbar/WithSubnavigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <WithSubnavigation />
      <main>{children}</main>
    </>
  );
};
export default Layout;
