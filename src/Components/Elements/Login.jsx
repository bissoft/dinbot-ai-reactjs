// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("i am clicked")
    navigate('/dashboard')
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <div className="container-fluid pb-5">
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
                    <img src="/Assets/Vector (2).svg" alt="none" className="img-fluid"  width={150} />
                  </div> <br />
                  <Form>
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
                        className="password-toggle-btn position-absolute eye" style={{ right: 50, top: 280, border: 'none' }}
                      >
                        {passwordVisible ? <FaEyeSlash color="#069AF3" /> : <FaEye color="#069AF3" />}
                      </Button>
                    </div>
                  </Form>

                    <Button type="submit" className="btn loginbtn w-100 py-3" style={{border:'none'}}
                    // onKeyDown={(e)=>handleKeyDown(e)}
                    >
                      Sign In
                    </Button> 
                 
                  <div className="mt-3 text-center">
                    <span>Don't have an account? <Link to='/signup'>Sign Up</Link> </span>
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

export default Login;