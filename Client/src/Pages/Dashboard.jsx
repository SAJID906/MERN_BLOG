import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get("tab");
    console.log("on location", searchParams);
    if (searchParams) {
      setTab(searchParams);
    }
  }, [location.search]);

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row ">
        <div className="md:w-56">
          {/* DashSide  */}
          <DashSidebar />
        </div>
        {/* DashProfile */}
        {tab === "profile" && <DashProfile />}
      </div>
    </>
  );
}

export default Dashboard;
