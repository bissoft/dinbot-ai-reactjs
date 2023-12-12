import React, { useEffect, useState } from "react";
import Dashboarddata from "../Utils/Dashboarddata.json";
function FoodTable({ initialMaxRows = 5, initialMaxRow, tableId }) {
  const [maxRows, setMaxRows] = useState(initialMaxRow || initialMaxRows);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const handleMaxRowsChange = (e) => {
    setMaxRows(parseInt(e.target.value));
    setCurrentPage(1);
  };
  const updateTableRows = () => {
    const table = document.getElementById(tableId || "maintable-id");
    const rows = table.tBodies[0].rows;
    const totalPages = Math.ceil(rows.length / maxRows);
    setTotalRows(rows.length);
    let startIdx = (currentPage - 1) * maxRows;
    let endIdx = startIdx + maxRows;
    Array.from(rows).forEach((row, index) => {
      if (index >= startIdx && index < endIdx) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  };

  useEffect(() => {
    // Update maxRows when initialMaxRow prop changes
    if (initialMaxRow && initialMaxRow !== maxRows) {
      setMaxRows(initialMaxRow);
    }
  }, [initialMaxRow, maxRows]);
  useEffect(() => {
    updateTableRows();
  }, [maxRows, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const entriesStart = (currentPage - 1) * maxRows + 1;
  const entriesEnd = Math.min(entriesStart + maxRows - 1, totalRows);
  return (
    <div className="food-table">
      <div className="card px-2">
        <table
          className="table table-striped table-class"
          id={tableId || "maintable-id"}
        >
          <thead>
            <tr className="mainfood-table">
              <th>Food Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Dashboarddata.map((table, index) => (
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
                    <div className="food-title  d-flex align-items-center">
                      {table.foodTitle}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="food-title">{table.type}</div>
                </td>
                <td>
                  <div className="food-title">{table.status}</div>
                </td>
                <td>
                  <div className="food-title">{table.price}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between py-3">
        <div className="rows_count display">
          Showing {entriesStart} to {entriesEnd} of {totalRows} entries
        </div>
        <div className="d-flex gap-2">
          <div className="display1 py-2">
            <h6>Display</h6>
          </div>
          <div className="form-group">
            <select
              className="form-control tablecontrol"
              name="state"
              id="maxRows"
              onChange={handleMaxRowsChange}
            >
              <option value={initialMaxRow}>{initialMaxRow}</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="5000">ALL</option>
            </select>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  {"<"}
                </button>
              </li>
              {Array.from(
                { length: Math.ceil(totalRows / maxRows) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
              <li
                className={`page-item ${
                  currentPage === Math.ceil(totalRows / maxRows)
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {">"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FoodTable;
