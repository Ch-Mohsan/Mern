import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/Auth';
function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isLoggedIn, user } = useAuth();


  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light';
    console.log('admin', user.isAdmin)
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">ReactRover</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>
            </li>
            {user.isAdmin ? <>
              <li className="nav-item">
                <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Admin</NavLink>
              </li>
            </> : ''}
          </ul>
          <div className="d-flex align-items-center">
            {isLoggedIn ?
              <NavLink className="btn btn-outline-primary me-2" to="/logout">Logout</NavLink> : <>
                <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
                <NavLink className="btn btn-primary me-3" to="/register">Sign Up</NavLink>
              </>}



            {/* Toggle Switch */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="themeSwitch"
                checked={isDarkMode}
                onChange={toggleMode}
              />
              <label className="form-check-label" htmlFor="themeSwitch">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
