import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Outlet } from "react-router-dom";

const MainComponent = () => {
  const buttonArr = [
    {
      id: 1,
      label: "AddHealthData",
      path:"/"
    },
    {
      id: 2,
      label: "ShowHealthData",
      path:"/showData"
    },
    {
      id: 3,
      label: "AnalyticsData",
      path:"/anData"
    },
  ];

  return (
    <>
      <div>
        <header>
          <MenuBar buttonArr={buttonArr} />
        </header>
        <Outlet/>
      </div>
    </>
  );
};

export default MainComponent;
