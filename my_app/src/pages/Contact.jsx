import { useState, useEffect } from "react";
import { useAuth } from "../store/Auth"; // Assuming useAuth hook provides user state
const uri = 'http://localhost:5000/api/form/contect'; // Corrected the URL from 'contect' to 'contact'
import { toast } from 'react-toastify';


function Contact() {
  const { user } = useAuth();  // Assuming user state is provided via context
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    // If user is logged in, populate the fields with the user's info
    if (user && user.username && user.email) {
      setContact({
        username: user.username,
        email: user.email,
        message: ""  // Initialize message as empty
      });
    }
  }, []); // Only runs when 'user' changes

  const onChange = (e) => {
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"  // Corrected header key
        },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        toast.success("Message Sent!");
        setContact({ username: "", email: "", message: "" }); // Optionally reset form
      } else{
        const data= await response.json();
        if(data.message&& Array.isArray(data.message)){
          const errors = data.message.map((error) => {
            return error.message;
          }).join(',');
          toast.error(errors)
        }
      }
      
    }
     catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
      <h2 className="mb-4">Contact Us</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">Full Name</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          placeholder="Enter full name here"
          onChange={onChange}
          value={contact.username}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter email here"
          onChange={onChange}
          value={contact.email}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Enter your message here"
          rows="4"
          onChange={onChange}
          value={contact.message}
          autoComplete="off"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
}

export default Contact;
