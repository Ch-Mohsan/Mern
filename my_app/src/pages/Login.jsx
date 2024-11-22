import { useState } from "react";
import{ useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from "../store/Auth.jsx";
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const navigate=useNavigate()
  const {store_jwt}=useAuth()
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User details:", user);
    const url='http://localhost:5000/api/auth/login'
    const reponse= await fetch(url,
      {method:'POST',
        headers: {
          'Content-Type': 'application/json'  // Corrected header
        },
      body:JSON.stringify(user)
    })
     console.log(reponse)
    const data=await reponse.json();
    console.log(data)
    if(reponse.ok){
     // alert('login successful')
      store_jwt(data.token)
      
      navigate('/')
      
    }
    else{
      toast.error('Invalid crendational')
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login
