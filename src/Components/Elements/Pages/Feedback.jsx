import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Reviews from "../Reviews";
import GoodReviews from "../GoodReviews";
import BadReviews from "../BadReviews";
import Suggestions from "../Suggestions";
import Favouritemenu from "../Favouritemenu";

function Feedback() {
  const [activeTab, setActiveTab] = useState("Reviews");

  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div className="feedback">
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-3">
          <h2>Feedback</h2>
        </div>
        <div className="row">
          <div
            className={activeTab === "Suggestions" ? "col-md-10" : "col-md-8"}
          >
            <div className="row">
              {/* <div className="col-md-12"> */}
              <Tabs
                // defaultActiveKey="Reviews"
                defaultActiveKey="Reviews"
                id="uncontrolled-tab-example"
                className="mb-3 mt-4"
                activeKey={activeTab}
                onSelect={handleTabChange}
              >
                <Tab eventKey="Reviews" title="Reviews">
                  <Reviews />
                </Tab>
                <Tab eventKey="GoodReviews" title="GoodReviews">
                  <GoodReviews />
                </Tab>
                <Tab eventKey="BadReviews" title="BadReviews">
                  <BadReviews />
                </Tab>
                <Tab eventKey="Suggestions" title="Suggestions">
                  <Suggestions activeTab={activeTab} />
                </Tab>
              </Tabs>
              {/* </div> */}
            </div>
          </div>

          <div className={activeTab === "Suggestions" ? "d-none" : "col-md-4"}>
            <Favouritemenu title="Top Rated This week" c1="Food Name" c2="Sold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
