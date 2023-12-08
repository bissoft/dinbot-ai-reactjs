import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";
import Userstable from "./Userstable";

const SubscriptionPackages = () => {
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscription, setSubscription] = useState({});
  const [checkedSubscriptions, setCheckedSubscriptions] = useState({});
  const myRows = 7;
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    stripe_product: "",
    description: "",
    subscriptionServices: "",
  });
  //   console.log("formData-->",formData)
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      setCheckedSubscriptions((prevSubscription) => ({
        ...prevSubscription,
        [value]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Add new Subscirption Package API
  const handlePackageSubmit = async (event) => {
    event.preventDefault();
    try {
      const checkedSubscriptionsIds = Object.entries(checkedSubscriptions)
        .filter(([_, checked]) => checked)
        .map(([id]) => id);

      console.log(checkedSubscriptionsIds);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/subscription-package`,
        {
          name: formData.name,
          price: formData.price,
          stripe_product: formData.stripe_product,
          duration: formData.duration,
          description: formData.description,
          subscriptionServices: checkedSubscriptionsIds,
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
        console.log("response", response);
        const newPackage = {
          id: response.data.data.id,
          name: response.data.data.name,
          price: response.data.data.price,
          stripe_product: response.data.data.stripe_product,
          duration: response.data.data.duration,
          description: response.data.data.description,
        };
        setPackages((prevSubscription) => [...prevSubscription, newPackage]);
        toast.success("Create Subscription Package Successfully");
        handleModal();
        setFormData({});
        setCheckedSubscriptions({});
      } else {
        // Handle create permission failure with an error message
        toast.error("Create Subscription Package failed");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error(
        "An error occurred during create Subscription Package:",
        error
      );
      toast.error("An error occurred during create Subscription Package");
    }
  };

  const getAllServices = async () => {
    handleModal();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/subscription-service`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        console.log("roles", response);
        setSubscription(response.data.data);
      } else {
        const errorData = response.data;
        console.error("Fetching permissions failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during fetching permissions:", error);
    }
  };

  const getAllSubscriptionPackages = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/subscription-package`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        console.log("response-->", response);
        setPackages(response.data.data);
      } else {
        const errorData = response.data;
        console.error(
          "Fetching Subscription Packages failed:",
          errorData.error
        );
      }
    } catch (error) {
      console.error("Error during fetching Subscription Packages:", error);
    }
  };

  const handleEditData = (data) => {
    setFormData({
      name: data?.name,
      price: data?.price,
      duration: data?.duration,
      stripe_product: data?.stripe_product,
      description: data?.description,
    });
  };

  useEffect(() => {
    getAllSubscriptionPackages();
  }, []);

  //   const addSubscription = async (e) => {
  //     e.preventDefault();
  //     handleModal();
  //     // try {
  //     //   const token = sessionStorage.getItem("token");
  //     //   const response = await axios.get(`${API_BASE_URL}/role`, {
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   });
  //     //   if (response.status === 200) {
  //     //     console.log("roles from user", response.data.data);
  //     //     setSelecteRole(response.data.data);
  //     //   } else {
  //     //     const errorData = response.data;
  //     //     console.error("Fetching permissions failed:", errorData.error);
  //     //   }
  //     // } catch (error) {
  //     //   console.error("Error during fetching permissions:", error);
  //     // }
  //   };

  //   const handleUserSubmit = async (event) => {
  //     event.preventDefault();
  //     if (formData.password !== formData.password_confirmation) {
  //       toast.error("Password does not matched");
  //       return;
  //     }
  //     try {
  //       const token = sessionStorage.getItem("token");
  //       const response = await axios.post(
  //         `${API_BASE_URL}/user`,
  //         {
  //           name: formData.firstName,
  //           email: formData.email,
  //           password: formData.password,
  //           password_confirmation: formData.password_confirmation,
  //           role_id: formData.role_id,
  //         },
  //         {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json", // Update Content-Type
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (response) {
  //         console.log("i am from new user creater", response);
  //         const newUser = {
  //           id: response.data.data.id,
  //           name: response.data.data.name,
  //         };
  //         setUsers((perUser) => [...perUser, newUser]);
  //         // const newPermissionName = response.data.data.name;
  //         // setPermission((prevPermission) => [...prevPermission, newPermissionName]);
  //         toast.success("Create Permission Successfully");
  //         setFormData({});
  //         handleModal();
  //       } else {
  //         // Handle create permission failure with an error message
  //         toast.error("Create Permission failed");
  //         // console.log(error.response.data)
  //         //   toast.error(error.response.data.message);
  //       }
  //     } catch (error) {
  //       // Handle other errors (e.g., network issues)
  //       // console.error("An error occurred during create permission:", error);
  //       // toast.error("An error occurred d/uring create permission");
  //       console.log(error.response);
  //       toast.error(error.response.data.message);
  //     }
  //   };
  return (
    <div className="subscription-package">
      <div className="container-fluid py-3 ">
        <div className="row pt-4 main-management">
          <div className="d-flex justify-content-between">
            <div className="user-management pb-2">
              <h6>Subscription Packages</h6>
            </div>
            <div>
              <button
                type="button"
                class="btn modal-btn"
                onClick={getAllServices}
              >
                Add Subscription
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
                    Add Subscription Package
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
                      <Col md={6}>
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
                      <Col md={6}>
                        <FloatingLabel
                          controlId="price"
                          label="Price"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="price"
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="duration"
                          label="Duration (in months)"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Duration (in months)"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="stripeproductid"
                          label="Stripe Product ID"
                          className="mb-3 title-label"
                        >
                          <Form.Control
                            type="text"
                            name="stripe_product"
                            value={formData.stripe_product}
                            onChange={handleChange}
                            placeholder="Stripe Product ID"
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
                            placeholder="Description..."
                            rows={5}
                            value={formData.description}
                            name="description"
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <h6>Subscription Services :</h6>
                      <Col md={12}>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                          {Object.values(subscription).map((sub) => (
                            <Form.Check
                              key={sub.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={sub.name}
                              name="subscriptionServices"
                              value={sub.id}
                              checked={checkedSubscriptions[sub.id] || false}
                              onChange={handleChange}
                            />
                          ))}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handlePackageSubmit}
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
            {packages && (
              <Userstable
                tableId="subscription-package"
                initialMaxRow={myRows}
                myUserFunction={getAllSubscriptionPackages}
                tableData={packages}
                tableHeader={[
                  "#",
                  "Name",
                  "Price",
                  "Duration (months)",
                  "Actions",
                ]}
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

export default SubscriptionPackages;