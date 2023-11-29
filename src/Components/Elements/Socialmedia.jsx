import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stats from "./Stats";
import Scheduled from "./Scheduled";
import listData from "../Utils/postSuggestionList.json";
import ModalComponent from "./ModalComponent";

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
          <div className="d-flex justify-content-between mt-3 mb-5">
            <h3>Social Media</h3>
            {/* <Button variant="outline-light" className="add_post-btn" onClick={onClick}>
              Add Post +
            </Button> */}
            <Button
              variant="outline-light"
              className="add_post-btn"
              onClick={handleShowModal}
            >
              Add Post +
            </Button>

            {/* Modal component */}
            <ModalComponent
              show={showModal}
              handleClose={handleCloseModal}
              handleSaveChanges={handleSaveChanges}
            />
          </div>

          <div className="row">
            <div className="col-lg-8">
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
              <Card>
                <Card.Body>
                  <Card.Title>Suggestions</Card.Title>
                  <Card.Text>Add these post to gain Engagement</Card.Text>
                  <div className="lists">
                    <ListGroup>
                      {listData.map((item) => (
                        <ListGroup.Item key={item.id}>
                          <div className="list-items">
                            <div className="listIcon_bgcolor">
                              <Image
                                src={item.imageUrl}
                                className="img-fluid"
                                style={{ width: "20px" }}
                                roundedCircle
                              />{" "}
                            </div>
                            <div>
                              <p className="p-0 m-0">{item.title}</p>
                              <p className="p-0 m-0">{item.subTitle}</p>
                            </div>
                          </div>
                          <div>
                            <Button variant="primary" className="suggest-btn">
                              Post
                            </Button>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socialmedia;
