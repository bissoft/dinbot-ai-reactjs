// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from "react-toastify";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
    console.log("i am clicked")
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card px-5 py-4" >
              <form
                onSubmit={handleLoginSubmit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent form submission
                    handleLoginSubmit(e); // Pass the event object to the function
                  }
                }}>
                <div>
                  <div className="text-center">
                    <div>

                  <img src="/Assets/Vector (2).svg" alt="none" className="img-fluid"  width={150} />                 </div>
                    </div><br />  
                  <Form> 
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Name"
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
                    <div >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3 title-label position-relative"
                      >
                        <Form.Control
                          type={passwordVisible ? 'text' : 'password'}
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FloatingLabel>
                      <Button
                        variant="outline-secondary"
                        onClick={togglePasswordVisibility}
                        className="password-toggle-btn position-absolute eye" style={{ right: 50, top: 350, border: 'none' }}
                      >
                        {passwordVisible ? <FaEyeSlash color="#069AF3" /> : <FaEye color="#069AF3" />}
                      </Button>
                    </div>
                    <div >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Confirm Password"
                        className="mb-3 title-label position-relative"
                      >
                        <Form.Control
                          type={passwordVisible1 ? 'text' : 'password'}
                          placeholder="Enter password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </FloatingLabel>
                      <Button
                        variant="outline-secondary"
                        onClick={togglePasswordVisibility1}
                        className="password-toggle-btn position-absolute eye" style={{ right: 50, top: 430, border: 'none' }}
                      >
                        {passwordVisible1 ? <FaEyeSlash color="#069AF3" /> : <FaEye color="#069AF3" />}
                      </Button>
                    </div>
                  </Form>

                  <Button type="submit" className="btn loginbtn w-100 py-3" style={{border:'none'}}
                    // onKeyDown={(e)=>handleKeyDown(e)}
                    >
                      Sign Up
                    </Button>
                  <div className="text-center mt-3">
                    <span>Already have an account? <Link to='/'>Sign In</Link> </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;