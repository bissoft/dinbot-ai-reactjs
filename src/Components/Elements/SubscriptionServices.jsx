import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";
import Userstable from "./Userstable";

const SubscriptionServices = () => {
  const [services, setServices] = useState([]);
  console.log("MY SERVICES", services);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myRows = 7;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    // status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Add new Services API
  const handleServiceSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/subscription-service`,
        {
          name: formData.name,
          description: formData.description,
          // status: formData.status, // Consider if 'status' should be included
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 201) {
        console.log("response", response);
        const newService = {
          id: response.data.data.id,
          name: response.data.data.name,
          description: response.data.data.description,
          // status: response.data.data.status, 
        };
  
        setServices((prevServices) => [...prevServices, newService]);
  
        toast.success("Create Service Successfully");
        setFormData({});
        handleModal();
      } else {
        toast.error("Create Services failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the service");
    }
  };
  

  const getAllServices = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `${API_BASE_URL}/subscription-service`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log("response-->", response);
        setServices(response.data.data);
      } else {
        const errorData = response.data;
        console.error(
          "Fetching Subscription Services failed:",
          errorData.error
        );
      }
    } catch (error) {
      console.error("Error during fetching Subscription Services:", error);
    }
  };

  const handleEditData = (data) => {
    setFormData({ name: data.name, });
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div className="subscription-service">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Services</h6>
            </div>
            <div>
              <button type="button" class="btn modal-btn" onClick={handleModal}>
                Add Services
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
                    Add Services
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    onClick={handleModal}
                  ></button>
                </div>
                <div class="modal-body">
                  <Form>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="name"
                          label="Name"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          controlId="description"
                          label="Description"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            as="textarea"
                            value={formData.description}
                            name="description"
                            onChange={handleChange}
                            placeholder="Description..."
                            rows={5}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleServiceSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row py-3">
          <div className="col-md-12">
            {services && (
              <Userstable
                tableId="subscription-service"
                initialMaxRow={myRows}
                myUserFunction={getAllServices}
                tableData={services}
                tableHeader={["#", "Name", "Description", "Actions"]}
                editModal={handleModal}
                handleEditData={handleEditData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionServices;