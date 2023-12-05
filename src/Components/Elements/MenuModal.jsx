import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FiUpload } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MenuModal = ({
  showFirstModal,
  handleCloseFirstModal,
  showSecondModal,
  handleCloseSecondModal,
  modalStep,
  handleNextButtonClick,
}) => {
  const [previewStyle, setPreviewStyle] = useState({});
  // const loadFile = (event) => {
  //   setPreviewStyle({
  //     background: `url(${URL.createObjectURL(event.target.files[0])}) center`,
  //   });
  // };
  const loadFile = (e) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreviewStyle({
        background: `url(${event.target.result})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const uploadFile = () => {
    document.getElementById("avatar-upload").click();
  };

  const [ingredientFields, setIngredientFields] = useState(["Pepper"]);


  const addField = () => {
    const newIngredientFields = [...ingredientFields, ""];
    setIngredientFields(newIngredientFields);
  };

  const deleteField = (index) => {
    const newIngredientFields = [...ingredientFields];
    newIngredientFields.splice(index, 1);
    setIngredientFields(newIngredientFields);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredientFields = [...ingredientFields];
    newIngredientFields[index] = value;
    setIngredientFields(newIngredientFields);
  };

  //Post API for Handle Menu
  const handleMenu = () => {
    alert('Menu Added Successfully')
    handleCloseSecondModal();
  };

  return (
    <>
      {/* First Modal - Add Menu */}
      <Modal
        show={showFirstModal}
        onHide={handleCloseFirstModal}
        className="menu-modal-component modal-md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading">
            Add Menu List <span className="text-small">
            {modalStep}/2
                </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 ps-0">
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-2 title-label"
                  >
                    <Form.Control
                      type="text"
                      placeholder="American Caesar Salad"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-2 title-label"
                  >
                    <Form.Control
                      type="text"
                      placeholder="American Caesar Salad"
                    />
                  </FloatingLabel>
                  <div className="d-flex">
                    <Form.Check
                      className="mb-2 checkbox-label me-3"
                      type={"checkbox"}
                      id={`default-checkbox`}
                      label={`Small`}
                    ></Form.Check>
                    <Form.Check
                      className="mb-2 checkbox-label me-3"
                      type={"checkbox"}
                      id={`default-checkbox`}
                      label={`Medium`}
                    ></Form.Check>
                    <Form.Check
                      className="mb-2 checkbox-label me-3"
                      type={"checkbox"}
                      id={`default-checkbox`}
                      label={`Large`}
                    ></Form.Check>
                  </div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Price for Small"
                    className="mb-2 title-label"
                  >
                    <Form.Control type="text" placeholder="$10" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Price for Medium"
                    className="mb-2 title-label"
                  >
                    <Form.Control type="text" placeholder="$20" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Pirce for Large"
                    className="mb-2 title-label"
                  >
                    <Form.Control type="text" placeholder="$30" />
                  </FloatingLabel>
                </Form>
              {/* </div> */}
            </div>
              <div className="col-md-5 justify-content-center d-flex align-items-center img-upload">
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
                  previewStyle.background ? 'upload-preview' : ''
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
              </div>
            <div className="row">
              <div className="col-md-12 mt-2 px-0">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                  className="description-label"
                >
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Leave a comment here"
                   className="description-text"
                  />
                </FloatingLabel>
              </div>
            </div>
         
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button onClick={handleCloseFirstModal} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={handleNextButtonClick} className="post-btn">
            Next
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Second Modal - Add Ingredients */}
      <Modal
        show={showSecondModal}
        onHide={handleCloseSecondModal}
        className="menu-modal-component modal-md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading">
            Add Ingredients {modalStep}/2
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            {ingredientFields.map((ingredient, index) => (
              <div key={index} className="row align-items-center">
                <div className="col-md-10">
                  <Form>
                    <FloatingLabel
                      controlId={`floatingInput${index}`}
                      label={`Ingredients`}
                      className="mb-3 title-label"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Enter ingredient"
                        value={ingredient}
                        onChange={(e) =>
                          handleIngredientChange(index, e.target.value)
                        }
                      />
                    </FloatingLabel>
                  </Form>
                </div>
                <div className="col-md-2 justify-content-center">
                  {index === ingredientFields.length - 1 ? (
                    <span className="add-field-btn mb-3">
                      {index === 0 ? (
                        <FiPlusCircle onClick={addField} />
                      ) : (
                        <RiDeleteBin6Line onClick={() => deleteField(index)} className="bin-icon" />
                      )}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-md-12">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Recipe"
                  className="description-label"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Recipe"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button onClick={handleCloseSecondModal} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={handleMenu} className="post-btn">
            Save
          </Button>
          {/* Additional buttons/actions for the second modal */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuModal;
