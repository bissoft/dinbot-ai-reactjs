import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCardChecklist } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { MdInsertChartOutlined } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSubNavVisible, setSubNavVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSubNav = () => {
    setSubNavVisible(!isSubNavVisible);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="container-fluid ">
        <div className="logo text-start mx-3" style={{ padding: isSidebarOpen?'10px 1px' :'18px 2px',cursor:"pointer" }}>
          <div className=" d-flex gap-2 " style={{ display: isSidebarOpen ? 'block' : 'none' }}>
          <div style={{ display: isSidebarOpen ? 'block' : 'none' }}>
           <img  src="/Assets/dinebotlogo.svg" alt="logo" /> 
          </div>
          <div className="d-flex pt-1">
           <h2 style={{ display: isSidebarOpen ? 'block' : 'none' }}> <span className="dine">Dine</span><span className="bot">Bot</span> </h2>
          </div>
          </div>
          
          <FaBars className="icon" color="#069AF3" onClick={toggleSidebar} size={28}  />
        
        </div>
        <div className="side-btn ">
        { (
            <NavLink className="nav-link" activeClassName="active" to="/dashboard" activeStyle={{ color: "#069AF3" }}>
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
            <Dropdown show={isSubNavVisible} >
            <Dropdown.Toggle
           activeClassName="active"
           
              variant="none"
              style={{ padding: isSidebarOpen ? '15px 30px' : '15px 20px', cursor: "pointer" , color: "#A3A3A3",fontWeight:'500' ,fontSize:'14px',fontFamily:'Roboto'}}
              id="dropdown-user"
              onClick={toggleSubNav}
            >
              <MdInsertChartOutlined
              // onClick={toggleSubNav}
                className=" icons"
                color="#A3A3A3"
                size={isSidebarOpen ? '22px' : '25px'}
              />
              <span style={{ display: isSidebarOpen ? "block" : "none", marginLeft: '10px' }}>
                Users Management
              </span>
            </Dropdown.Toggle>

            {/* Sub-NavLink items */}
              <Dropdown.Menu show={isSubNavVisible} className={`fade ${isSubNavVisible ? "show" : "hide"}`}>
                <Dropdown.Item as={NavLink} to="/usermanagement/users" activeClassName="active" className="d-flex" >
                <MdInsertChartOutlined
              // onClick={toggleSubNav}
                className="icons"
                color="#A3A3A3"
                size={isSidebarOpen ? '22px' : '25px'}
              />
                  <span style={{ display: isSidebarOpen ? "block" : "none", marginLeft: '10px', cursor: "pointer" , color: "#A3A3A3",fontWeight:'500' ,fontSize:'14px',fontFamily:'Roboto' }}>
                Users
              </span>
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/usermanagement/roles" activeClassName="active" className="d-flex" >
                <MdInsertChartOutlined
              // onClick={toggleSubNav}
                className=" icons"
                color="#A3A3A3"
                size={isSidebarOpen ? '22px' : '25px'}
              />
                  <span style={{ display: isSidebarOpen ? "block" : "none", marginLeft: '10px',cursor: "pointer" , color: "#A3A3A3",fontWeight:'500' ,fontSize:'14px',fontFamily:'Roboto' }}>
                Roles
              </span>
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/usermanagement/permission" activeClassName="active" className="d-flex" >
                <MdInsertChartOutlined
              // onClick={toggleSubNav}
                className=" icons"
                color="#A3A3A3"
                size={isSidebarOpen ? '22px' : '25px'}
              />
                  <span style={{ display: isSidebarOpen ? "block" : "none", marginLeft: '10px' , cursor: "pointer" , color: "#A3A3A3",fontWeight:'500' ,fontSize:'14px',fontFamily:'Roboto'}}>
                Permissions
              </span>
                </Dropdown.Item>
                {/* Add more NavLink items as needed */}
              </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
