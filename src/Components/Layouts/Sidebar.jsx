import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

function Sidebar({
  isSidebarOpen,
  toggleSidebar,
  onLogin,
  onLogout,
  isAuthenticated,
}) {
  const navigate = useNavigate();
  // const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSubNavVisible, setSubNavVisible] = useState(false);

  const toggleSubNav = () => {
    setSubNavVisible(!isSubNavVisible);
  };

  const logoutUser = async () => {
    localStorage.removeItem("isSignedIn");
    sessionStorage.clear();
    window.location.reload(true);
  };
  return (
    <div
      className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
      id="sidebar"
    >
      <div className="container-fluid ">
        <div
          className="logo text-start mx-3"
          
          style={{
            padding: isSidebarOpen ? "10px 1px" : "18px 2px",
            cursor: "pointer",
          }}
        >
          <div
            className=" d-flex gap-2 "
            style={{ display: isSidebarOpen ? "block" : "none" }}
          >
            <div style={{ display: isSidebarOpen ? "block" : "none" }}>
              <img src="/Assets/dinebot-logo.png" width={45}  alt="logo" />
            </div>
            <div className="d-flex pt-1">
              <h2 style={{ display: isSidebarOpen ? "block" : "none" }}>
                {" "}
                <span className="dine">Dine</span>
                <span className="bot">Bot</span>{" "}
              </h2>
            </div>
          </div>

          <FaBars
            className="icon"
            color="#069AF3"
            onClick={toggleSidebar}
            size={28}
          />
        </div>
        <div className="side-btn ">
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/dashboard"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                {/* <AiOutlineCalendar
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                /> */}
                {/* <img
                  src="/Assets/dashboard-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                /> */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 6.5C2.5 5.43913 2.92143 4.42172 3.67157 3.67157C4.42172 2.92143 5.43913 2.5 6.5 2.5C7.56087 2.5 8.57828 2.92143 9.32843 3.67157C10.0786 4.42172 10.5 5.43913 10.5 6.5C10.5 7.56087 10.0786 8.57828 9.32843 9.32843C8.57828 10.0786 7.56087 10.5 6.5 10.5C5.43913 10.5 4.42172 10.0786 3.67157 9.32843C2.92143 8.57828 2.5 7.56087 2.5 6.5ZM13.5 17.5C13.5 16.4391 13.9214 15.4217 14.6716 14.6716C15.4217 13.9214 16.4391 13.5 17.5 13.5C18.5609 13.5 19.5783 13.9214 20.3284 14.6716C21.0786 15.4217 21.5 16.4391 21.5 17.5C21.5 18.5609 21.0786 19.5783 20.3284 20.3284C19.5783 21.0786 18.5609 21.5 17.5 21.5C16.4391 21.5 15.4217 21.0786 14.6716 20.3284C13.9214 19.5783 13.5 18.5609 13.5 17.5ZM21.5 6.5C21.5 4.614 21.5 3.672 20.914 3.086C20.328 2.5 19.386 2.5 17.5 2.5C15.614 2.5 14.672 2.5 14.086 3.086C13.5 3.672 13.5 4.614 13.5 6.5C13.5 8.386 13.5 9.328 14.086 9.914C14.672 10.5 15.614 10.5 17.5 10.5C19.386 10.5 20.328 10.5 20.914 9.914C21.5 9.328 21.5 8.386 21.5 6.5ZM10.5 17.5C10.5 15.614 10.5 14.672 9.914 14.086C9.328 13.5 8.386 13.5 6.5 13.5C4.614 13.5 3.672 13.5 3.086 14.086C2.5 14.672 2.5 15.614 2.5 17.5C2.5 19.386 2.5 20.328 3.086 20.914C3.672 21.5 4.614 21.5 6.5 21.5C8.386 21.5 9.328 21.5 9.914 20.914C10.5 20.328 10.5 19.386 10.5 17.5Z" stroke="#A3A3A3" stroke-width="1.5"/>
</svg>


                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Dashboard
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/dinemenu"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                {/* <BsCardChecklist
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                /> */}
                <img
                  src="/Assets/menu-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Menu
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/pos"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                {/* <BsBoxSeam
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                /> */}
                <img
                  src="/Assets/pos-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  POS
                </span>
              </button>
            </NavLink>
          }

          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/socialmedia"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/sm-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Social Media
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/feedback"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/feedback-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Feedbacks
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/analysis"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/analytic-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Analysis
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/subscription-packages"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/analytic-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Subscription Packages
                </span>
              </button>
            </NavLink>
          }
          {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/subscription-services"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/analytic-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                  className="nav-img"
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Subscription Services
                </span>
              </button>
            </NavLink>
          }
          <Dropdown show={isSubNavVisible}>
            <Dropdown.Toggle
              activeClassName="active"
              variant="none"
              style={{
                padding: isSidebarOpen ? "15px 30px" : "15px 20px",
                cursor: "pointer",
                color: "#A3A3A3",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "Roboto",
              }}
              id="dropdown-user"
              onClick={toggleSubNav}
            >
              <MdInsertChartOutlined
                // onClick={toggleSubNav}
                className=" icons"
                color="#A3A3A3"
                size={isSidebarOpen ? "22px" : "25px"}
              />
              <span
                style={{
                  display: isSidebarOpen ? "block" : "none",
                  marginLeft: "10px",
                }}
              >
                Users Management
              </span>
            </Dropdown.Toggle>

            {/* Sub-NavLink items */}
            <Dropdown.Menu
              show={isSubNavVisible}
              className={`fade ${isSubNavVisible ? "show" : "hide"}`}
            >
              <Dropdown.Item
                as={NavLink}
                to="/usermanagement/users"
                activeClassName="active"
                className="d-flex"
              >
                <MdInsertChartOutlined
                  // onClick={toggleSubNav}
                  className="icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                />
                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "#A3A3A3",
                    fontWeight: "500",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  Users
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/usermanagement/roles"
                activeClassName="active"
                className="d-flex"
              >
                <MdInsertChartOutlined
                  // onClick={toggleSubNav}
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                />
                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "#A3A3A3",
                    fontWeight: "500",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  Roles
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/usermanagement/permission"
                activeClassName="active"
                className="d-flex"
              >
                <MdInsertChartOutlined
                  // onClick={toggleSubNav}
                  className=" icons"
                  color="#A3A3A3"
                  size={isSidebarOpen ? "22px" : "25px"}
                />
                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "#A3A3A3",
                    fontWeight: "500",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  Permissions
                </span>
              </Dropdown.Item>
              {/* Add more NavLink items as needed */}
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ position: "absolute", bottom: "0" }}>
            <div style={{ position: "absolute", bottom: "0" }}>
              {
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/settings"
                  activeStyle={{ color: "#069AF3" }}
                >
                  <button
                    style={{
                      padding: isSidebarOpen ? "15px 30px" : "15px 20px",
                    }}
                  >
                    <img
                      src="/Assets/setting-icon.svg"
                      alt="dashboard"
                      width={isSidebarOpen ? "22px" : "25px"}
                    />

                    <span
                      style={{
                        display: isSidebarOpen ? "block" : "none",
                        marginLeft: "10px",
                      }}
                    >
                      Settings
                    </span>
                  </button>
                </NavLink>
              }
              {
                <NavLink
                  className="nav-link"
                  to=""
                  activeClassName="active"
                  activeStyle={{ color: "#069AF3" }}
                >
                  <button
                    style={{
                      padding: isSidebarOpen ? "15px 30px" : "15px 20px",
                    }}
                    onClick={logoutUser}
                  >
                    <img
                      src="/Assets/logout-icon.svg"
                      alt="dashboard"
                      width={isSidebarOpen ? "22px" : "25px"}
                    />

                    <span
                      style={{
                        display: isSidebarOpen ? "block" : "none",
                        marginLeft: "10px",
                      }}
                    >
                      Logout
                    </span>
                  </button>
                </NavLink>
              }
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Sidebar;
