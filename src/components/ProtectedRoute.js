import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  return sessionStorage.getItem("loginToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/unautheticated" />
  );
}

export default ProtectedRoute;
