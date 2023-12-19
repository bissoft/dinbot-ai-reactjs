import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function PrivateRoute({ isSignedIn, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const userInSessionStorage = sessionStorage.getItem("user");
    if (!userInSessionStorage) {
      navigate("/");
    }
  }, [navigate]);
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Outlet />
      {children}
    </>
  );
}

export default PrivateRoute;
