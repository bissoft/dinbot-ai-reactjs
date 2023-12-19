import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FiUpload } from "react-icons/fi";

const ModalComponent = ({ show, handleClose, handleSaveChanges, tableId }) => {
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
        className="modal-component modal-md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading">
            {tableId === "worstPerforming" ? "Assign Target" : "Add Post"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div
                className={
                  tableId === "worstPerforming"
                    ? "col-md-12 ps-0"
                    : "col-md-7 ps-0"
                }
              >
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={
                      tableId === "worstPerforming" ? "Restaurant" : "Title"
                    }
                    className="mb-2 title-label"
                  >
                    <Form.Control
                      type="text"
                      placeholder="American Caesar Salad"
                    />
                  </FloatingLabel>
                  {tableId === "worstPerforming" ? (
                    <>
                      <div className="d-flex">
                        <Form.Check
                          className="mb-2 checkbox-label me-3"
                          type={"checkbox"}
                          id={`default-checkbox`}
                          label={`Over`}
                        ></Form.Check>
                        <Form.Check
                          className="mb-2 checkbox-label me-3"
                          type={"checkbox"}
                          id={`default-checkbox`}
                          label={`Exact`}
                        ></Form.Check>
                        <Form.Check
                          className="mb-2 checkbox-label me-3"
                          type={"checkbox"}
                          id={`default-checkbox`}
                          label={`Under`}
                        ></Form.Check>
                      </div>
                    </>
                  ) : null}
                  {tableId !== "worstPerforming" && (
                    <>
                      <Form.Check
                        className="mb-2 checkbox-label"
                        type={"checkbox"}
                        id={`default-checkbox`}
                        label={`Schedule`}
                      ></Form.Check>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Date"
                        className="date-label mb-2"
                        style={{ fontSize: "12px" }}
                      >
                        <Form.Control type="date" />
                      </FloatingLabel>
                    </>
                  )}
                  {tableId === "worstPerforming" && (
                    <>
                      <FloatingLabel
                        controlId="floatingInput"
                        label={
                          tableId === "worstPerforming"
                            ? "Assign Target Margin"
                            : null
                        }
                        className="mb-2 title-label"
                      >
                        <Form.Control
                          type="text"
                          placeholder="American Caesar Salad"
                        />
                      </FloatingLabel>
                    </>
                  )}
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Description"
                    className="description-label"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      className="description-text"
                    />
                  </FloatingLabel>
                </Form>
              </div>
              {tableId !== "worstPerforming" && (
                <div className="col-md-5 justify-content-center d-flex align-items-center img-upload m-0 p-0">
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
                    {previewStyle.background ? (
                      ""
                    ) : (
                      <span>
                        Add Image <br /> Upload <br /> <FiUpload />
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button onClick={handleClose} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} className="post-btn">
            {tableId === "worstPerforming" ? "Next" : "Post"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
