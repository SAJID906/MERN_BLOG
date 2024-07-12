import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { createUser } = useSelector((state) => state.user.user);
  console.log(createUser);
  return (
    <>
      <div>{createUser ? <Outlet /> : <Navigate to="/signin" />}</div>
    </>
  );
}

export default PrivateRoute;
