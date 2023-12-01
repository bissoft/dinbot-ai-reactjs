import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { FaPlus } from "react-icons/fa6";

import Button from "react-bootstrap/Button";
import Stats from "./Stats";
import Scheduled from "./Scheduled";
import ModalComponent from "./ModalComponent";
import SuggestiosMenu from "./SuggestiosMenu";

function Socialmedia() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSaveChanges = () => {
    handleCloseModal(); // Close the modal after saving changes
  };

  return (
    <>
      <div className="social-media">
        <div className="container">
          <div className="d-flex justify-content-between mt-3">
            <h2>Social Media</h2>
            <Button
              variant="outline-light"
              className="add_post-btn"
              onClick={handleShowModal}
            >
              Add Post <FaPlus size={20} className="pb-1"/>
            </Button>
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
            <div className="col-lg-4">
              <SuggestiosMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socialmedia;
