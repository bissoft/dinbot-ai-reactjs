import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

import Favouritemenu from "../Elements/Favouritemenu";
import FoodTable from "./FoodTable";

function Dashboard() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Orders",
        data: [314, 60, 308, 51, 202, 109, 300, 200, 300, 150, 350, 200],
      },
      {
        name: "Revenue",
        data: [501, 32, 205, 32, 404, 52, 481, 120, 340, 200, 500, 400],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        min: 0,
        max: 500,
        tickAmount: 10, // Adjust the number of ticks based on your preference
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  const updateData = (timeline) => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      selection: timeline,
    }));

    const now = new Date().getTime();
    let startDate, endDate;

    switch (timeline) {
      case "one_day":
        startDate = now - 24 * 60 * 60 * 1000;
        endDate = now;
        break;
      case "one_week":
        startDate = now - 7 * 24 * 60 * 60 * 1000;
        endDate = now;
        break;
      case "one_month":
        startDate = now - 30 * 24 * 60 * 60 * 1000;
        endDate = now;
        break;
      case "one_year":
        startDate = now - 365 * 24 * 60 * 60 * 1000;
        endDate = now;
        break;
      default:
        break;
    }
  };
  const isButtonActive = (timeline) => chartData.selection === timeline;

  return (
    <div className="dashboard">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/profile.png" alt="card-pic" />
                  </div>
                  <div className="order-main">
                    <div className="order-div">
                      <span className="order">Orders</span>
                      <h4 className="num">350</h4>
                    </div>
                    <div>
                      <img className="" src="Assets/Grafik.svg" alt="grafik" />
                    </div>
                  </div>
                  <div>
                    <span className="percent">7%</span>{" "}
                    <span className="previous">vs. previous month</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/profile.png" alt="card-pic" />
                  </div>
                  <div className="order-main">
                    <div className="order-div">
                      <span className="order">Total Revenue</span>
                      <h4 className="num">$500.000</h4>
                    </div>
                    <div>
                      <img src="Assets/Grafik.svg" alt="grafik" />
                    </div>
                  </div>
                  <div>
                    <span className="percent">11%</span>{" "}
                    <span className="previous">vs. previous month</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/profile.png" alt="card-pic" />
                  </div>
                  <div className=" order-main">
                    <div className="order-div">
                      <span className="order">Bad Feedback</span>
                      <h4 className="num">500</h4>
                    </div>
                    <div>
                      <img src="Assets/Grafik (1).svg" alt="grafik" />
                    </div>
                  </div>
                  <div>
                    <span className="percent">3.5%</span>{" "}
                    <span className="previous">vs. previous month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-12">
                <div className="card p-3">
                  <div id="chart">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4>Income Statistics</h4>
                      </div>
                      <div className="toolbar">
                        <button
                          id="one_day"
                          onClick={() => updateData("one_day")}
                          className={isButtonActive("one_day") ? "active" : ""}
                        >
                          1D
                        </button>
                        <button
                          id="one_week"
                          onClick={() => updateData("one_week")}
                          className={isButtonActive("one_week") ? "active" : ""}
                        >
                          1W
                        </button>
                        <button
                          id="one_month"
                          onClick={() => updateData("one_month")}
                          className={
                            isButtonActive("one_month") ? "active" : ""
                          }
                        >
                          1M
                        </button>
                        <button
                          id="one_year"
                          onClick={() => updateData("one_year")}
                          className={isButtonActive("one_year") ? "active" : ""}
                        >
                          1Y
                        </button>
                      </div>
                    </div>
                    <div id="chart-timeline">
                      <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <FoodTable tableId="dashnoard" initialMaxRow={5} />
            </div>
          </div>
          <div className="col-md-4">
            <Favouritemenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
