import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../store/Auth"; // If you are using Auth context
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const uri = "http://localhost:5000/api/admin/getUser"; // Replace with your actual API endpoint
const updateUri = "http://localhost:5000/api/admin/updateUser"; // Replace with your actual API endpoint

export default function UpdateUser() {
  const [data, setData] = useState({
    username: "",
    email: "",
  });
  const location = useLocation();
  const userId = location.state?.userId;

  const { token } = useAuth(); // Get token from context or replace with your token logic
  const navigate = useNavigate();

  // Fetch user data by ID
  const getUser = async () => {
    try {
      const response = await fetch(`${uri}/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setData(userData); // Update state with user data
      } else {
        console.error("Failed to fetch user:", response);
        alert("Error: Could not fetch user data.");
        navigate('/admin/users')
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("Error: Could not fetch aaaaa user data.");
    }
  };

  // Update user data
  const updateData = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    try {
      const response = await fetch(`${updateUri}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User is updated successfully!");
      } else {
        
        toast.error("Error: Could not update user data.");
      }
    } catch (error) {
    
      alert("Error: Could not update user data.");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getUser(); // Fetch user data when component mounts
  }, [userId]);

  return (
    <div className="form-container">
      <h2 className="form-header">Update User</h2>
      <form onSubmit={updateData}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input class="form-control form-control-lg" type="text"  value={data.username}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input class="form-control form-control-lg" type="email"
            value={data.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
