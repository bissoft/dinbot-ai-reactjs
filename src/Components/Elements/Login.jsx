// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";
import axios from "axios";
// import { GoogleLogin } from '@react-oauth/google';


function Login({ onLogin }) {
  // const { loginWithRedirect  , isAuthenticated } = useAuth0();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email: email,
          password: password,
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

        // Assuming the JWT is provided in the response as "jwt"
        const token = response.data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem('permission', response.data.user.permissions)
        onLogin();
        toast.success(response.data.message);

        onLogin();
        toast.success("Login Successfully");
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        // Handle login failure with an error message
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      toast.error(error.response.data.message)
      // toast.error();
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = () => {
    // loginWithRedirect();

  };

  const responseGoogle = (credentialResponse) => {
    console.log(credentialResponse);
    // if(credentialResponse.profileObj ){
    //   navigate('/dashboard')
    // }
    // Add your logic here
  };
  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
    // Handle the error, you can log it or show a message to the user
  };

  
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card px-5 py-4">
              <form
              // onSubmit={handleLoginSubmit}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     e.preventDefault(); // Prevent form submission
              //     handleLoginSubmit(e); // Pass the event object to the function
              //   }
              // }}
              >
                <div>
                  <div className="text-center">
                    <img
                      src="/Assets/dinebot-logo.png"
                      alt="none"
                      className="img-fluid"
                      width={150}
                    />
                    <br />
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
                      Sign in to your account
                    </span>
                  </div>
                  {/* <br /> */}
                  <div className="text-center py-3">
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      Enter your Credentials to access your account
                    </span>
                  </div>

                  <Form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3 title-label"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
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
                          value={password}
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
                    <div className="text-end pb-3 d-flex justify-content-between">
                      <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Link
                        to="/forgotpassword"
                        style={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "28px",
                          textAlign: "center",
                        }}
                        className="forgot-password"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </Form>
                  <Button
                    type="submit"
                    className="btn loginbtn w-100 py-3"
                    style={{ border: "none" }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault(); // Prevent form submission
                        handleLoginSubmit(e); // Pass the event object to the function
                      }
                    }}
                    onClick={handleLoginSubmit}
                  >
                    Sign In
                  </Button> <br />
                 <Button
                    type="submit"
                    className="btn btn-outline-secondary googlebtn w-100 py-3 mt-3"
                  // onKeyDown={(e)=>handleKeyDown(e)}
                  // onClick={handleLoginSubmit}
                  onClick={handleGoogleLogin}
                  >
                    <img
                      src="/Assets/googlebtn-icon.svg"
                      alt="google"
                      className="img-fluid px-2"
                    />
                    Sign in with Google
                  </Button> 
                  <div className="mt-3 text-center">
                    <span>
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        style={{ textDecoration: "none", color: "#069af3" }}
                      >
                        Sign Up
                      </Link>{" "}
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

export default Login;
