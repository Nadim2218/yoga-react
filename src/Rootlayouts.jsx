import React from "react";
import Header from "./components/layouts/Header";
import { Outlet } from "react-router-dom";

const Rootlayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Rootlayouts;
