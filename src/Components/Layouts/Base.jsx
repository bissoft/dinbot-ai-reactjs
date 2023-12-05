import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from 'react-router-dom'
function Base(props) {

 
  return (
    <div className="dashboard-container">
      <div className="sidebar-container"> 
        <Sidebar isAuthenticated={props.isSignedIn} onLogout={props.signout} onLogin={props.signin} onRemove={props.removeLogo}/>
      </div>
      <div className={`main-content`}>
       <Header isAuthenticated={props.isSignedIn} onLogout={props.signout} onLogin={props.signin} onRemove={props.removeLogo}/>
        <Outlet/>
      </div>
    </div>
  );
}

export default Base;