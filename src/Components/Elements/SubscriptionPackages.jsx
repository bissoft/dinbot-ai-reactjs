import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";
import Userstable from "./Userstable";

const SubscriptionPackages = () => {
  const [editId, setEditId] = useState("");
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [subscription, setSubscription] = useState([]);
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

  const getEditId = (id) => {
    setEditId(id);
  };

  const handleModal = () => {
    setFormData({});
    setIsModalOpen(!isModalOpen);
  };

  const handleEditModal = () => {
    setIsPackageModalOpen(!isPackageModalOpen);
  };

  //Add new Subscirption Package API
  const handlePackageSubmit = async (event) => {
    event.preventDefault();
    try {
      const checkedSubscriptionsIds = Object.entries(checkedSubscriptions)
        .filter(([_, checked]) => checked)
        .map(([id]) => id);

      //console.log(checkedSubscriptionsIds);
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
        //console.log("response", response);
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
        "An error occurred during Creating Subscription Package:",
        error
      );
      toast.error("An error occurred during Creating Subscription Package");
    }
  };
  //Update Package
  const handleUpdatePackage = async () => {
    // event.preventDefault();
    try {
      const checkedSubscriptionsIds = Object.entries(checkedSubscriptions)
        .filter(([_, checked]) => checked)
        .map(([id]) => id);

      //console.log(checkedSubscriptionsIds);
      const token = sessionStorage.getItem("token");
      const response = await axios.put(
        `${API_BASE_URL}/subscription-package/${editId}`,
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
        //console.log("response", response);
        const newPackage = {
          id: response.data.data.id,
          name: response.data.data.name,
          price: response.data.data.price,
          stripe_product: response.data.data.stripe_product,
          duration: response.data.data.duration,
          description: response.data.data.description,
        };
        // setPackages((prevSubscription) => [...prevSubscription, newPackage]);
        getAllSubscriptionPackages();
        toast.success("Subscription Package Updated Successfully");
        handleEditModal();
        setFormData({});
        setCheckedSubscriptions({});
      } else {
        // Handle create permission failure with an error message
        toast.error("Update Subscription Package failed");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error(
        "An error occurred during upating Subscription Package:",
        error
      );
      toast.error("An error occurred during Updating Subscription Package");
    }
  };

  const getAllServices = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/subscription-service`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        console.log("services", response);
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

  const handleUpdateData = (data) => {

    setFormData({
      id: data?.id,
      name: data?.name,
      price: data?.price,
      duration: data?.duration,
      stripe_product: data?.stripe_product,
      description: data?.description,
    });
    const checkedServices = {};
    data.subscription_services.forEach((serviceId) => {
      checkedServices[serviceId.id] = true;
    });
    setCheckedSubscriptions(checkedServices);
  };

  useEffect(() => {
    getAllSubscriptionPackages();
    getAllServices();
  }, []);

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
                onClick={handleModal}
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
        {isPackageModalOpen && (
          <div class="modal-overlay">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Update Subscription Package
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    onClick={handleEditModal}
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
                          {subscription?.map((ser) => (
                            <Form.Check
                              key={ser.id}
                              className="d-inline-flex w-25"
                              type="checkbox"
                              label={ser.name}
                              name="permissions"
                              value={ser.id}
                              checked={!!checkedSubscriptions[ser.id]}
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
                    onClick={handleUpdatePackage}
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
                editModal={handleEditModal}
                handleUpdateData={handleUpdateData}
                getEditIdFromTable={getEditId}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackages;
