import React from "react";
import Card from "react-bootstrap/Card";
import { IoMdStar } from "react-icons/io";
import cardData from "../Utils/Stats.json";
import postData from "../Utils/Post.json";

const Stats = () => {
  return (
    <>
      <div className="social-media-cards ">
        <div className="container-fluid">
          <div className="row">
            {cardData.map((card) => (
              <div className="col-md-4">
                <Card key={card.id} className="social-media-card p-2">
                  <Card.Body className="card-container">
                    <div>
                      <Card.Img
                        variant="top"
                        src={card.imgSrc1}
                        className="icon"
                      />
                      <Card.Title className="h6 card_title mt-2">
                        {card.title}
                      </Card.Title>
                      <Card.Text className="card_text">{card.text}</Card.Text>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <Card.Img
                        variant="top"
                        src={card.imgSrc2}
                        className="icon"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="my-3">
              <h6>Recent Post</h6>
            </div>
            <div className="col-md-12">
              <div className="row">
                {postData.map((post) => (
                  <div className="col-md-4">
                    <Card key={post.id} className="post_card p-3 mb-3">
                      <Card.Img variant="top" src={post.imageUrl} />
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text className="d-flex align-items-center mx-0 my-3">
                          <IoMdStar style={{ color: "#F7D540" }} />
                          {post.rating}
                        </Card.Text>
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
    </>
  );
};

export default Stats;
