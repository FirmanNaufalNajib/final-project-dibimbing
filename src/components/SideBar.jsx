import { Link } from "react-router-dom"
import './styles-components.css'
import { useNavigate } from "react-router-dom"
import useLogoutGet from "../hooks/useLogoutGet"
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
      <button><i class="bi bi-arrow-bar-left" ></i></button>
      <p>hai <b>{userLogIn}</b></p>
      </div>
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
    

  <div className="back">
      <button className="back-button">
        <i class="bi bi-arrow-counterclockwise" onClick={goBack}>back</i>
      </button>
 </div>
        

    





    </div>
  )
}

export default SideBar