
import PropTypes from 'prop-types';
const ActivityForm = (props) => { 

  return (
    <div className="activity-form-card">
      <div className="activity-form-input">
      <label htmlFor="title">Title</label> <br />
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={props.title}
        onChange={props.handleTitleChange}
      /> <br />
      <label htmlFor="description">Description</label> <br />
      <input
        type="text"
        id="description"
        placeholder="Description"
        value={props.description}
        onChange={props.handleDescriptionChange}
      /> <br />
      <label htmlFor="imageURL">Image</label> <br />
      <input
        type="file"
        id="imageURL"
        accept="image/*"
        placeholder="Image"
        //value={props.imageURL}
        onChange={props.handleFileChange}
      /> <br />
      <label htmlFor="rating">Rating</label> <br />
      <input
        type="number"
        id="rating"
        placeholder="Rating"
        value={Number(props.rating)}
        onChange={props.handleRatingChange}
      /> <br />
      <label htmlFor="price">Price</label> <br />
      <input
        type="number"
        id="price"
        placeholder="Price"
        value={Number(props.price)}
        onChange={props.handlePriceChange}
      /> <br />
      <label htmlFor="price_discount">Price Discount</label> <br />
      <input
        type="number"
        id="price_discount"
        placeholder="Price Discount"
        value={Number(props.price_discount)}
        onChange={props.handlePrice_discountChange}
      /> 
      </div>


      <div className="activity-form-input">
      <label htmlFor="total_reviews">Total Reviews</label> <br />
      <input
        type="number"
        id="total_reviews"
        placeholder="Total Reviews"
        value={Number(props.total_reviews)}
        onChange={props.handleTotal_reviewsChange}
      /> <br />
      <label htmlFor="facilities">Facilities</label> <br />
      <input
        type="text"
        id="facilities"
        placeholder="Facilities"
        value={props.facilities}
        onChange={props.handleFacilitiesChange}
      /> <br />
      <label htmlFor="address">Address</label> <br />
      <input
        type="text"
        id="address"
        placeholder="Address"
        value={props.address}
        onChange={props.handleAddressChange}
      /> <br />
      <label htmlFor="city">City</label> <br />
      <input
        type="text"
        id="city"
        placeholder="City"
        value={props.city}
        onChange={props.handleCityChange}
      /> <br />
      <label htmlFor="province">Province</label> <br />
      <input
        type="text"
        id="province"
        placeholder="Province"
        value={props.province}
        onChange={props.handleProvinceChange}
      /> <br />
      <label htmlFor="location_map">Location Map</label> <br />
      <input
        type="text"
        id="location_map"
        placeholder="Location Map"
        value={props.location_map}
        onChange={props.handleLocation_MapChange}
      />
      </div>
    </div>
  )
}

ActivityForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  price_discount: PropTypes.number,
  total_reviews: PropTypes.number,
  facilities: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  province: PropTypes.string,
  location_map: PropTypes.string,
  handleTitleChange: PropTypes.func,
  handleDescriptionChange: PropTypes.func,
  handleFileChange: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handlePriceChange: PropTypes.func,
  handlePrice_discountChange: PropTypes.func,
  handleTotal_reviewsChange: PropTypes.func,
  handleFacilitiesChange: PropTypes.func,
  handleAddressChange: PropTypes.func,
  handleCityChange: PropTypes.func,
  handleProvinceChange: PropTypes.func,
  handleLocation_MapChange: PropTypes.func,
}

export default ActivityForm