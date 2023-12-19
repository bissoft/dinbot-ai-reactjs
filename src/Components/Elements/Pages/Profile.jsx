import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Reviews from "../Reviews";
import GoodReviews from "../GoodReviews";
import BadReviews from "../BadReviews";
import Suggestions from "../Suggestions";

function Profile() {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  return (
    <div className="profile feedback">
      <div className="container-fluid py-2">
        <div className="profile-container mt-4">
          <h2>Restaurant Name</h2>
        </div>
        <div className="row">
          <div
            className={
              activeTab === "PopularDishes"
                ? "col-md-10"
                : "" || activeTab === "Reviews"
                ? "col-md-8"
                : "" || activeTab === "Profile"
                ? "col-md-12"
                : ""
            }
          >
            <div className="row">
              {/* <div className="col-md-12"> */}
              <Tabs
                // defaultActiveKey="Reviews"
                defaultActiveKey="Profile"
                id="uncontrolled-tab-example"
                className="mb-3 mt-4"
                activeKey={activeTab}
                onSelect={handleTabChange}
              >
                <Tab eventKey="Profile" title="Profile">
                  <div className="restaurant-details-container py-5">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="profile-img d-flex align-items-center my-2">
                          <img src="/Assets/Image 1.png" alt="avatar" />
                          <div className="profile-name mx-4">
                            <h3>Restaurant</h3>
                            <p>Restaurant@gmail.com</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Form>
                              <FloatingLabel
                                controlId="restaurant-name"
                                label="Restaurant's Name"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Restaurant's Name"
                                />
                              </FloatingLabel>
                            </Form>
                          </div>
                          <div className="col-md-6">
                            <Form>
                              <FloatingLabel
                                controlId="state"
                                label="State"
                                className="mb-3"
                              >
                                <Form.Control type="text" placeholder="State" />
                              </FloatingLabel>
                            </Form>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Form>
                              <FloatingLabel
                                controlId="city"
                                label="City"
                                className="mb-3"
                              >
                                <Form.Control type="text" placeholder="City" />
                              </FloatingLabel>
                            </Form>
                          </div>
                          <div className="col-md-6">
                            <Form>
                              <FloatingLabel
                                controlId="zip-code"
                                label="Zip Code"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Zip Code"
                                />
                              </FloatingLabel>
                            </Form>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Form>
                              <FloatingLabel
                                controlId="address"
                                label="Address"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Address"
                                />
                              </FloatingLabel>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="map">
                          <h6>Area Selection</h6>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            // width="600"
                            // height="450"
                            frameBorder="0"
                            style={{
                              border: 0,
                              height: "300px",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="PopularDishes" title="Popular Dishes">
                  <Suggestions />
                </Tab>
                <Tab eventKey="Reviews" title="Reviews">
                  <Reviews />
                </Tab>
                <Tab eventKey="Suggestions" title="Suggestions">
                  {/* <Suggestions activeTab={activeTab} /> */}
                </Tab>
              </Tabs>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* <div className="owner-details-container">
          <div className="row">
            <div className="col-md-7">
              <h5>Owner's Detail</h5>
              <div className="row">
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-name"
                      label="Owner's Name"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Owner's Name" />
                    </FloatingLabel>
                  </Form>
                </div>
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-contact"
                      label="Owner's Contact Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Owner's Contact Number"
                      />
                    </FloatingLabel>
                  </Form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-email"
                      label="Owner's Email"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Owner's Email" />
                    </FloatingLabel>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
