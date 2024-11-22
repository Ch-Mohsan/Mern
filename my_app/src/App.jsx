import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './pages/About';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error_404 from './pages/Error_404';
import Logout from './pages/Logout';
import Admin_panel from './Layouts/Admin_panel';
import Users_view from './Layouts/Users_view';
import Conact_view from './Layouts/Conact_view';
import UpdateUser from './Layouts/UpdateUser';



function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error_404 />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin_panel />} >
        <Route path="viewcontact" element={<Conact_view />} />
        <Route path="users" element={<Users_view />} />
        <Route path="updateUser" element={<UpdateUser />} />

        </Route>

      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
<NavBar/>
export default App;
