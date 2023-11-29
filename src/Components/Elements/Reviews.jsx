import React from "react";
import feedbackData from "../Utils/FeedbackCard.json";
import Card from "react-bootstrap/Card";
import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {feedbackData.map((post) => (
                <div className="col-md-12">
                  <Card key={post.id} className="post_card card p-3 mb-3">
                    {/* <Card.Img variant="top" src={post.imageUrl} /> */}
                    <Card.Body>
                    <Card.Title className="text-end">{post.order}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text className="d-flex align-items-center mx-0 my-3">
                          <IoMdStar style={{ color: "#F7D540" }} />
                          {post.rating}
                        </Card.Text>
                      </div>
                      <Card.Text>{post.text}</Card.Text>
                      <Card.Text>{post.comment}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
