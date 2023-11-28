import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Base(props) {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container"> 
        <Sidebar />
      </div>
      <div className="main-content">
       <Header/>
        {props.children}
      </div>
    </div>
  );
}

export default Base;