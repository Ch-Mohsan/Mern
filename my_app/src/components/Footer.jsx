import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>ReactRover</h5>
            <p>Your one-stop solution for all things web and mobile development.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" className="text-light text-decoration-none">Facebook</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="https://twitter.com" className="text-light text-decoration-none">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" className="text-light text-decoration-none">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 ReactRover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
