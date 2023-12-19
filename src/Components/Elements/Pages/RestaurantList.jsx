import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FoodTable from "../FoodTable";
import Favouritemenu from "../Favouritemenu";
const RestaurantList = () => {
  return (
    <div className="restaurant-list">
    <div className="container-fluid py-3">
      <div className="row">
        <div>
          <h2>Restaurant List</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3 mx-4 my-2"
          >
            <Tab className="tabs" eventKey="All" title="All">
              <FoodTable tableId="all" initialMaxRow={7} />
            </Tab>
            <Tab
              className="tabs"
              eventKey="Popular"
              title="Popular"
            >
              <FoodTable tableId="popular" initialMaxRow={7} />
            </Tab>
            <Tab
              className="tabs"
              eventKey="Worst performing"
              title="Worst performing"
            >
              <FoodTable tableId="worstPerforming" initialMaxRow={5} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RestaurantList