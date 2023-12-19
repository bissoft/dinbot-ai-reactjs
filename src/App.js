import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Dashboard from "./Components/Elements/Pages/Dashboard";
import Pos from "./Components/Elements/Pages/Pos";
import Socialmedia from "./Components/Elements/Pages/Socialmedia";
import Feedback from "./Components/Elements/Pages/Feedback";
import Analysis from "./Components/Elements/Pages/Analysis";
import Dinemenu from "./Components/Elements/Pages/Dinemenu";
import Profile from "./Components/Elements/Pages/Profile";
import Login from "./Components/Elements/Pages/Login";
import Signup from "./Components/Elements/Pages/Signup";
import Users from "./Components/Elements/Pages/Users";
import Roles from "./Components/Elements/Pages/Roles";
import Permissions from "./Components/Elements/Pages/Permissions";
import PrivateRoute from "./Components/Elements/PrivateRoute";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import SubscriptionPackages from "./Components/Elements/Pages/SubscriptionPackages";
import SubscriptionServices from "./Components/Elements/Pages/SubscriptionServices";
import RestaurantList from "./Components/Elements/Pages/RestaurantList";
import SuperAdmin from "./Components/Elements/Pages/SuperAdmin";
function App() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem("isSignedIn") === "true";
  });
  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("user");
    sessionStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn.toString());
  }, [isSignedIn]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login onLogin={signin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <Base
              isAuthenticated={isSignedIn}
              onLogout={signout}
              onLogin={signin}
            />
          }
        >
          <Route
            path="/super-admin"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <SuperAdmin onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Dashboard onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/dinemenu"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Dinemenu onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/pos"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Pos onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/socialmedia"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Socialmedia onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/restaurant-list"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <RestaurantList onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Feedback onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/analysis"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Analysis onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/subscription-packages"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <SubscriptionPackages onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/subscription-services"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <SubscriptionServices onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Profile onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/usermanagement/users"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Users onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/usermanagement/roles"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Roles onLogout={signout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/usermanagement/permission"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                {" "}
                <Permissions onLogout={signout} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
