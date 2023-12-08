import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import Userstable from "./Userstable";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";

function Permissions() {
  const [permission, setPermission] = useState([]);
  const [permissionName, setPermissionName] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myRow = 9;
  const handleModal = () => {
    console.log("i am clicked");
    setIsModalOpen(!isModalOpen);
  };

  const getAllPermission = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/permission`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data.data);
        setPermission(response.data.data);
      } else {
        const errorData = response.data;
        console.error("Fetching permissions failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during fetching permissions:", error);
    }
  };
  
  useEffect(() => {
    getAllPermission();
  }, []);

  const handlePermissionNameSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/permission`,
        {
          name: permissionName,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", // Update Content-Type
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        console.log(response.data.data.name);
        const newPermissionName = response.data.data.name;
        setPermission((prevPermission) => [
          ...prevPermission,
          newPermissionName,
        ]);
        toast.success("Create Permission Successfully");
        handleModal();
      } else {
        // Handle create permission failure with an error message
        toast.error("Create Permission failed");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("An error occurred during create permission:", error);
      toast.error("An error occurred during create permission");
    }
  };

  const handleEditData = (data) => {
    setPermissionName(data?.name)
  };

  return (
    <div className="users">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Permission Management</h6>
            </div>
            <div>
              <button
                type="button"
                className="btn modal-btn"
                onClick={handleModal}
              >
                Create Permission
              </button>
            </div>
          </div>
        </div>
        {isModalOpen ? (
          <div className="modal-overlay ">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create New Permission</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <Form>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="firstName1"
                          label="Name"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => setPermissionName(e.target.value)}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handlePermissionNameSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row py-3">
          <div className="col-md-12">
            <Userstable
              tableId="permission"
              tableData={permission}
              editModal={handleModal}
              myUserFunction={getAllPermission}
              initialMaxRow={myRow}
              tableHeader={["#", "Role", "Action"]}
              handleEditData={handleEditData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Permissions;
