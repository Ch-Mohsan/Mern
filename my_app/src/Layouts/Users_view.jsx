import React, { useEffect, useState } from "react"; 
import '../App.css';
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";


const uri = 'http://localhost:5000/api/admin/users';
const deleteUri = 'http://localhost:5000/api/admin/deleteUser';

export default function Users_view() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

  // Fetch all users
  const getAllusers = async () => {
    try {
      const response = await fetch(uri, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user by ID
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${deleteUri}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        // Refresh the list of users after successful deletion
        getAllusers();
      } else {
        console.error("Failed to delete user:", response.statusText);
        alert("Error: Could not delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error: Could not delete user.");
    }
  };

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="users-view">
      <h1 className="text-center">User List</h1>
      <div className="container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      DELETE
                    </button>
                  </td>
                  <td>
  <Link to="/admin/updateUser"state={{userId:user._id}}>
    <button className="btn btn-success">
      Edit
    </button>
  </Link>
</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
