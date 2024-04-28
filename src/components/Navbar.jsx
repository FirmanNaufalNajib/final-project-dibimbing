import { Link } from "react-router-dom"
import './styles-components.css'
import useLogoutGet from "../hooks/useLogoutGet"
import './styles-components.css'

const Navbar = () => {

  const userLogIn = localStorage.getItem("name")
  const handleLogout = useLogoutGet();

  

  return (
    <div className="navbar fixed-top">
      <Link to="/">
        <h1>Jalan Jalan</h1>
      </Link>
     
      <div className="sidebar-username d-flex">
      <button onClick={handleLogout}><i class="bi bi-arrow-bar-left" ></i></button>
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