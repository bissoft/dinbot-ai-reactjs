import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FiUpload } from "react-icons/fi";

const BoostModal = ({ showBoostModal, handleClose, handleSaveChanges }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagsChange = (event) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      const newTag = tagInput.trim();
      setTags([...tags, newTag]);
      setTagInput(""); // Clear the input field after adding the tag
    }
  };

  const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
  };

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
        show={showBoostModal}
        onHide={handleClose}
        className="modal-component modal-md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading">Boost Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 ps-0">
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Keywords"
                    className="mb-2 title-label"
                  >
                    <Form.Control
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagsChange}
                    />
                    <div>
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge bg-primary me-2 mt-2"
                          onClick={() => removeTag(index)}
                          style={{ cursor: "pointer" }}
                        >
                          {tag} &#x2715;
                        </span>
                      ))}
                    </div>
                  </FloatingLabel>
                 
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
              {/* <div className="col-md-5 justify-content-center d-flex align-items-center img-upload m-0 p-0">
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
              </div> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button onClick={handleClose} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} className="post-btn">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BoostModal;
