import { Link } from 'react-router-dom';
const CategoryCard = (props) => {

  return (
    <div className="category-item container justify-content-center" key={props.id}>

          <div className="category-info-1 justify-content-center">
          <img className="category-image mx-auto d-block" src={props.imageUrl} alt={props.name} style={{ maxWidth: '300px' }} />
          </div>

          <div className="category-info-2 container">
          <h4>{props.name}</h4>
          <Link to={`categoryDetail/${props.id}`}>
            <i class="button-category-edit bi bi-card-list d-flex justify-content-end"></i>
          </Link>
          </div>

        </div>
  )
}

export default CategoryCard