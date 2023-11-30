import React from "react";
import listData from "../Utils/postSuggestionList.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const SuggestiosMenu = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="card-heading">Suggestions</Card.Title>
          <Card.Text className="card-text">Add these post to gain Engagement</Card.Text>
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
                      <p className="p-0 m-0 ms-2">{item.title}</p>
                      <p className="p-0 m-0 ms-2">{item.subTitle}</p>
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
  );
};

export default SuggestiosMenu;
