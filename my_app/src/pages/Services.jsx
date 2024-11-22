import { useState, useEffect } from "react"; 
import '../App.css'
const uri = 'http://localhost:5000/api/data/service';

function Services() {
  const [services, setServices] = useState([]);  

  const fetchServices = async () => {
    try {
      const response = await fetch(uri);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.responce)) {
          setServices(data.responce);  
        } else {
          console.error('Data is not an array:', data.responce);
        }
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);


  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="card" style={{ width: "100%" }}>
            <img src={service.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{service.service}</h5>
              <p className="card-text">{service.description}</p>
              <p className="card-text">Price: {service.price}</p>
              <p className="card-text">Provider: {service.provider}</p>
              <a href="#" className="btn btn-primary">Let's Join</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default Services;
