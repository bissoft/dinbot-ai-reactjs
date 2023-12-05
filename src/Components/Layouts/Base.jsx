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
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isAuthenticated={props.isSignedIn} onLogout={props.signout} onLogin={props.signin} onRemove={props.removeLogo}/>
      </div>
      <div className={`main-content`}>
       <Header/>
        <Outlet/>
      </div>
    </div>
  );
}

export default Base;
