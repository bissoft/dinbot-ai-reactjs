import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Favouritemenu from './Favouritemenu';
import Foodmenucard from './Foodmenucard';

function Dinemenu() {
  return (
    <div className='dinemenu'>
      <div className="container-fluid py-3">
        <div className="row pb-3">
          <div>
          <h2>Mazz Pizza</h2>
          </div>
        </div>
        <div className='row'>
          <div className='py-2'>
          <h3>Meny List</h3>
          </div>
        <div className="col-md-8">
        <Tabs
        defaultActiveKey="Appetizer"
        id="uncontrolled-tab-example"
        className="mb-3 mx-4"
      >
        <Tab className="tabs" eventKey="Appetizer" title="Appetizer">
          <Foodmenucard/>
        </Tab>
        <Tab className="tabs" eventKey="Snack" title="Snack">
        </Tab>
        <Tab className="tabs" eventKey="Grill" title="Grill">
        </Tab>
        <Tab className="tabs" eventKey="Coffee" title="Coffee">
        </Tab>
        <Tab className="tabs" eventKey="Cold Drinks" title="Cold Drinks">
        </Tab>
        <Tab className="tabs" eventKey="Dessert" title="Dessert">
        </Tab>
      </Tabs>
        </div>
        <div className="col-md-4">
          <Favouritemenu/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dinemenu