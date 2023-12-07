import React, { useEffect, useState } from "react";
import Userstable from "./Userstable";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";

function Users() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  return (
    <div className="users">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Users Management</h6>
            </div>
            <div>
              <button
                type="button"
                class="btn modal-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create Users
              </button>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Create New User
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Form>
                  <Row>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="firstName1"
                        label="First Name"
                        className="mb-3 title-label"
                      >
                        <Form.Control type="text" placeholder="First Name" />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="lastName1"
                        label="Last Name"
                        className="mb-3 title-label"
                      >
                        <Form.Control type="text" placeholder="Last Name" />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="email"
                        label="Email"
                        className="mb-3 title-label"
                      >
                        <Form.Control type="text" placeholder="Email" />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <div>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Password"
                          className="mb-3 title-label position-relative"
                        >
                          <Form.Control
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FloatingLabel>
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility}
                          className="password-toggle-btn position-absolute eye"
                          style={{ right: 20, top: 78, border: "none" }}
                        >
                          {passwordVisible ? (
                            <FaEyeSlash color="#069AF3" />
                          ) : (
                            <FaEye color="#069AF3" />
                          )}
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Confirm Password"
                          className="mb-3 title-label position-relative"
                        >
                          <Form.Control
                            type={passwordVisible1 ? "text" : "password"}
                            placeholder="Enter password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </FloatingLabel>
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility1}
                          className="password-toggle-btn position-absolute eye"
                          style={{ right: 420, top: 135, border: "none" }}
                        >
                          {passwordVisible1 ? (
                            <FaEyeSlash color="#069AF3" />
                          ) : (
                            <FaEye color="#069AF3" />
                          )}
                        </Button>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className="py-3"
                      >
                        <option>Select Roles</option>
                        <option value="1">Admin</option>
                        <option value="2">Client</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-12">
            <Userstable tableId="salesTable" initialMaxRow={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
