import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;