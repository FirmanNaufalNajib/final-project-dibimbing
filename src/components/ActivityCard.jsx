import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Activitycard = (props) => {
  return (
    <div className="activity-item container justify-content-center" key={props.id}>
      <div className="activity-info-1 justify-content-center">
        <img className="activity-image mx-auto d-block" src={props.imageUrls} alt={props.title} />
      </div>
      <div className="activity-info-2 container">
        <h2>{props.title}</h2>
      </div>
      <Link to={`activityUser/${props.id}`}>
        <i className="button-activity-edit bi bi-card-list d-flex justify-content-end"></i>
      </Link>
      <Link to={`activityDetail/${props.id}`}>
        <i className="button-activity-edit bi bi-card-list d-flex justify-content-end"></i>
      </Link>
    </div>
  );
};

Activitycard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  imageUrls: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Activitycard;
