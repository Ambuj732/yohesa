import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboard from "../components/Dashboard/AdminDashbord";
import Sidebar from "../components/Dashboard/Sidebar";
const SidebarHome = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};
export default SidebarHome;
