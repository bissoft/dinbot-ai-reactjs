import React from 'react'
import feedbackData from "../Utils/FeedbackCard.json";
import Card from "react-bootstrap/Card";
import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className="container-fluid">
        <div className="row">
            {/* <div className="my-3">
              <h6>Recent Post</h6>
            </div> */}
            <div className="col-md-12">
              <div className="row">
                {feedbackData.map((post) => (
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
  )
}

export default Reviews