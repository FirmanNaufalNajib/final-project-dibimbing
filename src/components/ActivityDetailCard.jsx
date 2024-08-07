import PropTypes from 'prop-types';


const ActivityDetailCard = (props) => {

  return (
    <div className="category-activity-content container d-flex align-items-start" key={props.id}>

    <div className="category-activity-list row position-fixed">
      <img src={props.imageUrls} alt={props.categoryName}/>
      <h4>{props.categoryName}</h4>
      <p>{props.categoryId}</p>
      <p>Created At : {props.categoryCreatedAt}</p>
      <p>Update At : {props.categoryUpdatedAt}</p>
    </div>

    <div className="category-activity-data col">

      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <td>
              {props.imageUrls && props.imageUrls.map((url) => 
              (
                <img key={url} src={url} alt={props.title} style={{ maxWidth: '300px' }} />
              ))}
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td><h2>{props.title}</h2></td>
          </tr>
          <tr>
            <th>ID</th>
            <td><p>{props.id}</p></td>
          </tr>
          <tr>
            <th>Description</th>
            <td><p>{props.description}</p></td>
          </tr>
          <tr>
            <th>Price</th>
            <td><p>{props.price}</p></td>
          </tr>
          <tr>
            <th>Price Discount</th>
            <td><p>{props.price_discount}</p></td>
          </tr>
          <tr>
            <th>Rating</th>
            <td><p>{props.rating}</p></td>
          </tr>
          <tr>
            <th>Total Review</th>
            <td><p>{props.total_reviews}</p></td>
          </tr>
          <tr>
            <th>Facilites</th>
            <td><p>{props.facilities}</p></td>
          </tr>
          <tr>
            <th>Address</th>
            <td><p>{props.address}</p></td>
          </tr>
          <tr>
            <th>Province</th>
            <td><p>{props.province}</p></td>
          </tr>
          <tr>
            <th>City</th>
            <td><p>{props.city}</p></td>
          </tr>
          <tr>
            <th>Location Maps</th>
            <td><iframe src={props.location_maps} title={`${props.title} Maps Location`}></iframe></td>
          </tr>
          <tr>
            <th>Created At</th>
            <td><p>{props.createdAt}</p></td>
          </tr>
          <tr>
            <th>Updated At</th>
            <td><p>{props.updatedAt}</p></td>
          </tr>
        </tbody>
      </table>
  
    </div>
    </div>
  )
}

ActivityDetailCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrls: PropTypes.array,
  price: PropTypes.number,
  price_discount: PropTypes.number,
  rating: PropTypes.number,
  total_reviews: PropTypes.number,
  facilities: PropTypes.string,
  address: PropTypes.string,
  province: PropTypes.string,
  city: PropTypes.string,
  location_maps: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  categoryName: PropTypes.string,
  categoryId: PropTypes.number,
  categoryImageUrl: PropTypes.string,
  categoryCreatedAt: PropTypes.string,
  categoryUpdatedAt: PropTypes.string,
}





export default ActivityDetailCard