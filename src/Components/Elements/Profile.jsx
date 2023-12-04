import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <h2 className="pt-3">Profile</h2>
        <div className="profile-container mt-4">
          <h2>Restaurant</h2>
          <div className="profile-img d-flex align-items-center my-2">
            <img src="/Assets/Image 1.png" alt="avatar" />
            <div className="profile-name mx-4">
              <h3>Restaurant</h3>
              <p>Restaurant@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="owner-details-container">
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
        </div>

        <div className="restaurant-details-container">
          <div className="row">
            <div className="col-md-7">
              <h5>Restaurant's Detail</h5>
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
                      <Form.Control type="text" placeholder="Zip Code" />
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
                      <Form.Control type="text" placeholder="Address" />
                    </FloatingLabel>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
