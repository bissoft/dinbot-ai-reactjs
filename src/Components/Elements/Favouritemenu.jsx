import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Dashboarddata from "../Utils/Dashboarddata.json";

function Favouritemenu({title,c1,c2,className}) {
  const [displayedItems, setDisplayedItems] = useState(3);
  const handleSeeAllClick = () => {
    // Toggle between showing 5 items and showing all items
    setDisplayedItems((prev) => (prev === 5 ? Dashboarddata.length : 5));
  };

  return (
    <div className={`favouritemenu ${className}`}>
      <div className="card p-4">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="favourite">{title}</h6>
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
        <table className="table table-striped table-class" id="foodtable-id">
          <thead>
            <tr>
              <th>{c1}</th>
              <th>{c2}</th>
            </tr>
          </thead>
          <tbody>
            {Dashboarddata.slice(0, displayedItems).map((table, index) => (
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
                      <div className="foodname">{table.foodTitle}</div>
                      <div className="food-type">{table.type}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="serving d-flex align-items-center">
                  {title === "Above Margin Restaurants" ? table.margins : table.serving}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {Dashboarddata.length > 5 && (
          <div className="text-center see" onClick={handleSeeAllClick}>
            <h6>{displayedItems === 5 ? "See All" : "Show Less"}</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favouritemenu;
