import React from "react";
import Card from "react-bootstrap/Card";
import postData from "../Utils/Post.json";
import { IoMdStar } from "react-icons/io";
import cardData from "../Utils/Stats.json";

const Scheduled = () => {
  return (
    <>
      <div className="social-media-cards ">
        <div className="container-fluid">
          <div className="row ">
            {cardData.map((card) => (
              <div className="col-md-4">
                <div key={card.id} className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src={card.imgSrc1} alt="card-pic" />
                  </div>
                  <div className=" order-main">
                    <div className="order-div">
                      <span className="order"> {card.title}</span>
                      <h4 className="num">{card.text}</h4>
                    </div>
                    <div>
                      <img className="" src={card.imgSrc2} alt="grafik" />
                    </div>
                  </div>
                </div>
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

export default Scheduled;
