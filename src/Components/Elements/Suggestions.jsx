import React from "react";
import Card from "react-bootstrap/Card";
import { IoMdStar } from "react-icons/io";
import Carousel from "react-multi-carousel";

const Suggestions = ({ activeTab }) => {
  console.log("suggestions-page,active tab is: ", activeTab);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="suggestions">
      <h5>Improve Pricing</h5>
      <Carousel responsive={responsive}>
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
      </Carousel>
      <h5>Improve Spices</h5>
      <Carousel responsive={responsive}>
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
        <div className="slider">
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
              <Card.Title className="text-start card-title">Ramen </Card.Title>
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
      </Carousel>
    </div>
  );
};

export default Suggestions;
