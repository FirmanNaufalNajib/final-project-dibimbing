
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"
import useCategorybyIdAll from "../../hooks/category/useCategorybyIdAll"
import CategoryDetailCard from "../../components/CategoryDetailCard"
import '../styles.css'

const CategoryDetail = () => {
  
  const namePage = "Category Detail"
  const {id} = useParams()
  const {category} = useCategorybyIdAll(id)

    return (
    <div className="edit-banner">

      <div className="page-bar position-fixed top-0 start-0 container">
        <SideBar namePage={namePage}/>
        <Link to={`updateCategory/${category.id}`}>
          <button className="edit-button">Edit Category</button>
        </Link>
      </div>

      <CategoryDetailCard
        category={category}
        key={category.id}
        id={category.id}
        imageUrl={category.imageUrl}
        name={category.name}
        createdAt={category.createdAt}
        updatedAt={category.updatedAt}
      />

    </div>
  );
}

export default CategoryDetail