import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import listData from "../Utils/FeedbackTopList.json";
import Reviews from "./Reviews";
import GoodReviews from "./GoodReviews";
import BadReviews from "./BadReviews";
import Suggestions from "./Suggestions";

function Feedback() {
  return (
    <div className="feedback">
      <div className="container">
        <div className="d-flex justify-content-between mt-3 mb-5">
          <h3>Feedback</h3>
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
                  <Tab eventKey="Reviews" title="Reviews">
                    <Reviews />
                  </Tab>
                  <Tab eventKey="GoodReviews" title="GoodReviews">
                    <GoodReviews />
                  </Tab>
                  <Tab eventKey="BadReviews" title="BadReviews">
                    <BadReviews />
                  </Tab>
                  <Tab eventKey="Suggestions" title="Suggestions">
                    <Suggestions />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <Card>
              <Card.Body>
                <Card.Title>Top Rated This Week</Card.Title>
                <div className="d-flex justify-content-between fw-bold px-5 py-2">
                  <div>Food Name</div>
                  <div>Sold</div>
                </div>
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
                          <p className="p-0 m-0">{item.sold}</p>
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
  );
}

export default Feedback;
