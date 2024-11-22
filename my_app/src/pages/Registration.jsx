import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Registration() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: "",
  });
  const navigate = useNavigate();
  const { store_jwt } = useAuth();

  // Generic handler for text inputs
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Specific handler for checkboxes
  const handleCheck = (e) => {
    const { name, checked } = e.target; // Only use 'checked' for checkboxes
     if(checked){
      setUser({
        ...user,
        isAdmin:'true' // Assign the checked value directly
      });
    
     } 
     else{
      setUser({
        ...user,
        isAdmin:'false' // Assign the checked value directly
      });
      
     }
  };
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User details:", user); // Debugging the form data
    const url = "http://localhost:5000/api/auth/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        store_jwt(data.token);
        navigate("/login");
      } else {
        const data = await response.json();
        if (data.message && Array.isArray(data.message)) {
          const errors = data.message
            .map((error) => error.message)
            .join(", ");
          toast.error(errors);
        } else {
          toast.error(data.message || "Registration failed!");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              className="form-control"
              value={user.username}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="isAdmin"
              id="isAdmin"
              className="form-check-input"
              onChange={handleCheck}
            />
            <label htmlFor="isAdmin" className="form-check-label">
              Is Admin
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
