import React from "react";
import listData from "../Utils/postSuggestionList.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const SuggestiosMenu = ({
  className,
  heading,
  subHeading,
  btnText,
  onClick,
}) => {
  return (
    <div className={className}>
      <Card>
        <Card.Body>
          <Card.Title className="card-heading">{heading}</Card.Title>
          <Card.Text className="card-text">{subHeading}</Card.Text>
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
                    <Button
                      variant="primary"
                      className="suggest-btn"
                      onClick={onClick}
                    >
                      {btnText}
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
