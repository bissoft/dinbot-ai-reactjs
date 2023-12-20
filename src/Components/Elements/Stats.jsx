import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { IoMdStar } from "react-icons/io";
import cardData from "../Utils/Stats.json";
import postData from "../Utils/Post.json";
import ReactApexChart from "react-apexcharts";

const Stats = () => {
  const [series] = useState({
    monthDataSeries1: {
      numbers: [
        30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 85, 95, 110, 120, 105,
      ], // Sample data
    },
  });

  const pageNumberArray = Array.from({ length: 15 }, (_, i) => i); // Generating an array from 0 to 14

  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Page Performance",
      align: "left",
    },
    // subtitle: {
    //   text: 'Price Movements',
    //   align: 'left'
    // },
    xaxis: {
      type: "category",
      categories: pageNumberArray,
      labels: {
        formatter: function (val) {
          return val?.toString(); // Convert the value to string
        },
      },
    },
    yaxis: {
      // opposite: true
    },
    legend: {
      horizontalAlign: "left",
    },
  });

  const chartSeries = [
    {
      name: "Performance",
      data: series.monthDataSeries1.numbers,
    },
  ];

  return (
    <>
      <div className="social-media-cards">
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
          <div className="row py-4">
            <div className="col-md-12">
              <div id="chart">
                <ReactApexChart
                  options={options}
                  series={chartSeries}
                  type="area"
                  height={350}
                />
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

export default Stats;
