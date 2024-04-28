import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"

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
      <div className="category-page d-flex">
      <div className="page-bar position-fixed">
      <SideBar/>
      </div>

    <div className="category-activity-content container d-flex align-items-start" key={anActivity.id}>

      
    
    <div className="category-activity-list row position-fixed">
      <img src={anActivity.category?.imageUrl} alt={anActivity.category?.name}/>
      <h4>{anActivity.category?.name}</h4>
      <p>{anActivity.category?.id}</p>
      <p>Created At : {anActivity.category?.createdAt}</p>
      <p>Update At : {anActivity.category?.updatedAt}</p>
      </div>

  
    
    <div className="category-activity-data col">

      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <td>
              {anActivity.imageUrls && anActivity.imageUrls.map((url) => 
              (
                <img src={url} alt={anActivity.title} style={{ maxWidth: '300px' }} />
              ))}
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td><h2>{anActivity.title}</h2></td>
          </tr>
          <tr>
            <th>ID</th>
            <td><p>{anActivity.id}</p></td>
          </tr>
          <tr>
            <th>Description</th>
            <td><p>{anActivity.description}</p></td>
          </tr>
          <tr>
            <th>Price</th>
            <td><p>{anActivity.price}</p></td>
          </tr>
          <tr>
            <th>Price Discount</th>
            <td><p>{anActivity.price_discount}</p></td>
          </tr>
          <tr>
            <th>Rating</th>
            <td><p>{anActivity.rating}</p></td>
          </tr>
          <tr>
            <th>Total Review</th>
            <td><p>{anActivity.total_reviews}</p></td>
          </tr>
          <tr>
            <th>Facilites</th>
            <td><p>{anActivity.facilities}</p></td>
          </tr>
          <tr>
            <th>Address</th>
            <td><p>{anActivity.address}</p></td>
          </tr>
          <tr>
            <th>Province</th>
            <td><p>{anActivity.province}</p></td>
          </tr>
          <tr>
            <th>City</th>
            <td><p>{anActivity.city}</p></td>
          </tr>
          <tr>
            <th>Location Maps</th>
            <td><iframe src={anActivity.location_maps} title={`${anActivity.title} Maps Location`}></iframe></td>
          </tr>
          <tr>
            <th>Created At</th>
            <td><p>{anActivity.createdAt}</p></td>
          </tr>
          <tr>
            <th>Updated At</th>
            <td><p>{anActivity.updatedAt}</p></td>
          </tr>
        </tbody>
      </table>
  
      <Link to={`updateActivity/${anActivity.id}`}>
          <button>Edit</button>
      </Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default ActivityDetail