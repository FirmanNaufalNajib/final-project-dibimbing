import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BannerCard = (props) => {

  return (

<div className="banner-item container justify-content-center" key={props.id}>

  <div className="banner-info-1 justify-content-center">
    <img className="banner-image mx-auto d-block" src={props.imageUrl} alt={props.name}  />   
  </div>

  <div className="banner-info-2 container">
    <h5>{props.name}</h5>
    <p className="date-banner">Last Updated at {new Date(props.updatedAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>
    <Link to={`updateBanner/${props.id}`}>
      <button className="button-banner-edit d-flex justify-content-end"><i className="bi bi-pencil-square"></i></button>
    </Link>
  </div>

</div>
  )
}

BannerCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  updatedAt: PropTypes.string
}

export default BannerCard