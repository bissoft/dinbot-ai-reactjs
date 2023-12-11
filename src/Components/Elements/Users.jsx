import React, { useEffect, useState } from "react";
import Userstable from "./Userstable";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";

function Users() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [selecteRole, setSelecteRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateId,setUpdateId] = useState('')
  const myRows = 7;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    role_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role_id") {
      setFormData((prevData) => ({
        ...prevData,
        role_id: value,
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  // console.log("formData from user ", formData);

  const handleOpenModal = () => {
    // console.log("i am clicked");
    // setUpdateId('')
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    // console.log("i am clicked");
    setUpdateId('')
    setIsModalOpen(false);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const [users, setUsers] = useState([]);

  
  const getAllUsers = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `${API_BASE_URL}/user`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        console.log(response.data.data);
        setUsers(response.data.data);
      } else {
        const errorData = response.data;
        console.error("Logout failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      toast.error("Password does not matched");
      return;
    }
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/user`,
        {
          name: formData.firstName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
          role_id: formData.role_id,
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
        console.log("i am from new user creater", response);
        const newUser = {
          id: response.data.data.id,
          name: response.data.data.name,
        };
        setUsers((perUser) => [...perUser, newUser]);
        // const newPermissionName = response.data.data.name;
        // setPermission((prevPermission) => [...prevPermission, newPermissionName]);
        toast.success("Create Permission Successfully");
        setFormData({});
        handleCloseModal();
      } else {
        // Handle create permission failure with an error message
        toast.error("Create Permission failed");
        // console.log(error.response.data)
        //   toast.error(error.response.data.message);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      // console.error("An error occurred during create permission:", error);
      // toast.error("An error occurred d/uring create permission");
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  };
  const handleRole = async (e) => {
    e.preventDefault();
    handleOpenModal();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/role`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("roles from user", response.data.data);
        setSelecteRole(response.data.data);
      } else {
        const errorData = response.data;
        console.error("Fetching permissions failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during fetching permissions:", error);
    }
  };

  const handleEditData = (data ,id) => {
    console.log('myUserData',data)
    if (id ){
      setFormData({ firstName: data.name,email:data.email,role_id:data.role_id});
    }
  };

console.log(formData)
  const myUpdateFunction=(myUserid)=>{
    // console.log('id  from userTable in user',myUserid)
    setUpdateId(myUserid)
    
  }

  const handleUserUpdate = async ()=>{
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.put(
        `${API_BASE_URL}/user/${updateId}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        console.log(response.data.data);
        // setUsers(response.data.data);
      } else {
        const errorData = response.data;
        console.error("Logout failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }

  }

  return (
    <div className="users">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Users Management</h6>
            </div>
            <div>
              <button type="button" class="btn modal-btn" onClick={handleRole}>
                Create Users
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div class="modal-overlay">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                  {
                      updateId?'Update User':"Create New User"
                    }
                   
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    onClick={handleCloseModal}
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
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={updateId?formData.firstName:formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="lastName1"
                          label="Last Name"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                          />
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
                          <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                          />
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
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                          <Button
                            variant="outline-secondary"
                            onClick={togglePasswordVisibility}
                            className="password-toggle-btn position-absolute eye"
                            style={{ right: 10, top: 62, border: "none" }}
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
                              value={formData.password_confirmation}
                              name="password_confirmation"
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                          <Button
                            variant="outline-secondary"
                            onClick={togglePasswordVisibility1}
                            className="password-toggle-btn position-absolute eye"
                            style={{ right: 400, top: 120, border: "none" }}
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
                          name="role_id" // Set the name attribute to 'role_id'
                          value={formData.role_id}
                          onChange={handleChange}
                        >
                          <option>Select Roles</option>
                          {Array.isArray(selecteRole) &&
                            selecteRole.map((role) => (
                              <option key={role.id} value={role.id}>
                                {role.name}
                              </option>
                            ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={updateId?handleUserUpdate:handleUserSubmit}
                  >
                    {
                      updateId?'Update':"Save"
                    }
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row py-3">
          <div className="col-md-12">
            {users && (
              <Userstable
                tableId="user"
                initialMaxRow={myRows}
                myUserFunction={getAllUsers}
                tableData={users}
                tableHeader={["#", "Users", "Action"]}
                editModal={handleOpenModal}
                handleEditDataUser={handleEditData}
                updateModalData={myUpdateFunction}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
