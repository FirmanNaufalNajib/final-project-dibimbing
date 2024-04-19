import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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
    <>
        <div key={category.id}>
          <p>{category.id}</p>
          <h2>{category.name}</h2>
          <img src={category.imageUrl} alt={category.name} style={{ maxWidth: '500px' }} />
          <p> Created {category.createdAt}</p>
          <p>Last Updated {category.updatedAt}</p>
          
          <Link to={`updateCategory/${category.id}`}>
              <button>Edit Category</button>
              </Link>
        </div>

    </>
  );
}

export default CategoryDetail