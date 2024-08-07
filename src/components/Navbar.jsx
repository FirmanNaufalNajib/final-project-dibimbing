import { Link } from "react-router-dom"
import { useEffect } from "react"; 
import useLogoutGet from "../hooks/auth/useLogoutGet"
import PropTypes from 'prop-types';
import './styles-components.css'

const Navbar = () => {

  const userLogIn = localStorage.getItem("name")
  const handleLogout = useLogoutGet();

  
  useEffect(() => {
    const handleNavbarColor = () => {
      const navbar = document.querySelector(".navbar")
      if (window.scrollY > 250) {
        navbar.classList.add("navbar-scroll")
      } else {
        navbar.classList.remove("navbar-scroll")
      }
    }
    window.addEventListener('scroll', handleNavbarColor);

    
    return () => {
      window.removeEventListener('scroll', handleNavbarColor);
    };
  }, []); 

  return (
    <div className="navbar fixed-top"> 
      <Link to="/">
        <h1>Jalan Jalan</h1>
      </Link>
     
      <div className="sidebar-username d-flex">
      <button onClick={handleLogout}><i className="bi bi-arrow-bar-left" ></i></button>
      <p>hai <b>{userLogIn}</b></p>
      </div>
      <div className="navbar-menu">

            <Link to="/promos">
              <h5>Promo</h5>
            </Link>
            <Link to="/activities">
              <h5>Activity</h5>
            </Link>
            
      </div>  
    </div>
  )
}

Navbar.propTypes = {
  handleLogout: PropTypes.func
}

export default Navbar
