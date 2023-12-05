import React, { useEffect, useState } from "react";
import Userstable from "./Userstable";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";

function Roles() {

    const [roles,setRoles] = useState([])
    useEffect(()=>{
        const getAllRoles = async () => {
        try {
          const token = sessionStorage.getItem("token");
          const response = await axios.get(
            `${API_BASE_URL}/role`,
          
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          if (response) {
            console.log(response.data.data);
            setRoles(response.data.data)
            // sessionStorage.clear();
            // navigate("/");
          } else {
            const errorData = response.data;
            console.error("Logout failed:", errorData.error);
          }
        } catch (error) {
          console.error("Error during logout:", error);
        }
      };
    
    getAllRoles()
    },[])
  return (
    <div className="users">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Role Management</h6>
            </div>
            <div>
              <button
                type="button"
                class="btn modal-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create Role
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
                  Create New Role
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
                    <Col md={12}>
                      <FloatingLabel
                        controlId="firstName1"
                        label="Name"
                        className="mb-3 title-label"
                      >
                        <Form.Control type="text" placeholder="First Name" />
                      </FloatingLabel>
                    </Col>
                    <h6>Permissions :</h6>
                    <Col md={12}>
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="role-list" />
                        <Form.Check type="checkbox" label="role-create" />
                        <Form.Check type="checkbox" label="role-edit" />
                        <Form.Check type="checkbox" label="role-delete" />
                        <Form.Check type="checkbox" label="client" />
                        <Form.Check type="checkbox" label="create-project" />
                        <Form.Check type="checkbox" label="list-project" />
                        <Form.Check type="checkbox" label="delete-project" />
                        <Form.Check type="checkbox" label="update-project" />
                      </Form.Group>
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
            <Userstable tableId="salesTable" tableData={roles} initialMaxRow={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
