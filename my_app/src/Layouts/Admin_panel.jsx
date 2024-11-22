import { NavLink, Outlet } from 'react-router-dom';

export default function Admin_panel() {
  return (
    <div>
      <h1 className="text_center">Welcome to Admin Panel</h1>
      <div className="container">
        <NavLink className="btn btn-outline-primary me-2" to="/admin/users">
          View Users
        </NavLink>
        <NavLink className="btn btn-outline-primary me-2" to="/admin/viewcontact">
          View Contacts
        </NavLink>
        {/* Render the nested route's components */}
        <Outlet />
      </div>
    </div>
  );
}
