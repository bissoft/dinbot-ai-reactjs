import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Favouritemenu from "../Favouritemenu";
import Button from "react-bootstrap/Button";
import MenuModal from "../MenuModal";
import { FaPlus } from "react-icons/fa6";
import Foodmenucard from "../Foodmenucard";
// import ReactApexChart from 'react-apexcharts';

function Dinemenu() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [modalStep, setModalStep] = useState(1); // Track modal step

  const handleShowModal = () => {
    if (modalStep === 1) {
      setShowFirstModal(true);
    } else if (modalStep === 2) {
      setShowSecondModal(true);
    }
  };

  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
    setModalStep(1); // Reset step when closing the first modal
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
    setModalStep(1); // Reset step when closing the second modal
  };

  const handleNextButtonClick = () => {
    if (modalStep === 1) {
      setShowFirstModal(false);
      setShowSecondModal(true);
      setModalStep(2);
    } else if (modalStep === 2) {
      setShowSecondModal(false);
    }
  };
  // const [chartState, setChartState] = useState({
  //   series: [50],
  //   options: {
  //     chart: {
  //       height: 100,
  //       type: 'radialBar',
  //     },
  //     plotOptions: {
  //       radialBar: {
  //         hollow: {
  //           size: '50%',
  //         },
  //       },
  //     },
  //     labels: [],
  //   },
  // });
  return (
    <div className="dinemenu">
      <div className="container-fluid py-3">
        <div className="row pb-3">
          <div className="d-flex justify-content-between">
            <h2>Mazz Pizza</h2>
            <Button
              variant="outline-light"
              className="add_menu-btn"
              onClick={handleShowModal}
            >
              Add Menu <FaPlus size={20} className="pb-1" />
            </Button>
            <MenuModal
              showFirstModal={showFirstModal}
              handleCloseFirstModal={handleCloseFirstModal}
              showSecondModal={showSecondModal}
              handleCloseSecondModal={handleCloseSecondModal}
              modalStep={modalStep}
              handleNextButtonClick={handleNextButtonClick}
            />
          </div>
        </div>

        <div className="row">
          <div className="py-2">
            <h3>Meny List</h3>
          </div>
          <div className="col-md-8">
            <Tabs
              defaultActiveKey="Appetizer"
              id="uncontrolled-tab-example"
              className="mb-3 mx-4"
            >
              <Tab className="tabs" eventKey="Appetizer" title="Appetizer">
                <Foodmenucard />
              </Tab>
              <Tab className="tabs" eventKey="Snack" title="Snack">
                <Foodmenucard />
              </Tab>
              <Tab className="tabs" eventKey="Grill" title="Grill">
                <Foodmenucard />
              </Tab>
              <Tab className="tabs" eventKey="Coffee" title="Coffee">
                <Foodmenucard />
              </Tab>
              <Tab className="tabs" eventKey="Cold Drinks" title="Cold Drinks">
                <Foodmenucard />
              </Tab>
              <Tab className="tabs" eventKey="Dessert" title="Dessert">
                <Foodmenucard />
              </Tab>
            </Tabs>
          </div>
          <div className="col-md-4">
            <Favouritemenu title="Favourite Menu" c1="Food Name" c2="Sold" />

            {/* <div id="chart">
              <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="radialBar"
                height={350}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dinemenu;
