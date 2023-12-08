import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../../Apicongfig';
import axios from 'axios';
function Userstable({ tableId, tableData, tableHeader ,myUserFunction ,myModal}) {
  const [maxRows, setMaxRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const handleMaxRowsChange = (e) => {
    setMaxRows(parseInt(e.target.value));
    setCurrentPage(1);
  };
  const updateTableRows = () => {
    const table = document.getElementById(tableId || 'maintable-id');
    const rows = table.tBodies[0].rows;
    // const totalPages = Math.ceil(rows.length / maxRows);
    setTotalRows(rows.length);
    let startIdx = (currentPage - 1) * maxRows;
    let endIdx = startIdx + maxRows;
    Array.from(rows).forEach((row, index) => {
      if (index >= startIdx && index < endIdx) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

  useEffect(() => {
    updateTableRows();
  }, [maxRows, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const entriesStart = (currentPage - 1) * maxRows + 1;
  const entriesEnd = Math.min(entriesStart + maxRows - 1, totalRows);

  const handleDelete = async (tableId, id) => {
    console.log('this is my table and their row ', tableId, id)
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.delete(
        `${API_BASE_URL}/${tableId}/${id}`,

        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', // Update Content-Type
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log("i am from new user creater", response);
        toast.success(`${tableId} Deleted Successfully`)
        if(tableId==='user'){
          myUserFunction()
        }
        else if(tableId === 'role'){
          myUserFunction()
        }
        else{
          myUserFunction()
        }


      } else {
        // Handle create permission failure with an error message
        toast.error("Create Permission failed");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }
  const handleEdit = (tableId , id) =>{
    console.log(`my tableId ${tableId} and my id ${id}`)
    if(tableId==='user'){
      myModal()
    }
    else if(tableId === 'role'){
      myModal()
    }
    else{
      myModal()
    }

  }
  return (
    <div className='food-table'>
      <div className="card px-2">
        <table className="table table-striped table-class" id={tableId || 'maintable-id'}>
          <thead>
            <tr className='mainfood-table'>
              {
                tableHeader.map((header, index) => (

                  <th key={index}>{header}</th>

                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              tableData?.map((table, index) => (
                <tr key={index}>
                  <td >
                    <div className='food-title '>
                      {table.id}
                    </div>
                  </td>
                  <td >
                    <div className='food-title'>
                      {table.name}
                    </div>
                  </td>
                  {tableId === 'role' && (
                    <td>
                      <div className='food-title'>
                        {table?.permissions?.map((per, index) => (
                          // console.log('i am from roles')
                          <span key={index} className='d-inline-flex'>
                            {per.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  )}
                  <td>
                    <div className=' d-flex'>
                      <button className='btn btn-secondary mx-1' onClick={() => handleEdit(tableId, table.id)}>Edit</button>
                      <button className='btn btn-danger mx-1' onClick={() => handleDelete(tableId, table.id)}>Delete</button></div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-between py-3'>
        <div className="rows_count display">
          Showing {entriesStart} to {entriesEnd} of {totalRows} entries
        </div>
        <div className='d-flex gap-2'>
          <div className='display1 py-2'>
            <h6>Display</h6>
          </div>
          <div className="form-group">
            <select
              className="form-control tablecontrol"
              name="state"
              id="maxRows"
              onChange={handleMaxRowsChange}
            >
              <option value='5'>5</option>
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
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                  {'<'}
                </button>
              </li>
              {Array.from({ length: Math.ceil(totalRows / maxRows) }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${currentPage === Math.ceil(totalRows / maxRows) ? 'disabled' : ''}`}
              >
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                  {'>'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Userstable