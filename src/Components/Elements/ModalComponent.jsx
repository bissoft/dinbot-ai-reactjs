import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FiUpload } from "react-icons/fi";

const ModalComponent = ({ show, handleClose, handleSaveChanges }) => {
  const [previewStyle, setPreviewStyle] = useState({});
  const loadFile = (event) => {
    setPreviewStyle({
      background: `url(${URL.createObjectURL(event.target.files[0])}) center`,
    });
  };
  const uploadFile = () => {
    document.getElementById("avatar-upload").click();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // size="lg"
        // dialogClassName="modal-190w"
        className="modal-component"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Date">
                    <Form.Control
                      as="date"
                    />
                  </FloatingLabel>
                  <Form.Check
                    className="mb-3"
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`Schedule`}
                  ></Form.Check>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form>
              </div>
              <div className="col-md-5 justify-content-center d-flex align-items-center">
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  id="avatar-upload"
                  onChange={(e) => loadFile(e)}
                  style={{ display: "none" }}
                />
                <div
                  className={`upload-cta pic ${
                    previewStyle.background ? "upload-preview" : ""
                  } text-center`}
                  onClick={uploadFile}
                  style={previewStyle}
                >
                  {/* <img src="/Assets/upload.svg" alt="" className="mb-2" /> */}
                  {previewStyle.background ? "" : `Add Image Upload`}
                  <br />
                  <FiUpload />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
