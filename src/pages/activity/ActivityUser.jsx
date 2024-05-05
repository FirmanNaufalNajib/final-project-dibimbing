import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import '../styles.css';
import Navbar from "../../components/Navbar"
const activityUser = () => {

  const {id} = useParams()

 const {anActivity, loading, error} = useActivitybyCategory()


  return (
    <>
        <Navbar />

    {anActivity.length > 0 ? 
  
    <div className="activity-container container-fluid" key={activity.id}>
      
      <div className="activity-info-1 d-flex align-items-center justify-content-between">
      <h2 className="activity-title">{activity.title}</h2>     
      <p className="activity-description">{activity.description}</p>
      </div>

      <div className="activity-images">
      {activity.imageUrls && activity.imageUrls.map((url) => 
      (<img className="activity-image" src={url} alt={activity.title} style={{ maxWidth: '300px' }} />
      ))}
      </div>

      
      <div className="activity-info-2 d-flex align-items-center justify-content-between">
      <div className="activity-price">
      <p><i className="bi bi-cash"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(activity.price)}</p>
      <p><i class="bi bi-percent"></i>  {Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(activity.price_discount)}</p>
      </div>
      
      <div className="activity-rating">
      <p><i class="bi bi-star-half"></i>   {activity.rating}</p>
      <p><i class="bi bi-chat-dots-fill"></i>   {activity.total_reviews}</p>
      </div>
      </div>
      
      <div className="activity-info-3">
      <div >
      <h5>Facilites</h5>
      <p><i class="bi bi-badge-wc-fill"></i>{activity.facilities}</p>
      </div>

      <div className="activity-location d-flex">
      <i class="bi bi-geo-alt-fill"></i>
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
     : <h1>Activity Not Found</h1>}
    </>
  )
}

export default activityUser