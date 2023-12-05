import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form, Row, Col } from 'react-bootstrap'
import Permission from './Permission'
import axios from 'axios'
import Userstable from './Userstable'
import { API_BASE_URL } from '../../Apicongfig'

function Permissions() {
    const [permission,setPermission] = useState([])
    useEffect(()=>{
        const getAllPermission = async () => {
        try {
          const token = sessionStorage.getItem("token");
          const response = await axios.get(
            `${API_BASE_URL}/permission`,
          
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          if (response) {
            console.log(response.data.data);
            setPermission(response.data.data)
            // sessionStorage.clear();
            // navigate("/");
          } else {
            const errorData = response.data;
            console.error("Logout failed:", errorData.error);
          }
        } catch (error) {
          console.error("Error during logout:", error);
        }
      };
    
    getAllPermission()
    },[])
    return (
        <div className='users'>
            <div className="container-fluid py-3 ">
                <div className="row pt-4 main-management" >
                    <div className='d-flex justify-content-between'>
                        <div className='user-management pb-2'>
                            <h6>Permission Management</h6>
                        </div>
                        <div>
                            <button type="button" class="btn modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Create Permission
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create New Permission</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Form>
                                    <Row>
                                        <Col md={12}>
                                            <FloatingLabel controlId="firstName1" label="Name" className="mb-3 title-label">
                                                <Form.Control type="text" placeholder="First Name" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-12">
                        <Userstable tableId='permissionTable' tableData={permission} initialMaxRow={8} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permissions