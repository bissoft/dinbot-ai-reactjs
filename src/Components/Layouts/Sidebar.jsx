import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCardChecklist } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { MdInsertChartOutlined } from "react-icons/md";





// import { IoSettingsOutline } from 'react-icons/io5'

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="container-fluid ">
        <div className="logo   text-start " style={{ padding: isSidebarOpen?'12px 20px' :'12px 25px',cursor:"pointer" }}>
          <div className=" d-flex" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
          <div style={{ display: isSidebarOpen ? 'block' : 'none' }}>
           <img  src="/Assets/dinebotlogo.svg" alt="logo" /> 
          </div>
          <div className="d-flex align-items-center" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
           <h2> <span className="dine">Dine</span> <span className="bot">Bot</span> </h2>
          </div>
          </div>
          <FaBars className="icon" color="#069AF3" onClick={toggleSidebar} size={25}  />
        </div>
        <div className="side-btn ">
        { (
            <NavLink className="nav-link" activeClassName="active" to="/" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <AiOutlineCalendar
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
              
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Dashboard
                </span>
              </button>
            </NavLink>
          )}
          { (
            <NavLink className="nav-link" activeClassName="active" to="/dinemenu" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <BsCardChecklist
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
              
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Menu
                </span>
              </button>
            </NavLink>
          )}
          { (
            <NavLink className="nav-link" activeClassName="active" to="/pos" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <BsBoxSeam
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
              
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  POS
                </span>
              </button>
            </NavLink>
          )}
 
 { (
            <NavLink className="nav-link" activeClassName="active" to="/socialmedia" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <LuCalendarDays
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
              
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Social Media
                </span>
              </button>
            </NavLink>
          )}
          { (
            <NavLink className="nav-link" activeClassName="active" to="/feedback" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <AiOutlineCalendar
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
                
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Feedbacks
                </span>
              </button>
            </NavLink>
          )}
           { (
            <NavLink className="nav-link" activeClassName="active" to="/analysis" activeStyle={{ color: "#069AF3" }}>
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 20px' }}>
                <MdInsertChartOutlined
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
              
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Analysis
                </span>
              </button>
            </NavLink>
          )}
          {/* {(
            <NavLink className="nav-link" activeClassName="active" to="/setting">
              <button style={{ padding: isSidebarOpen?'15px 30px' :'15px 10px' }}>
                <IoSettingsOutline
                 color="#A3A3A3"
                  // className=" pb-1"
                  size={isSidebarOpen ? '22px' : '25px'}
                />
                &nbsp;
                <span style={{ display: isSidebarOpen ? "block" : "none" ,marginLeft: '10px' }}>
                  Setting
                </span>
              </button>
            </NavLink>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
