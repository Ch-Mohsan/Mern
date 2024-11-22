import { useEffect } from "react";
import { useAuth } from "../store/Auth.jsx";
import { Navigate } from "react-router-dom";

export default function Logout_function() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return <Navigate to="/login" replace />;
}
