import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import usePromoGet from '../hooks/promo/usePromoGet';
import useActivitiesGet from '../hooks/activity/useActivityGet';
import CategoryOption from '../components/CategoryOption';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const { promos} = usePromoGet();
  const { activities } = useActivitiesGet();
  
  const token = localStorage.getItem("token")
  const name = localStorage.getItem("name")
  const navigate = useNavigate();

  const handleCategoryActivityChange = (categoryId) => {
    navigate(`/activities/activityByCategory/${categoryId}`);
  };

  if (!token) {
    return (

      <>
      
      <div className="hero-image">
              <img src={'https://free4kwallpapers.com/uploads/originals/2019/05/07/ecosystem-tropical-rain-forest-fore-wallpaper.jpg'} className="d-block w-100" alt="slide1"/>
              <div className="home-banner carousel-caption d-none d-md-block fs-2 text-dark-emphasis position-absolute top-50 start-50 translate-middle rounded-circle">
                <h1>Jalan Jalan</h1>
                <p className="hero-text">to discover everything</p>

                
                <Link to="/login" >LOGIN</Link> or
                <Link to="/register">SIGN UP</Link>
              </div>
            </div>
      </>
    )
  }

  return (
    <div className='home-page'>
     
      <div className="hero-image">
              <img src={'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="d-block w-100" alt="slide1"/>
              <div className="home-banner carousel-caption  fs-2  position-absolute top-50 start-50 translate-middle">
                <p className="hero-text">here's {name} goin to discover everything
                <CategoryOption
                handleCategoryActivityChange={handleCategoryActivityChange}/>
                </p>
            </div>
      </div>
      <Navbar />

<div className='content-home-page container-fluid'>

<div className='activity-home d-flex'>

<Link to={`/activities`}><h3>get activities!</h3></Link>
<div className="activity-list-home container row">
      {activities.slice(0, 3).map(activity => (
        <div className="activity-item-home container " key={activity.id}>
          <div className="activity-info-1-home justify-content-center">
          <img className="activity-image-home mx-auto d-block" src={activity.imageUrls[0]} alt={activity.title} style={{ maxWidth: '700px' }} />
          </div>
          <div className="activity-info-2-home container">
          <h2>{activity.title}</h2>
          </div>
          <Link to={`activityDetail/${activity.id}`}>
             <i class="button-activity-edit-home bi bi-card-list d-flex justify-content-end"></i>
          </Link>
        </div>
      ))}
      </div>
</div>


<div className='promo-list-home d-flex'>
      <Link to={`/promos`}><h3>Get Promo!</h3></Link>
      {promos.slice(0, 4).map(promo => (
          <div class="promos-item container justify-content-center card text-bg-transparent" >
            <Link to={`promosById/${promo.id}`}>
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


      </div>
    </div>
  );
};


        

        export default Home;
