import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function DashSidebar() {
  //
  const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get("tab");
    if (searchParams) {
      setTab(searchParams);
    }
  }, [location.search]);
  return (
    <>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                icon={HiUser}
                active={tab === "profile"}
                label={"User"}
                className=""
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="cursor-pointer  hover:bg-dark"
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default DashSidebar;
