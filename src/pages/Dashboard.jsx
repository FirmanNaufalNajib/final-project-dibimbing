import axios from "axios"
import SideBar from "../components/SideBar"
import CategoryOption from "../components/CategoryOption"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import usePromoGet from "../hooks/promo/usePromoGet"
import UserCard from "../components/UserCard"
import useActivitiesGet from "../hooks/activity/useActivityGet"

const Dashboard = () => {

  // const token = localStorage.getItem("token") 
  // const name = localStorage.getItem("name")
  // cosnt const role = localStorage.getItem("role")
  const navigate = useNavigate();
  const namePage = "Dashboard"

  const [banners, setBanners] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const { activities, loading, error } = useActivitiesGet();
  const [categories, setCategories] = useState([])

  const { promos} = usePromoGet();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' }}
        );
       // console.log(res)
        setBanners(res.data.data);
      } catch (error) {
        setError("Gagal memuat daftar banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBanners();
  }, []);

  const handleAllUser = async () => { 
    
    try{
    const res = await axios
    .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user', 
    {headers: 
      { apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
    }
      })
      console.log(res) 
      setAllUser(res.data.data) 
  
    }  catch (err) {
      console.log(err)
    } 
  }
  
    useEffect(() => {
      handleAllUser()
    }, [])

  const handleLogout = async () => { 
    
    try{
    const res = await axios
    .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout',
    {headers: 
      { apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
    }
      })
      console.log(res)
      localStorage.removeItem("token")
      localStorage.removeItem("name")
      localStorage.removeItem("role")

      navigate("/")
      //setTimeout(() => {navigate("/")}, 1000)

    }  catch (err) {
      console.log(err)
    } 
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
      );
        console.log(res)
        setCategories(res.data.data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="dashboard-page">
    <div className="page-bar position-fixed">
      <SideBar namePage={namePage}/>
      <Link to={`createBanner`}>
      <button onClick={handleLogout}>Logout</button>
      </Link>
      </div >

      
      <div className="banner-list-dashboard container row">
      <h2 >Banners</h2>
      {banners.slice(0, 3).map((banner) => (
            <div className="banner-item container justify-content-center" key={banner.id}>

              <div className="banner-info-1 justify-content-center">
                <img className="banner-image mx-auto d-block" src={banner.imageUrl} alt={banner.name}  />   
              </div>
              <div className="banner-info-2 container">
                <h5>{banner.name}</h5>
                <p className="date-banner">Last Updated at {new Date(banner.updatedAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>

    
                <Link to={`/banner/updateBanner/${banner.id}`}>
                  <button className="button-banner-edit d-flex justify-content-end"><i className="bi bi-pencil-square"></i></button>
                </Link>
              </div>

            </div>
          ))}
      </div>

    
      
      <div className='promos-list-dashboard container row'>
      <h2>Promos</h2>
        {promos.slice(0, 3).map(promo => (
          <div class="promos-item container justify-content-center card text-bg-transparent" >
            <Link to={`/promos/promosById/${promo.id}`}>
          <img src={promo.imageUrl} class="promos-image" alt={promo.title}   style={{ maxWidth: '350px' }}/>
          <div class="card-img-overlay promos-info-1-user">
            <h5 class="promos-title">{promo.title}</h5>
            <p class="promos-price">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(promo.promo_discount_price)}</p>
            <p class="promos-term"><small>{promo.terms_condition}</small></p>
          </div>
          </Link>
        </div>

          
        ))}
      </div>

      
      
      <div  className="user-page-content container">
      <h2>Users</h2>
            {allUser.slice(0, 3).map((user) => (
      user.role === "user" && (
          <div className="user-item container d-flex flex-row justify-content-between align-items-center">

            <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            phoneNumber={user.phoneNumber}
            profilePictureUrl={user.profilePictureUrl}
            role={user.role}
            />
            
          <Link to={`/allUser/updateProfile/${user.id}`}>
          <i class="btn btn-outline-primary bi bi-person-lines-fill">Profile</i>
          </Link>

          <Link to={`/allUser/updateUserRole/${user.id}`}>
          <i class="btn btn-outline-primary bi bi-person-badge">Role</i>
          </Link>
      </div>
      )
    ))}
      </div>

     
      <div className="activity-list-dashboard container row">
      <h2>Activities</h2>
      {activities.slice(0, 3).map(activity => (
        <div className="activity-item container justify-content-center" key={activity.id}>
          <div className="activity-info-1 justify-content-center">
          <img className="activity-image mx-auto d-block" src={activity.imageUrls[1]} alt={activity.title} style={{ maxWidth: '700px' }} />
          </div>
          <div className="activity-info-2 container">
          <h2>{activity.title}</h2>
          </div>
          <Link to={`/activities/activityDetail/${activity.id}`}>
             <i class="button-activity-edit bi bi-card-list d-flex justify-content-end"></i>
          </Link>
        </div>
      ))}
      </div>

      
      <div className="category-list-dashboard container row">
      <h2>Categories</h2>
      {categories.slice(0, 3).map(category => (
        <div className="category-item container justify-content-center" key={category.id}>

          
          <div className="category-info-1 justify-content-center">
          <img className="category-image mx-auto d-block" src={category.imageUrl} alt={category.name} style={{ maxWidth: '300px' }} />
          </div>

          <div className="category-info-2 container">
          <h4>{category.name}</h4>
          <Link to={`/category/categoryDetail/${category.id}`}>
            <i class="button-category-edit bi bi-card-list d-flex justify-content-end"></i>
          </Link>
          </div>
        </div>
      ))}
      </div>


          
          
  </div>
  )
}

export default Dashboard