
//import { useParams } from "react-router-dom"
import '../styles.css';
import Navbar from "../../components/Navbar"
import useActivitybyCategory from "../../hooks/activity/useActivitybyCategory"
const ActivityUser = () => {

//const {id} = useParams()

const {anActivity} = useActivitybyCategory()
console.log(anActivity)


  return (
    <>
        <Navbar />

    {anActivity.length > 0 ? 
  
    <div className="activity-container container-fluid" key={anActivity.id}>
      
      <div className="activity-info-1 d-flex align-items-center justify-content-between">
      <h2 className="activity-title">{anActivity.title}</h2>     
      <p className="activity-description">{anActivity.description}</p>
      </div>

      <div className="activity-images" key={anActivity.id}>
      {anActivity.imageUrls && anActivity.imageUrls.map((url) => 
      (<img className="activity-image" key={url} src={url} alt={anActivity.title} style={{ maxWidth: '300px' }} />
      ))}
      </div>

      
      <div className="activity-info-2 d-flex align-items-center justify-content-between">
      <div className="activity-price">
      <p><i className="bi bi-cash"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(anActivity.price)}</p>
      <p><i className="bi bi-percent"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(anActivity.price_discount)}</p>
      </div>
      
      <div className="activity-rating">
      <p><i className="bi bi-star-half"></i>   {anActivity.rating}</p>
      <p><i className="bi bi-chat-dots-fill"></i>   {anActivity.total_reviews}</p>
      </div>
      </div>
      
      <div className="activity-info-3">
      <div >
      <h5>Facilites</h5>
      <p><i className="bi bi-badge-wc-fill"></i>{anActivity.facilities}</p>
      </div>

      <div className="activity-location d-flex">
      <i className="bi bi-geo-alt-fill"></i>
      <div className="activity-location-data">
      <h5>Address</h5>
      <p>{anActivity.address}</p>
      <h5>City</h5>
      <p>{anActivity.province}</p>
      </div>
      </div>
      
      </div>
      
      <iframe src={anActivity.location_maps} title={`${anActivity.title} Maps Location`}></iframe>

    </div>
     : <h1>Activity Not Found</h1>}
    </>
  )
}

export default ActivityUser