import React from "react";
import Favouritemenu from "../Favouritemenu";
import FoodTable from "../FoodTable";

const SuperAdmin = () => {
  return (
    <div className="super-admin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 my-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/card-icon.png" alt="card-pic" />
                  </div>
                  <div className="order-main">
                    <div className="order-div">
                      <span className="order">Best Performing Restaurants</span>
                      <div>
                        <span className="percent fw-bold">12</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/worst-perform-icon.svg" alt="card-pic" />
                  </div>
                  <div className="order-main">
                    <div className="order-div">
                      <span className="order">
                        Worst Performing Restaurants
                      </span>
                      <div>
                        <span className="percent fw-bold">5</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 dashboard-card">
                  <div className="mb-2">
                    <img src="/Assets/margins-icon.svg" alt="card-pic" />
                  </div>
                  <div className="order-main">
                    <div className="order-div">
                      <span className="order">
                        Violating Margins Restaurants
                      </span>
                      <div>
                        <span className="percent fw-bold">12</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between mt-3">
                  <h3>New Subscriber Restaurants List</h3>
                </div>
                <FoodTable tableId="all" initialMaxRow={5} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="map">
                  <h3>Restaurants Location</h3>
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

          <div className="col-md-4 pt-4">
            <Favouritemenu
              title="Above Margin Restaurants"
              c1="Name"
              c2="Margins"
            />
            <Favouritemenu
              title="Popular Restaurants"
              c1="Name"
              c2="Sales"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
