import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AiOutlineUser } from "react-icons/ai";

function Profile() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagePreview(e.target.result);

    };

    reader.readAsDataURL(file);

    // setFormData({
    //   ...formData,
    //   picture: file,
    // });
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="profile">
      <div className="container-fluid py-5">
            <div className="row pt-5 d-flex justify-content-center">
            <div className="col-md-3 d-flex  justify-content-center img-upload">
            <div className="image-uploader">
              <div
                className={`image-preview ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                onClick={handleButtonClick}
              >
              
                {imagePreview ? (
                  <img src={imagePreview} alt="Uploaded" />
                ) : (
                  <>
                    <div className="avatar">
                      <AiOutlineUser size={200} color="grey" />
                    </div>
                    {isHovered && !isEditing && (
                      <div className="upload-text">Click to Upload</div>
                    )}
                  </>
                )}
                {isHovered && !isEditing && (
                  <div className="upload-text">Click to Upload</div>
                )}
              </div>
              <input
                type="file"
                // value={formData.picture}
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
              </div>
              <div className="col-md-4 mt-1 pt-3 ">
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3 title-label"
                  >
                    <Form.Control
                      type="text"
                      placeholder="American Caesar Salad"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3 title-label"
                  >
                    <Form.Control
                      type="text"
                      placeholder="American Caesar Salad"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mb-3 title-label"
                  >
                    <Form.Control type="text" placeholder="" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3 title-label"
                  >
                    <Form.Control type="email" placeholder="" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3 title-label"
                  >
                    <Form.Control type="password" placeholder="" />
                  </FloatingLabel>
                </Form>
              {/* </div> */}
            </div>
             
              </div>
           
         
          </div>
    </div>
  )
}

export default Profile