import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { FaPlus } from "react-icons/fa6";
// import FacebookLogin from 'react-facebook-login'
import Button from "react-bootstrap/Button";
import Stats from "../Stats";
import Scheduled from "../Scheduled";
import ModalComponent from "../ModalComponent";
import SuggestiosMenu from "../SuggestiosMenu";
import BoostModal from "../BoostModal";
import FacebookLogin from "react-facebook-login";

function Socialmedia() {
  const [showModal, setShowModal] = useState(false);
  const [showBoostModal, setShowBoostModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleBoostModal = () => setShowBoostModal(true);
  console.log("open");
  const handleCloseBoostModal = () => setShowBoostModal(false);

  const handleSaveChanges = () => {
    handleCloseModal();
    handleCloseBoostModal();
  };
  const componentClicked = (res) => {
    console.log(res);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <>
      <div className="social-media">
        <div className="container-fluid">
          <div className="d-flex justify-content-between mt-3">
            <h2>Social Media</h2>
            <div>
              <FacebookLogin
                appId="3590160454634136"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                buttonStyle={{
                  padding: "10px 24px",
                  color: "#069af3",
                  border: "1px solid #069af3",
                  marginRight: "10px",
                  fontWeight: 600,
                  borderRadius: "25px",
                  background: "white",
                  fontSize: "14px",
                }}
              />
              <Button
                variant="outline-light"
                className="add_post-btn"
                onClick={handleShowModal}
              >
                Add Post <FaPlus size={20} className="pb-1" />
              </Button>
            </div>
            <ModalComponent
              show={showModal}
              handleClose={handleCloseModal}
              handleSaveChanges={handleSaveChanges}
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <Tabs
                    defaultActiveKey="Stats"
                    id="uncontrolled-tab-example"
                    className="mb-3 mt-4"
                  >
                    <Tab eventKey="Stats" title="Stats">
                      <Stats />
                    </Tab>
                    <Tab eventKey="Scheduled" title="Scheduled">
                      <Scheduled />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-4">
              <SuggestiosMenu
                heading="Suggestions"
                subHeading="Add these post to gain Engagement"
                btnText="Post"
                onClick={handleShowModal}
              />
              <SuggestiosMenu
                onClick={handleBoostModal}
                className="pt-4"
                heading="Boost"
                subHeading="Boost these for better reach"
                btnText="Boost"
              />
              <BoostModal
                showBoostModal={showBoostModal}
                handleClose={handleCloseBoostModal}
                handleSaveChanges={handleSaveChanges}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socialmedia;
