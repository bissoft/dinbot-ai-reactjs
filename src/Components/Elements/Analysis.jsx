import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Tab, Tabs } from "react-bootstrap";
// import Favouritemenu from "../Elements/Favouritemenu";
// import FoodTable from "./FoodTable";

function Analysis() {
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
        tickAmount: 10,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    selection: "",
  });
  // data: [27, 37, 8, 6, 29, 10, 20, 30, 14, 35, 27, 33],

  const [chartDataComparison, setChartDataComparison] = useState({
    series: [
      {
        name: "Orders",
        data: [27, 37, 8, 6],
      },
      {
        name: "Revenue",
        data: [10, 30, 20, 32],
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
        categories: ["2016", "2018", "2020", "2022"],
      },
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    selection: "",
  });

  const updateData = (timeline) => {
    setChartData((prevData) => ({
      ...prevData,
      selection: timeline,
    }));

    let startDate, endDate;

    switch (timeline) {
      case "one_day":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        endDate = new Date();
        break;
      case "one_week":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
        endDate = new Date();
        break;
      case "one_month":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1);
        endDate = new Date();
        break;
      case "one_year":
        startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        endDate = new Date();
        break;
      default:
        return;
    }

    const updatedSeries = generateDataForTimeRange(startDate, endDate);

    setChartData((prevData) => ({
      ...prevData,
      series: updatedSeries,
    }));
  };
  const generateDataForTimeRange = (startDate, endDate) => {
    const ordersData = [];
    const revenueData = [];

    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const randomOrders = Math.floor(Math.random() * 500);
      const randomRevenue = Math.floor(Math.random() * 1000);

      ordersData.push(randomOrders);
      revenueData.push(randomRevenue);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return [
      { name: "Orders", data: ordersData },
      { name: "Revenue", data: revenueData },
    ];
  };

  return (
    <div className="analysis">
      <div className="row">
        <div className="col-md-12">
          <Tabs
            defaultActiveKey="Reviews"
            id="uncontrolled-tab-example"
            className="mb-3 mt-4"
          >
            <Tab eventKey="Reviews" title="Reviews">
              {/* <Reviews /> */}
            </Tab>
            <Tab eventKey="Income" title="Income">
              {/* <Income /> */}
            </Tab>
            <Tab eventKey="Sales" title="Sales">
              {/* <Sales /> */}
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-8">
          <div className="card p-3">
            <div id="chart">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>Income Statistics</h4>
                </div>

                {/* <div className="toolbar">
                  <button
                    id="one_day"
                    onClick={() => updateData("one_day")}
                    className={
                      chartData.selection === "one_day" ? "active" : ""
                    }
                  >
                    1D
                  </button>
                  &nbsp;
                  <button
                    id="one_week"
                    onClick={() => updateData("one_week")}
                    className={
                      chartData.selection === "one_week" ? "active" : ""
                    }
                  >
                    1W
                  </button>
                  &nbsp;
                  <button
                    id="one_month"
                    onClick={() => updateData("one_month")}
                    className={
                      chartData.selection === "one_month" ? "active" : ""
                    }
                  >
                    1M
                  </button>
                  &nbsp;
                  <button
                    id="one_year"
                    onClick={() => updateData("one_year")}
                    className={
                      chartData.selection === "one_year" ? "active" : ""
                    }
                  >
                    1Y
                  </button>
                  &nbsp;
                </div> */}
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

      <div className="row py-4">
        <div className="col-md-8">
          <div className="card p-3">
            <div id="chart">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>Comparison</h4>
                </div>

                {/* <div className="toolbar">
                  <button
                    id="one_month"
                    onClick={() => updateData("one_month")}
                    className={
                      chartDataComparison.selection === "one_month"
                        ? "active"
                        : ""
                    }
                  >
                    1M
                  </button>
                  &nbsp;
                  <button
                    id="one_week"
                    onClick={() => updateData("one_week")}
                    className={
                      chartDataComparison.selection === "one_week"
                        ? "active"
                        : ""
                    }
                  >
                    1W
                  </button>
                  &nbsp;
                  <button
                    id="one_day"
                    onClick={() => updateData("one_day")}
                    className={
                      chartDataComparison.selection === "one_day"
                        ? "active"
                        : ""
                    }
                  >
                    1D
                  </button>
                  &nbsp;
                </div> */}
              </div>
              <div id="chart-timeline">
                <ReactApexChart
                  options={chartDataComparison.options}
                  series={chartDataComparison.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
