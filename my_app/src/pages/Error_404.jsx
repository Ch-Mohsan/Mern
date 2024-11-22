import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to have routing set up
import '../App.css'
export default function Error_404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#ff6b6b' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#333' }}>Page Not Found</h2>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="btn btn-primary mt-4" style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
        Go to Home Page
      </Link>
    </div>
  );
}
