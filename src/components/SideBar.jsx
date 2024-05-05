import { Link } from "react-router-dom"
import './styles-components.css'
import { useNavigate } from "react-router-dom"
import useLogoutGet from "../hooks/auth/useLogoutGet"
const SideBar = (props) => {
  const userLogIn = localStorage.getItem("name")

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleLogout = useLogoutGet();


  return (
    <div className="sidebar">
      <h1>{props.namePage}</h1>
      <div className="sidebar-username d-flex">
      <button onClick={handleLogout}><i className="bi bi-arrow-bar-left" ></i></button>
      <p>hai <b>{userLogIn}</b></p>
      </div>
      <p></p>
    <div className="sidebar-menu">
    <Link to="/banner">
            <i className="bi bi-file-earmark-image"></i>
            <h5>Banner</h5>
          </Link>
          <Link to="/promos">
          <i className="bi bi-megaphone-fill"></i>
            <h5>Promo</h5>
          </Link>
          <Link to="/activities">
          <i className="bi bi-compass"></i>
            <h5>Activity</h5>
          </Link>
          <Link to="/allUser">
          <i className="bi bi-people-fill"></i>
            <h5>User</h5>
          </Link>
          <Link to="/category">
          <i className="bi bi-tags-fill"></i>
            <h5>Category</h5>
          </Link>
    </div>
    

  <div className="back">
      <button className="back-button">
        <i className="bi bi-arrow-counterclockwise" onClick={goBack}>back</i>
      </button>
 </div>
        
<div className="sidebar-menu-general">
  <Link to="/dashboard">
    <i className="bi bi-pc">Dashboard</i>
  </Link>

  <Link to="/">
    <i className="bi bi-pc">Home</i>
  </Link>
</div>
    





    </div>
  )
}

export default SideBar