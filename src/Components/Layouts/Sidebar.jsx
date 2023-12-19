import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
// import { FaCaretDown } from "react-icons/fa";
import { googleLogout } from "@react-oauth/google";
function Sidebar({
  isSidebarOpen,
  toggleSidebar,
  // onLogin,
  // onLogout,
  // isAuthenticated,
}) {
  const permissions = sessionStorage.getItem("permission");

  const navigate = useNavigate();
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavVisible(!isSubNavVisible);
  };
  const handleDropdownItemClick = () => {
    setIsSubNavVisible(false); // Close the dropdown menu when a dropdown item is clicked
  };
  // const logoutUser = async () => {
  //   localStorage.removeItem("isSignedIn");
  //   sessionStorage.clear();
  //   localStorage.clear();

  //   window.location.reload(true);
  //   navigate("/");
  // };
  const handleLogout = () => {
    // Update local storage and state on logout
    localStorage.setItem("isSignedIn",false);
    localStorage.removeItem("email_verified");
    sessionStorage.clear()
    // setIsSignedIn(false);
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
            padding: isSidebarOpen ? "10px 1px" : "13px 0px",
            cursor: "pointer",
          }}
        >
          <div
            className=" d-flex gap-2 "
            style={{ display: isSidebarOpen ? "block" : "none" }}
          >
            <div style={{ display: isSidebarOpen ? "block" : "none" }}>
              <img src="/Assets/dinebot-logo.png" width={45} alt="logo" />
            </div>
            <div className="d-flex pt-1">
              <h2 style={{ display: isSidebarOpen ? "block" : "none" }}>
                {" "}
                <span className="dine">Dine</span>
                <span className="bot">Bot</span>{" "}
              </h2>
            </div>
          </div>

          {isSidebarOpen ? (
            <>
              <FaBars
                className="icon"
                color="#069AF3"
                onClick={toggleSidebar}
                size={28}
              />
            </>
          ) : (
            <>
              <img
                src="/Assets/dinebot-logo.png"
                onClick={toggleSidebar}
                width={45}
                alt="logo"
              />
            </>
          )}
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
                <img
                  src="/Assets/dashboard-icon.svg"
                  alt="dashboard"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

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
                  alt="menu"
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
                  alt="pos"
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
                  alt="social-media"
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
                  alt="feedback"
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
                  alt="analysis"
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
          {/* {
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/restaurant-list"
              activeStyle={{ color: "#069AF3" }}
            >
              <button
                style={{ padding: isSidebarOpen ? "15px 30px" : "15px 20px" }}
              >
                <img
                  src="/Assets/analytic-icon.svg"
                  alt="restaurant list"
                  width={isSidebarOpen ? "22px" : "25px"}
                />

                <span
                  style={{
                    display: isSidebarOpen ? "block" : "none",
                    marginLeft: "10px",
                  }}
                >
                  Restaurant List
                </span>
              </button>
            </NavLink>
          } */}
          {permissions?.includes("subscription-package-show") && (
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
                  alt="subscription-package"
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
          )}
          {permissions?.includes("subscription-service-show") && (
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
                  alt="subscription-service"
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
          )}
          {permissions?.includes(
            "user-show" || "role-show" || "permission-show"
          ) && (
            <Dropdown
              show={isSubNavVisible}
              onClose={() => setIsSubNavVisible(false)}
            >
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

              <Dropdown.Menu
                show={isSubNavVisible}
                className={`fade ${isSubNavVisible ? "show" : "hide"}`}
                style={{
                  marginTop: isSidebarOpen ? "" : "-80px",
                  marginLeft: isSidebarOpen ? "" : "83px",
                }}
              >
                {permissions?.includes("user-show") && (
                  <Dropdown.Item
                    as={NavLink}
                    to="/usermanagement/users"
                    activeClassName="active"
                    className="d-flex"
                    onClick={handleDropdownItemClick}
                  >
                    <MdInsertChartOutlined
                      className="icons"
                      color="#A3A3A3"
                      size={isSidebarOpen ? "22px" : "25px"}
                    />
                    <span
                      style={{
                        // display: isSidebarOpen ? "block" : "none",
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
                )}
                {permissions?.includes("role-show") && (
                  <Dropdown.Item
                    as={NavLink}
                    to="/usermanagement/roles"
                    activeClassName="active"
                    className="d-flex"
                    onClick={handleDropdownItemClick}
                  >
                    <MdInsertChartOutlined
                      className=" icons"
                      color="#A3A3A3"
                      size={isSidebarOpen ? "22px" : "25px"}
                    />
                    <span
                      style={{
                        // display: isSidebarOpen ? "block" : "none",
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
                )}
                {permissions?.includes("permission-show") && (
                  <Dropdown.Item
                    as={NavLink}
                    to="/usermanagement/permission"
                    activeClassName="active"
                    className="d-flex"
                    onClick={handleDropdownItemClick}
                  >
                    <MdInsertChartOutlined
                      className=" icons"
                      color="#A3A3A3"
                      size={isSidebarOpen ? "22px" : "25px"}
                    />
                    <span
                      style={{
                        // display: isSidebarOpen ? "block" : "none",
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
                )}
              </Dropdown.Menu>
            </Dropdown>
          )}

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
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                      stroke="#A3A3A3"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.765 1.152C12.398 1 11.932 1 11 1C10.068 1 9.60196 1 9.23496 1.152C8.99214 1.25251 8.77151 1.3999 8.58569 1.58572C8.39986 1.77155 8.25248 1.99218 8.15196 2.235C8.05996 2.458 8.02296 2.719 8.00896 3.098C8.00273 3.37199 7.92696 3.6399 7.78877 3.87657C7.65059 4.11324 7.45451 4.31091 7.21896 4.451C6.97986 4.58504 6.71061 4.6561 6.4365 4.6575C6.16239 4.6589 5.89242 4.59059 5.65196 4.459C5.31596 4.281 5.07296 4.183 4.83196 4.151C4.30628 4.08187 3.77466 4.22431 3.35396 4.547C3.03996 4.79 2.80596 5.193 2.33996 6C1.87396 6.807 1.63996 7.21 1.58896 7.605C1.5546 7.86545 1.57188 8.13012 1.63983 8.38389C1.70778 8.63767 1.82505 8.87556 1.98496 9.084C2.13296 9.276 2.33996 9.437 2.66096 9.639C3.13396 9.936 3.43796 10.442 3.43796 11C3.43796 11.558 3.13396 12.064 2.66096 12.36C2.33996 12.563 2.13196 12.724 1.98496 12.916C1.82505 13.1244 1.70778 13.3623 1.63983 13.6161C1.57188 13.8699 1.5546 14.1345 1.58896 14.395C1.64096 14.789 1.87396 15.193 2.33896 16C2.80596 16.807 3.03896 17.21 3.35396 17.453C3.5624 17.6129 3.8003 17.7302 4.05407 17.7981C4.30784 17.8661 4.57251 17.8834 4.83296 17.849C5.07296 17.817 5.31596 17.719 5.65196 17.541C5.89242 17.4094 6.16239 17.3411 6.4365 17.3425C6.71061 17.3439 6.97986 17.415 7.21896 17.549C7.70196 17.829 7.98896 18.344 8.00896 18.902C8.02296 19.282 8.05896 19.542 8.15196 19.765C8.25248 20.0078 8.39986 20.2284 8.58569 20.4143C8.77151 20.6001 8.99214 20.7475 9.23496 20.848C9.60196 21 10.068 21 11 21C11.932 21 12.398 21 12.765 20.848C13.0078 20.7475 13.2284 20.6001 13.4142 20.4143C13.6001 20.2284 13.7474 20.0078 13.848 19.765C13.94 19.542 13.977 19.282 13.991 18.902C14.011 18.344 14.298 17.828 14.781 17.549C15.0201 17.415 15.2893 17.3439 15.5634 17.3425C15.8375 17.3411 16.1075 17.4094 16.348 17.541C16.684 17.719 16.927 17.817 17.167 17.849C17.4274 17.8834 17.6921 17.8661 17.9459 17.7981C18.1996 17.7302 18.4375 17.6129 18.646 17.453C18.961 17.211 19.194 16.807 19.66 16C20.126 15.193 20.36 14.79 20.411 14.395C20.4453 14.1345 20.428 13.8699 20.3601 13.6161C20.2921 13.3623 20.1749 13.1244 20.015 12.916C19.867 12.724 19.66 12.563 19.339 12.361C19.1047 12.2186 18.9105 12.019 18.7746 11.7809C18.6386 11.5428 18.5655 11.2741 18.562 11C18.562 10.442 18.866 9.936 19.339 9.64C19.66 9.437 19.868 9.276 20.015 9.084C20.1749 8.87556 20.2921 8.63767 20.3601 8.38389C20.428 8.13012 20.4453 7.86545 20.411 7.605C20.359 7.211 20.126 6.807 19.661 6C19.194 5.193 18.961 4.79 18.646 4.547C18.4375 4.38709 18.1996 4.26981 17.9459 4.20187C17.6921 4.13392 17.4274 4.11664 17.167 4.151C16.927 4.183 16.684 4.281 16.347 4.459C16.1066 4.59042 15.8368 4.65862 15.5629 4.65722C15.289 4.65582 15.0199 4.58486 14.781 4.451C14.5454 4.31091 14.3493 4.11324 14.2112 3.87657C14.073 3.6399 13.9972 3.37199 13.991 3.098C13.977 2.718 13.941 2.458 13.848 2.235C13.7474 1.99218 13.6001 1.77155 13.4142 1.58572C13.2284 1.3999 13.0078 1.25251 12.765 1.152Z"
                      stroke="#A3A3A3"
                      stroke-width="1.5"
                    />
                  </svg>

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
                to="/"
                activeClassName="active"
                activeStyle={{ color: "#069AF3" }}
              >
                <button
                  style={{
                    padding: isSidebarOpen ? "15px 30px" : "15px 20px",
                  }}
                  onClick={handleLogout}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.945 0.25C12.578 0.25 11.475 0.25 10.608 0.367C9.70796 0.487 8.94996 0.747 8.34796 1.348C7.82396 1.873 7.55796 2.518 7.41896 3.276C7.28396 4.013 7.25796 4.914 7.25196 5.996C7.2509 6.19491 7.3289 6.3861 7.46881 6.5275C7.60871 6.6689 7.79905 6.74894 7.99796 6.75C8.19688 6.75106 8.38806 6.67306 8.52947 6.53316C8.67087 6.39326 8.7509 6.20291 8.75196 6.004C8.75796 4.911 8.78596 4.136 8.89396 3.547C8.99896 2.981 9.16596 2.652 9.40896 2.409C9.68596 2.132 10.075 1.952 10.809 1.853C11.564 1.752 12.565 1.75 14 1.75H15C16.436 1.75 17.437 1.752 18.192 1.853C18.926 1.952 19.314 2.133 19.592 2.409C19.868 2.686 20.048 3.074 20.147 3.809C20.249 4.563 20.25 5.565 20.25 7V15C20.25 16.435 20.249 17.436 20.147 18.192C20.048 18.926 19.868 19.314 19.591 19.591C19.314 19.868 18.926 20.048 18.192 20.147C17.437 20.248 16.436 20.25 15 20.25H14C12.565 20.25 11.564 20.248 10.808 20.147C10.075 20.048 9.68596 19.867 9.40896 19.591C9.16596 19.347 8.99896 19.019 8.89396 18.453C8.78596 17.864 8.75796 17.089 8.75196 15.996C8.75144 15.8975 8.73152 15.8001 8.69334 15.7093C8.65517 15.6185 8.59948 15.5361 8.52947 15.4668C8.45945 15.3976 8.37648 15.3428 8.28528 15.3056C8.19409 15.2684 8.09646 15.2495 7.99796 15.25C7.89947 15.2505 7.80205 15.2704 7.71126 15.3086C7.62046 15.3468 7.53808 15.4025 7.46881 15.4725C7.39953 15.5425 7.34473 15.6255 7.30752 15.7167C7.27032 15.8079 7.25144 15.9055 7.25196 16.004C7.25796 17.086 7.28396 17.987 7.41896 18.724C7.55896 19.482 7.82396 20.127 8.34896 20.652C8.94996 21.254 9.70896 21.512 10.609 21.634C11.475 21.75 12.578 21.75 13.945 21.75H15.055C16.423 21.75 17.525 21.75 18.392 21.634C19.292 21.512 20.05 21.254 20.652 20.652C21.254 20.05 21.512 19.292 21.634 18.392C21.75 17.525 21.75 16.422 21.75 15.055V6.945C21.75 5.578 21.75 4.475 21.634 3.608C21.513 2.708 21.254 1.95 20.652 1.348C20.05 0.746 19.292 0.488 18.392 0.367C17.525 0.25 16.422 0.25 15.055 0.25H13.945Z"
                      fill="#A3A3A3"
                    />
                    <path
                      d="M13.9999 10.25C14.1989 10.25 14.3896 10.329 14.5303 10.4697C14.6709 10.6103 14.7499 10.8011 14.7499 11C14.7499 11.1989 14.6709 11.3897 14.5303 11.5303C14.3896 11.671 14.1989 11.75 13.9999 11.75H3.02695L4.98795 13.43C5.13912 13.5594 5.23269 13.7436 5.24807 13.942C5.26344 14.1404 5.19937 14.3368 5.06995 14.488C4.94052 14.6392 4.75634 14.7327 4.55793 14.7481C4.35952 14.7635 4.16312 14.6994 4.01195 14.57L0.511947 11.57C0.429613 11.4996 0.363509 11.4122 0.318184 11.3138C0.272859 11.2154 0.24939 11.1083 0.24939 11C0.24939 10.8917 0.272859 10.7846 0.318184 10.6862C0.363509 10.5878 0.429613 10.5004 0.511947 10.43L4.01195 7.43C4.0868 7.36591 4.17354 7.3172 4.26722 7.28664C4.3609 7.25607 4.45969 7.24426 4.55793 7.25188C4.65617 7.25949 4.75196 7.28638 4.83981 7.33101C4.92766 7.37565 5.00586 7.43714 5.06995 7.512C5.13403 7.58685 5.18275 7.67359 5.21331 7.76727C5.24387 7.86095 5.25568 7.95973 5.24807 8.05798C5.24045 8.15622 5.21356 8.25201 5.16893 8.33986C5.1243 8.42771 5.0628 8.50591 4.98795 8.57L3.02795 10.25H13.9999Z"
                      fill="#A3A3A3"
                    />
                  </svg>

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
      </div>{" "}
    </div>
  );
}
export default Sidebar;
