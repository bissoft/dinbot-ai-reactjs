import React from "react";
import { Card } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";

function Foodmenucard() {
  return (
    <div className="foodmenucard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="food card p-2 mb-3">
              <Card.Img
                variant="top"
                src="/Assets/Image 1.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="text-start card-title">
                  Spicy Shrimp{" "}
                </Card.Title>
                <Card.Title className="text-start card-title">
                  Ramen{" "}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="card-content">11 Available</Card.Text>
                  <Card.Text className="d-flex align-items-center py-3 card-content">
                    <IoMdStar style={{ color: "#F7D540" }} />
                    4.6
                  </Card.Text>
                </div>
                <Card.Text>$ 15.00</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodmenucard;
