import React, { useEffect, useState } from "react";
import Userstable from "./Userstable";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";

function Roles() {
  const [editId, setEditId] = useState("");
  const [roles, setRoles] = useState([]);
  const [permission, setPermission] = useState([]);
  console.log("my permissions-->", permission);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [checkedPermissions, setCheckedPermissions] = useState({});
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      setCheckedPermissions((prevPermissions) => ({
        ...prevPermissions,
        [value]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const getEditId = (id) => {
    setEditId(id);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleUpdateData = (data) => {
    setFormData({
      name: data?.name,
    });

    const checkedPermissions = {};
    data.permissions.forEach((permissionId) => {
      checkedPermissions[permissionId.id] = true;
    });
    setCheckedPermissions(checkedPermissions);
  };

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
        setRoles(response.data.data);
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
  useEffect(() => {
    getAllRoles();
  }, []);

  const handleRolesSubmit = async (event) => {
    event.preventDefault();
    try {
      const checkedPermissionIds = Object.entries(checkedPermissions)
        .filter(([_, checked]) => checked)
        .map(([id]) => id);

      console.log(checkedPermissionIds);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/role`,
        {
          name: formData.name,
          permissions: checkedPermissionIds,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", // Update Content-Type
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log(response);
        const newRole = {
          id: response.data.data.id,
          name: response.data.data.name,
        };
        // const newPermissionName = respon;
        // setRoles((prevRole) => [...prevRole, newRole]);
        getAllRoles();
        toast.success("Create Permission Successfully");
        handleModal();
        setFormData({});
        setCheckedPermissions({});
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
  const handleUpdateRole = async (event) => {
    // event.preventDefault();
    try {
      const checkedPermissionIds = Object.entries(checkedPermissions)
        .filter(([_, checked]) => checked)
        .map(([id]) => id);
      const token = sessionStorage.getItem("token");
      const response = await axios.put(
        `${API_BASE_URL}/role/${editId}`,
        {
          name: formData.name,
          permissions: checkedPermissionIds,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", // Update Content-Type
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.data.name);
        // const newPermissionName = response.data.data.name;
        // setPermission((prevPermission) => [
        //   ...prevPermission,
        //   newPermissionName,
        // ]);
        getAllRoles();
        toast.success("Role Updated Successfully");
        setFormData({});
        handleEditModal();
        setCheckedPermissions({})
      } else {
        // Handle create permission failure with an error message
        toast.error("Role Updated failed");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("An error occurred during updating role:", error);
      toast.error("An error occurred during updating role");
    }
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
        console.log("roles", response.data.data);
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
                onClick={getAllPermission}
              >
                Create Role
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create New Role</h5>
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
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="First Name"
                          />
                        </FloatingLabel>
                      </Col>
                      <h6>Permissions :</h6>
                      <Col md={12}>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                          {Object.values(permission).map((per) => (
                            <Form.Check
                              key={per.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={per.name}
                              name="permissions"
                              value={per.id}
                              checked={checkedPermissions[per.id] || false}
                              onChange={handleInputChange}
                            />
                          ))}
                          {/* {permission?.permissions?.map((per) => (
                            <Form.Check
                              key={per.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={per.name}
                              name="permissions"
                              value={per.id}
                              checked={checkedPermissions[per.id] || false}
                              onChange={handleInputChange}
                              
                            />
                          ))} */}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="role-list" />
                        <Form.Check type="checkbox" label="role-create" />
                        <Form.Check type="checkbox" label="role-edit" />
                        <Form.Check type="checkbox" label="role-delete" />
                        <Form.Check type="checkbox" label="client" />
                        <Form.Check type="checkbox" label="create-project" />
                        <Form.Check type="checkbox" label="list-project" />
                        <Form.Check type="checkbox" label="delete-project" />
                        <Form.Check type="checkbox" label="update-project" />
                      </Form.Group> */}
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRolesSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isEditModalOpen && (
          <div className="modal-overlay">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Role</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleEditModal}
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
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="First Name"
                          />
                        </FloatingLabel>
                      </Col>
                      <h6>Permissions :</h6>
                      <Col md={12}>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                          {/* {Object.values(permission).map((per) => (
                            <Form.Check
                              key={per.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={per.name}
                              name="permissions"
                              value={per.id}
                              checked={checkedPermissions[per.id] || false}
                              onChange={handleInputChange}
                            />
                          ))} */}
                          {permission.map((per) => (
                            <Form.Check
                              key={per.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={per.name}
                              name="permissions"
                              value={per.id}
                              checked={!!checkedPermissions[per.id]} // Use !! to convert to boolean
                              onChange={handleInputChange}
                            />
                          ))}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="role-list" />
                        <Form.Check type="checkbox" label="role-create" />
                        <Form.Check type="checkbox" label="role-edit" />
                        <Form.Check type="checkbox" label="role-delete" />
                        <Form.Check type="checkbox" label="client" />
                        <Form.Check type="checkbox" label="create-project" />
                        <Form.Check type="checkbox" label="list-project" />
                        <Form.Check type="checkbox" label="delete-project" />
                        <Form.Check type="checkbox" label="update-project" />
                      </Form.Group> */}
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateRole}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row py-3">
          <div className="col-md-12">
            <Userstable
              tableId="role"
              tableData={roles}
              initialMaxRow={10}
              myUserFunction={getAllRoles}
              tableHeader={["#", "Role", "Permission", "Action"]}
              editModal={handleEditModal}
              handleUpdateData={handleUpdateData}
              getEditIdFromTable={getEditId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
