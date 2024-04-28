import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"
import '../styles.css'

const CategoryDetail = () => {
  const [category, setCategory] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const handleGetCategory = async () => {
      
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
          }
        )
        console.log(res)
        setCategory(res.data.data)

      } catch (error) {
        console.error(error)
      }
    }
    handleGetCategory()
  },  [id])

    return (
    <div className="edit-banner">
    <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar />
      <Link to={`updateCategory/${category.id}`}>
        <i class="button-banner-edit btn btn-primary bi bi-pencil-square"> EDIT CATEGORY</i>
        </Link>
      </div>
      <div className="category-data position-fixed top-50 start-50 translate-middle d-flex align-items-center">
        <div key={category.id}>
          <img src={category.imageUrl} alt={category.name} style={{ maxWidth: '700px' }} />
          <div className="category-data-text">
          <h2>{category.name}</h2>
          <p><strong>ID is</strong> {category.id}</p>
          <p> <strong>Created</strong> {new Date(category.createdAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>
          <p><strong>Last Update</strong> {new Date(category.updatedAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>

          </div>
          </div>
        </div>

    </div>
  );
}

export default CategoryDetail