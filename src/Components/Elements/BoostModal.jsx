import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FiUpload } from "react-icons/fi";

const BoostModal = ({ showBoostModal, handleClose, handleSaveChanges }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagsChange = (event) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      event.preventDefault();
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
    <div className="boost-modal">
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
              <div className="col-md-12 ps-0">
                <Form>
                  <div className="tag-field-container">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Keywords"
                      className="mb-2 title-label"
                    >
                      <Form.Control
                        className="tag-field"
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagsChange}
                      />
                      <div className="tag-container">
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
                  </div>

                  <div className="d-flex align-items-center">
                    <h6 className="mr-3">Target Range</h6>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Start Range"
                      className="mb-2 title-label"
                    >
                      <Form.Control type="time" />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="End Range"
                      className="mb-2 title-label"
                    >
                      <Form.Control type="time" />
                    </FloatingLabel>
                  </div>

                  <div className="map">
                    <h6>Area Selection</h6>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                      // width="600"
                      // height="450"
                      frameBorder="0"
                      style={{
                        border: 0,
                        height: "300px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    />
                  </div>

                  <div className="d-flex align-items-center mt-3">
                    <h6>Purchase it by adding Card</h6>
                    <button className="btn btn-primary ms-3">Add</button>
                  </div>
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
    </div>
  );
};

export default BoostModal;
