import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useDashboardData } from "./APIs/dashboardApi";
const Body = () => {

  const {getDashboardData} = useDashboardData();
  useEffect(() => {
   getDashboardData();
  }, []);

  return (
    <>
      <div className=" pt-16 bg-slate-100">
        <h1>This is Body section</h1>
        <Dashboard />
      </div>
    </>
  );
};
export default Body;
