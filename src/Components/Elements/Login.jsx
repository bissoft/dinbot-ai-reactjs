// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { API_BASE_URL } from "../../Apicongfig";
import { toast } from "react-toastify";
import axios from "axios";

function Login({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
// const [formData,setFormData]=useState({
//   email:'',
//   password:''
// })

const handleChange = (e) => {
  // Use e.target.name as the key to dynamically update the state
  const { name, value } = e.target;
  if (name === 'email') {
    setEmail(value);
  } else if (name === 'password') {
    setPassword(value);
  }
};


const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: email,
      password: password,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
    });

    if (response) {
      console.log(response.data.token)
      // Assuming the JWT is provided in the response as "jwt"
      const jwtToken = response.data.token;

      // Save the token to sessionStorage or localStorage
      sessionStorage.setItem('token', jwtToken);

      // Perform any other actions you need, such as redirecting to another page
      // console.log("JWT Token:", jwtToken);
      onLogin()
      navigate('/dashboard')
    } else {
      // Handle login failure with an error message
      toast.error("Login failed");
    }
  } catch (error) {
    // Handle other errors (e.g., network issues)
    toast.error("An error occurred during login");
  }
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
                      <Form.Control type="email" name='email' value={email} onChange={handleChange} placeholder="" />
                    </FloatingLabel>
                    <div>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3 title-label position-relative"
                      >
                        <Form.Control
                          type={passwordVisible ? 'text' : 'password'}
                          placeholder="Enter password"
                          name="password"
                          value={password}
                          onChange={handleChange}
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
                    // onClick={handleLoginSubmit}
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