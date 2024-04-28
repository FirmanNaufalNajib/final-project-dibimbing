import { Link } from "react-router-dom"
import './styles-components.css'

import './styles-components.css'

const Navbar = () => {

  const userLogIn = localStorage.getItem("name")

  return (
    <div className="navbar fixed-top">
      <Link to="/">
        <h1>Jalan Jalan</h1>
      </Link>
     

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