import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FoodTable from "./FoodTable";
import Favouritemenu from "./Favouritemenu";
function Pos() {
  const salesTable = "salesTableId";
  return (
    <div className="pos">
      <div className="container-fluid py-3">
        <div className="row">
          <div>
            <h2>POS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Tabs
              defaultActiveKey="Sales"
              id="uncontrolled-tab-example"
              className="mb-3 mx-4"
            >
              <Tab className="tabs" eventKey="Sales" title="Sales">
                <FoodTable tableId="salesTable" initialMaxRow={10} />
              </Tab>
              <Tab
                className="tabs"
                eventKey="Most Selling"
                title="Most Selling"
              >
                <FoodTable tableId="most" initialMaxRow={7} />
              </Tab>
              <Tab
                className="tabs"
                eventKey="Less Selling"
                title="Less Selling"
              >
                <FoodTable tableId="less" initialMaxRow={5} />
              </Tab>
            </Tabs>
          </div>
          <div className="col-md-4">
            <Favouritemenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pos;
