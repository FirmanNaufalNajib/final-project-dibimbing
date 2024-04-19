import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ActivityDetail = () => {
  const [anActivity, setAnActivity] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const handleGetActivity = async () => {
      
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
          }
        )
        console.log(res)
        setAnActivity(res.data.data)

      } catch (error) {
        console.error(error)
      }
    }
    handleGetActivity()
  },  [id])

  return (
    <>
    <h1>Detail Activity</h1>
    <div key={anActivity.id}>
      <h2>{anActivity.title}</h2>
      <p>{anActivity.id}</p>
      {anActivity.imageUrls && anActivity.imageUrls.map((url) => 
      (
      <img src={url} alt={anActivity.title} style={{ maxWidth: '300px' }} />
      ))}
      <p>{anActivity.description}</p>

      <h3>Category</h3>
      <h4>{anActivity.category?.name}</h4>
      <img src={anActivity.category?.imageUrl} alt={anActivity.category?.name}/>
      <p>{anActivity.category?.id}</p>
      <p>{anActivity.category?.createdAt}</p>
      <p>{anActivity.category?.updatedAt}</p>

      <p>{anActivity.price}</p>
      <p>{anActivity.price_discount}</p>
      <p>{anActivity.rating}</p>
      <p>{anActivity.total_reviews}</p>
      <p>{anActivity.facilities}</p>
      <p>{anActivity.address}</p>
      <p>{anActivity.province}</p>
      <p>{anActivity.city}</p>
      <p>{anActivity.location_maps}</p>
      <p>{anActivity.createdAt}</p>
      <p>{anActivity.updatedAt}</p>
  
      <Link to={`updateActivity/${anActivity.id}`}>
          <button>Edit</button>
      </Link>
    </div>
    </>
  )
}

export default ActivityDetail