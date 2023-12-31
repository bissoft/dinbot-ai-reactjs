// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../../Apicongfig";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      toast.error("Password does not matched");
      return;
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
          },
        }
      );

      if (response) {
        console.log("signup response", response);
        console.log(response.data.token);
        const token = response.data.token;
        sessionStorage.setItem("token", token);
        console.log("JWT Token:", token);
        toast.success("SignUp Successfully");
        navigate("/");
      } else {
        // Handle login failure with an error message
        toast.error("Login failed");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.log(error.response.data);
      toast.error(error.response.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const handleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  const handleLoginSuccess = (credentialResponse) => {
    var decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);

    const isEmailVerified = decoded?.email_verified;
    sessionStorage.setItem("email_verified", isEmailVerified);
    localStorage.setItem("email_verified", isEmailVerified);
    sessionStorage.setItem("user", JSON.stringify(decoded));
    localStorage.setItem("isSignedIn", true);
    

    if (sessionStorage?.getItem("email_verified")) {
      window.location.assign("/dashboard");
      
    } else {
      console.error("email is not verified:", decoded);
    }
  };

  useEffect(() => {
    const isEmailVerified = sessionStorage.getItem("email_verified");
    if (isEmailVerified) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card px-5 py-4">
              <form
                onSubmit={handleLoginSubmit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevent form submission
                    handleLoginSubmit(e); // Pass the event object to the function
                  }
                }}
              >
                <div>
                  <div className="text-center">
                    <div>
                      <img
                        src="/Assets/dinebot-logo.png"
                        alt="none"
                        className="img-fluid"
                        width={150}
                      />{" "}
                    </div>
                  </div>
                  <div className="text-center">
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontSize: "30px",
                        fontWeight: 700,
                        lineHeight: "38px",
                        letterSpacing: "0em",
                        textAlign: "center",
                      }}
                    >
                      Get Started
                    </span>
                  </div>
                  <br />
                  <Form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Name"
                      className="mb-3 title-label"
                    >
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3 title-label"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </FloatingLabel>
                    <div className="position-relative">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3 title-label "
                      >
                        <Form.Control
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Enter password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                      <Button
                        // variant="outline-secondary"
                        onClick={togglePasswordVisibility}
                        className="password-toggle-btn eye"
                        style={{
                          background: "transparent",
                          border: "none",
                          position: "absolute",
                          zIndex: 10000,
                          top: "18%",
                          right: 0,
                        }}
                      >
                        {passwordVisible ? (
                          <FaEyeSlash color="#069AF3" />
                        ) : (
                          <FaEye color="#069AF3" />
                        )}
                      </Button>
                    </div>
                    <div className="position-relative">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Confirm Password"
                        className="mb-3 title-label "
                      >
                        <Form.Control
                          type={passwordVisible1 ? "text" : "password"}
                          placeholder="Enter password"
                          value={formData.password_confirmation}
                          name="password_confirmation"
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                      <Button
                        // variant="outline-secondary"
                        onClick={togglePasswordVisibility1}
                        className="password-toggle-btn eye"
                        style={{
                          background: "transparent",
                          border: "none",
                          position: "absolute",
                          zIndex: 10000,
                          top: "18%",
                          right: 0,
                        }}
                      >
                        {passwordVisible1 ? (
                          <FaEyeSlash color="#069AF3" />
                        ) : (
                          <FaEye color="#069AF3" />
                        )}
                      </Button>
                    </div>
                  </Form>

                  <Button
                    type="submit"
                    className="btn loginbtn w-100 py-3"
                    style={{ border: "none" }}
                    // onKeyDown={(e)=>handleKeyDown(e)}
                  >
                    Sign Up
                  </Button>
                  {/* <Button
                    type="submit"
                    className="btn btn-outline-secondary googlebtn w-100 py-3 mt-3"
                  >
                    <img
                      src="/Assets/googlebtn-icon.svg"
                      alt="google"
                      className="img-fluid px-2"
                    />
                    Sign up with Google
                  </Button> */}
                   <div className="btn btn-outline-secondary googlebtn w-100 py-3 mt-3">
                    <GoogleLogin
                      logo_alignment="center"
                      size="large"
                      useOneTap={true}
                      onSuccess={handleLoginSuccess}
                      onError={handleLoginError}
                      className="google-login-button"
                      // auto_select={true}
                      // type="icon"
                      containerProps={{
                        style:{
                          width:"100% !important",
                          border:'none !important'
                        },
                      }}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <span>
                      Already have an account? <Link to="/" style={{textDecoration:'none',color:'#069af3'}}>Sign In</Link>{" "}
                    </span>
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
