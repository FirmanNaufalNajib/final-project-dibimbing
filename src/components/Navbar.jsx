import { Link } from "react-router-dom"
import { useEffect } from "react"; // tambahkan useEffect
import useLogoutGet from "../hooks/auth/useLogoutGet"
import './styles-components.css'

const Navbar = () => {

  const userLogIn = localStorage.getItem("name")
  const handleLogout = useLogoutGet();

  // Menggunakan useEffect untuk menambahkan event listener saat komponen dimuat
  useEffect(() => {
    const handleNavbarColor = () => {
      const navbar = document.querySelector(".navbar")
      if (window.scrollY > 300) {
        navbar.classList.add("navbar-scroll")
      } else {
        navbar.classList.remove("navbar-scroll")
      }
    }
    window.addEventListener('scroll', handleNavbarColor);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleNavbarColor);
    };
  }, []); // [] menandakan bahwa effect hanya dijalankan saat komponen dimuat

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

export default Navbar
