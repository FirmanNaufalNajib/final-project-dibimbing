
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import CategoryOption from "../../components/CategoryOption"
import useCategorybyIdAll from "../../hooks/category/useCategorybyIdAll"
import useActivitybyCategory from "../../hooks/activity/useActivitybyCategory"
import '../styles.css';

const ActivityByCategoryId = () => {

  //const {id} = useParams()
  const { anActivity } = useActivitybyCategory()
  const { category } = useCategorybyIdAll()
  const navigate = useNavigate()

  const handleCategoryActivityChange = (categoryId) => {
    navigate(`/activities/activityByCategory/${categoryId}`);
  };
  console.log("test",category)
  return (
    <>

      <Navbar />
      <div className="hero-image">
        <img src={category.imageUrl} className="d-block w-100" alt="slide1"/>
         <div className="home-banner carousel-caption  fs-2  position-absolute top-50 start-50 translate-middle">
            <p className="hero-text">to discover {category.name}
                <CategoryOption handleCategoryActivityChange={handleCategoryActivityChange}/>
            </p>
        </div>
      </div>

    {anActivity.length > 0 ? 
    anActivity.map((activity) => 
    (
    <div className="activity-container container-fluid" key={activity.id}>
 
      <div className="activity-info-1 d-flex align-items-center justify-content-between">
      <h2 className="activity-title">{activity.title}</h2>     
      <p className="activity-description">{activity.description}</p>
      </div>

      <div className="activity-images">
      {activity.imageUrls && activity.imageUrls.map((url) => 
      (<img key={url} className="activity-image" src={url} alt={activity.title} style={{ maxWidth: '300px' }} />
      ))}
      </div>

      <div className="activity-info-2 d-flex align-items-center justify-content-between">
      <div className="activity-price">
      <p><i className="bi bi-cash"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(activity.price)}</p>
      <p><i className="bi bi-percent"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(activity.price_discount)}</p>
      </div>
      
      <div className="activity-rating">
      <p><i className="bi bi-star-half"></i>   {activity.rating}</p>
      <p><i className="bi bi-chat-dots-fill"></i>   {activity.total_reviews}</p>
      </div>
      </div>
      
      <div className="activity-info-3">
      <div >
      <h5>Facilites</h5>
      <p><i className="bi bi-badge-wc-fill"></i>{activity.facilities}</p>
      </div>

      <div className="activity-location d-flex">
      <i className="bi bi-geo-alt-fill"></i>
      <div className="activity-location-data">
      <h5>Address</h5>
      <p>{activity.address}</p>
      <h5>City</h5>
      <p>{activity.province}</p>
      </div>
      </div>
      
      </div>
      
      <iframe src={activity.location_maps} title={`${activity.title} Maps Location`}></iframe>
  
    </div>
    )) : <h1 className="position-absolute top-50 start-50 translate-middle">Activity Not Found</h1>}
    </>
  )
}

export default ActivityByCategoryId