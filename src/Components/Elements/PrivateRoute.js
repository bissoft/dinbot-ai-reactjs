import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isSignedIn, children }) {
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
