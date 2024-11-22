import { FaHandshake, FaUsers, FaTools, FaRocket } from 'react-icons/fa';
import { useAuth } from '../store/Auth';
import { useEffect } from 'react';

function About() {
  
  const {user}=useAuth();
  
  
  return (
    <div className="container my-5">
     <div className="d-flex justify-content-between align-items-center mb-4">
  {user?<h3 className="mb-0">Hi, {user.username}!</h3>:''}
  <h1 className="mb-0 ms-3">About Us</h1>
</div>

     
      
      <p className="lead text-center mb-5">
        <strong>ReactRover</strong> is a dynamic platform built to cater to both administrators and users, creating an interactive space for services and solutions.
      </p>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            At <strong>ReactRover</strong>, our mission is to simplify the interaction between service providers and their clients. We strive to create a platform that supports the seamless presentation of services, fosters connections, and enhances user engagement through a clean and responsive interface.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
            We envision <strong>ReactRover</strong> becoming a go-to platform for connecting users with the services they need. We are committed to continuously innovating and expanding our features to meet the evolving needs of both administrators and users.
          </p>
        </div>
      </div>
      
      <hr className="my-5" />

      <h2 className="text-center mb-4">Why Choose Us</h2>
      
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <FaHandshake size={50} className="text-primary mb-3" />
          <h4>Reliability</h4>
          <p>Trustworthy and dependable, ensuring secure and reliable service connections.</p>
        </div>
        <div className="col-md-3 mb-4">
          <FaUsers size={50} className="text-primary mb-3" />
          <h4>User-Friendly</h4>
          <p>Simple, intuitive design that enhances the user experience on every interaction.</p>
        </div>
        <div className="col-md-3 mb-4">
          <FaTools size={50} className="text-primary mb-3" />
          <h4>Customizable</h4>
          <p>Adaptable solutions that cater to the unique needs of our users and admins.</p>
        </div>
        <div className="col-md-3 mb-4">
          <FaRocket size={50} className="text-primary mb-3" />
          <h4>Scalable</h4>
          <p>Designed to grow with you, from a small team to a large organization.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
