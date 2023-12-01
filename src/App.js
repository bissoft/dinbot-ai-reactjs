import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Dashboard from "./Components/Elements/Dashboard";
import Pos from "./Components/Elements/Pos";
import Socialmedia from "./Components/Elements/Socialmedia";
import Feedback from "./Components/Elements/Feedback";
import Analysis from "./Components/Elements/Analysis";
import Dinemenu from "./Components/Elements/Dinemenu";
import Login from "./Components/Elements/Login";
import Signup from "./Components/Elements/Signup";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import PrivateRoute from "./Components/Elements/PrivateRoute";
import Profile from "./Components/Elements/Profile";
function App() {
  const navigate = useNavigate()
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem('isSignedIn') === 'true';
  });

  const [removeLogo,setRemoveLogo] = useState(false)

  const signin = () => {
    setIsSignedIn(true);
    setRemoveLogo(true)
  };

  const signout = () => {
    setIsSignedIn(false);
    setRemoveLogo(false)
    localStorage.removeItem("isSignedIn");
    navigate("/");
  };

  useEffect(() => {
 localStorage.setItem('isSignedIn', isSignedIn.toString());
  }, [isSignedIn]);
  return (
    <>
      <ToastContainer/>

        <Routes>
        <Route path="/" element={<Login onLogin={signin}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route element={<Base isAuthenticated={isSignedIn} onLogout={signout} onLogin={signin} onRemove={removeLogo}/>} >
          <Route path="/dashboard" element={ <PrivateRoute isSignedIn={isSignedIn}> <Dashboard onLogout={signout} /></PrivateRoute>} />
          <Route path="/dinemenu" element={ <PrivateRoute isSignedIn={isSignedIn}> <Dinemenu onLogout={signout} /></PrivateRoute>} />
          <Route path="/pos" element={ <PrivateRoute isSignedIn={isSignedIn}> <Pos onLogout={signout} /></PrivateRoute>} />
          <Route path="/socialmedia" element={ <PrivateRoute isSignedIn={isSignedIn}> <Socialmedia onLogout={signout} /></PrivateRoute>} />
          <Route path="/feedback" element={ <PrivateRoute isSignedIn={isSignedIn}> <Feedback onLogout={signout} /></PrivateRoute>} />
          <Route path="/analysis" element={ <PrivateRoute isSignedIn={isSignedIn}> <Analysis onLogout={signout} /></PrivateRoute>} />
          <Route path="/profile" element={ <PrivateRoute isSignedIn={isSignedIn}> <Profile onLogout={signout} /></PrivateRoute>} />
          </Route>
        </Routes>

    </>
  );
}

export default App;
