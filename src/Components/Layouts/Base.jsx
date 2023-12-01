import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from 'react-router-dom'
function Base(props) {

 
  return (
    <div className="dashboard-container">
      <div className="sidebar-container"> 
        <Sidebar />
      </div>
      <div className={`main-content`}>
       <Header/>
        <Outlet/>
      </div>
    </div>
  );
}

export default Base;