import React, { useState } from "react";
import "./App.css";
import MenuBar from "./MenuBar/MenuBar";
import AddHealthData from "./componenet/AddHealthData/AddHealthData";
import ShowHealthData from "./componenet/ShowHealthData/ShowHealthData";
import AnalyticsData from "./componenet/AnalyticsData/AnalyticsData";
import { MainContextWrapper } from "./store/mainContext/mainContext";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";

function App() {

  const[loadComponent, setLoadComponent] = useState(<AddHealthData/>);


  const router = createBrowserRouter([{
    path:"/",
    element: <MainComponent/>,
    children: [
      {
        path: "/",
        element:<AddHealthData/>,
      },
      {
        path: "/showData",
        element:<ShowHealthData/>,
      },
      {
        path: "/anData",
        element:<AnalyticsData/>,
      }
    ],
  }]);

  return (

    
   <MainContextWrapper>
     {/* <div>
      <MenuBar buttonArr={buttonArr} />
      {loadComponent}
    </div> */}
   <div>
    <RouterProvider router={router} />
    </div>
   </MainContextWrapper>
  );
}

export default App;
