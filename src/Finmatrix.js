import React from "react";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getScreenSize } from "./Slices/screenSizeSlice";
// import { useWindowSize } from "./Components/CustomHooks/useWindowSize";
import { useWindowSize } from "./Components/CustomHooks/useWindowSize";

const FinMatrix = () => {

useWindowSize();

  return (
    <div>
      <div className="fixed">
        <Header />
      </div>
      <div className="flex pt-16">
        <SideMenu />
        <div className="sm:ml-52 p-4 w-full pl-8 bg-slate-50"><Outlet/></div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default FinMatrix;
