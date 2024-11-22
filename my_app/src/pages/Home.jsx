import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-primary text-light rounded-3 shadow">
        <h1 className="display-4">Welcome to ReactRover.com</h1>
        <p className="lead">Your one-stop destination for comprehensive MERN Stack courses and professional services.</p>
        <p>Explore our range of services and enhance your skills in web development with our expert-led courses.</p>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-3" to="/services">Our Services</Link>
          <Link className="btn btn-light" to="/contact">Contact Us</Link>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Our Services</h2>
              <p className="card-text">
                We offer various web development services, from full-stack development to consultancy. Whether you need a robust website or a scalable application, we’ve got you covered.
              </p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Courses</h2>
              <p className="card-text">
                Dive into our detailed MERN Stack courses, designed for beginners and professionals. Gain practical experience with MongoDB, Express, React, and Node.js.
              </p>
              <Link to="/courses" className="btn btn-primary">View Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
