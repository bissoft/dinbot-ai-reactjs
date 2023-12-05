import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function Base(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`main-content ${isSidebarOpen ? "" : "closed-sidebar"}`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Base;
