import { Link } from "react-router-dom"
import './styles-components.css'
const SideBar = (props) => {
  const userLogIn = localStorage.getItem("name")

  return (
    <div className="sidebar">
      <h1>{props.namePage}</h1>
      <p>hai <b>{userLogIn}</b></p>
      <p></p>
    <div className="sidebar-menu">
    <Link to="/banner">
            <i class="bi bi-file-earmark-image"></i>
            <h5>Banner</h5>
          </Link>
          <Link to="/promos">
          <i class="bi bi-megaphone-fill"></i>
            <h5>Promo</h5>
          </Link>
          <Link to="/activities">
          <i class="bi bi-compass"></i>
            <h5>Activity</h5>
          </Link>
          <Link to="/allUser">
          <i class="bi bi-people-fill"></i>
            <h5>User</h5>
          </Link>
          <Link to="/category">
          <i class="bi bi-tags-fill"></i>
            <h5>Category</h5>
          </Link>
    </div>
      
      <Link className="back" to="/dashboard">
      <i class="bi bi-arrow-bar-left"></i>
        <h5>Dashboard</h5>
      </Link>




    </div>
  )
}

export default SideBar