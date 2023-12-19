import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Tab, Tabs } from "react-bootstrap";
// import Favouritemenu from "../Elements/Favouritemenu";
// import FoodTable from "./FoodTable";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import AnalysisData from "../../Utils/AnalysisData.json";
import { Link } from "react-router-dom";
import { Form, FloatingLabel } from "react-bootstrap";
import Reviews from "../Reviews";
import Suggestions from "../Suggestions";
function Analysis() {
  const [displayedItems, setDisplayedItems] = useState(5);

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
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const [showAnalysis, setShowAnalysis] = useState(true);

  const navigateView = () => {
    setShowAnalysis(false);
  };
  return (
    <>
      {showAnalysis ? (
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
            <div className="col-md-4">
              <div className="favouritemenu">
                <div className="card p-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="favourite">Competitors List</h6>
                    </div>

                    <div className="btn-group">
                      <IoEllipsisVertical
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Download PDF
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Duplicate Invoice
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item draft" href="#">
                            Delete Draft
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Connections
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View Customer <GoArrowRight />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h6 className="favourite my-2">Restaurant</h6>
                  </div>
                  <table
                    className="table table-striped table-class"
                    id="foodtable-id"
                  >
                    {/* <thead>
                  <tr>
                    <th>Food Name</th>
                    <th>Sold</th>
                  </tr>
                </thead> */}
                    <tbody>
                      {/* {AnalysisData?.slice(0, displayedItems).map(
                    (table, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="d-flex align-items-center">
                              <img
                                src={table["food-pic"]}
                                alt="food"
                                className="img-fluid"
                              />
                            </div>
                            <div className="food-title">
                              <div className="foodname">{table.title}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="serving d-flex align-items-center">
                            view
                          </div>
                        </td>
                      </tr>
                    )
                  )} */}
                      {AnalysisData?.map((table, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={table["food-pic"]}
                                  alt="food"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="food-title">
                                <div className="foodname">{table.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="pt-3">
                            <div className="serving d-flex align-items-center">
                              <Link onClick={navigateView}>View</Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* {Dashboarddata.length > 5 && (
          <div className="text-center see" onClick={handleSeeAllClick}>
            <h6>{displayedItems === 5 ? "See All" : "Show Less"}</h6>
          </div>
        )} */}
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
      ) : (
        <>
          <div className="profile feedback">
            <div className="container-fluid py-2">
              <div className="profile-container mt-4">
                <h2>Restaurant Name</h2>
              </div>
              <div className="row">
                <div
                  className={
                    activeTab === "PopularDishes"
                      ? "col-md-10"
                      : "" || activeTab === "Reviews"
                      ? "col-md-8"
                      : "" || activeTab === "Profile"
                      ? "col-md-12"
                      : ""
                  }
                >
                  <div className="row">
                    {/* <div className="col-md-12"> */}
                    <Tabs
                      // defaultActiveKey="Reviews"
                      defaultActiveKey="Profile"
                      id="uncontrolled-tab-example"
                      className="mb-3 mt-4"
                      activeKey={activeTab}
                      onSelect={handleTabChange}
                    >
                      <Tab eventKey="Profile" title="Profile">
                        <div className="restaurant-details-container py-5">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="profile-img d-flex align-items-center my-2">
                                <img src="/Assets/Image 1.png" alt="avatar" />
                                <div className="profile-name mx-4">
                                  <h3>Restaurant</h3>
                                  <p>Restaurant@gmail.com</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <Form>
                                    <FloatingLabel
                                      controlId="restaurant-name"
                                      label="Restaurant's Name"
                                      className="mb-3"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="Restaurant's Name"
                                      />
                                    </FloatingLabel>
                                  </Form>
                                </div>
                                <div className="col-md-6">
                                  <Form>
                                    <FloatingLabel
                                      controlId="state"
                                      label="State"
                                      className="mb-3"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="State"
                                      />
                                    </FloatingLabel>
                                  </Form>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <Form>
                                    <FloatingLabel
                                      controlId="city"
                                      label="City"
                                      className="mb-3"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="City"
                                      />
                                    </FloatingLabel>
                                  </Form>
                                </div>
                                <div className="col-md-6">
                                  <Form>
                                    <FloatingLabel
                                      controlId="zip-code"
                                      label="Zip Code"
                                      className="mb-3"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="Zip Code"
                                      />
                                    </FloatingLabel>
                                  </Form>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <Form>
                                    <FloatingLabel
                                      controlId="address"
                                      label="Address"
                                      className="mb-3"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="Address"
                                      />
                                    </FloatingLabel>
                                  </Form>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="map">
                                <h6>Area Selection</h6>
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                  // width="600"
                                  // height="450"
                                  frameBorder="0"
                                  style={{
                                    border: 0,
                                    height: "300px",
                                    width: "100%",
                                    borderRadius: "10px",
                                  }}
                                  allowFullScreen=""
                                  aria-hidden="false"
                                  tabIndex="0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="PopularDishes" title="Popular Dishes">
                        <Suggestions />
                      </Tab>
                      <Tab eventKey="Reviews" title="Reviews">
                        <Reviews />
                      </Tab>
                      <Tab eventKey="Suggestions" title="Suggestions">
                        {/* <Suggestions activeTab={activeTab} /> */}
                      </Tab>
                    </Tabs>
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/* <div className="owner-details-container">
          <div className="row">
            <div className="col-md-7">
              <h5>Owner's Detail</h5>
              <div className="row">
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-name"
                      label="Owner's Name"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Owner's Name" />
                    </FloatingLabel>
                  </Form>
                </div>
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-contact"
                      label="Owner's Contact Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Owner's Contact Number"
                      />
                    </FloatingLabel>
                  </Form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form>
                    <FloatingLabel
                      controlId="owner-email"
                      label="Owner's Email"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Owner's Email" />
                    </FloatingLabel>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Analysis;
