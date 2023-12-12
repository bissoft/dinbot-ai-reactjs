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
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 dashboard-card">
                <div className="mb-2">
                  <img src="/Assets/card-icon.png" alt="card-pic" />
                </div>
                <div className="order-main">
                  <div className="order-div">
                    <span className="order">Likes</span>
                    <div>
                      <span className="percent">9%</span>{" "}
                      <span className="previous">vs. last Post</span>
                    </div>
                  </div>
                  <div>
                    <img src="Assets/Grafik.svg" alt="grafik" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 dashboard-card">
                <div className="mb-2">
                  <img src="/Assets/card-icon.png" alt="card-pic" />
                </div>
                <div className="order-main">
                  <div className="order-div">
                    <span className="order">Engagment</span>
                    <div>
                      <span className="percent">10%</span>{" "}
                      <span className="previous">vs. last Post</span>
                    </div>
                  </div>
                  <div>
                    <img src="Assets/Grafik.svg" alt="grafik" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 dashboard-card">
                <div className="mb-2">
                  <img src="/Assets/card-icon.png" alt="card-pic" />
                </div>
                <div className="order-main">
                  <div className="order-div">
                    <span className="order">Reach</span>
                    <div>
                      <span className="percent">3.5%</span>{" "}
                      <span className="previous">vs. last Post</span>
                    </div>
                  </div>
                  <div>
                    <img src="Assets/dgraph.png" alt="grafik" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="my-3">
              <h6>Recent Post</h6>
            </div>
            <div className="col-md-12">
              <div className="row">
                {postData.map((post) => (
                  <div className="col-md-4">
                    <Card key={post.id} className="post_card py-2 px-2 mb-3">
                      <Card.Img variant="top" src={post.imageUrl} />
                      <Card.Body>
                        <Card.Title className="card-title">
                          {post.title}
                        </Card.Title>
                        <Card.Text className="d-flex align-items-center mx-0 my-1 card-rating">
                          <IoMdStar style={{ color: "#F7D540" }} />
                          {post.rating}
                        </Card.Text>
                        <Card.Text className="card-comment">
                          {post.comment}
                        </Card.Text>
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
