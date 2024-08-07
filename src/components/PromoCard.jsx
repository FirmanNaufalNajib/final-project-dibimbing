import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const PromoCard = (props) => {

  return (
    <div className="promos-item container justify-content-center card text-bg-transparent" >
          <Link to={`/promos/promosById/${props.id}`}>
          <img className="promos-image" src={props.imageUrl} alt={props.title} style={{ maxWidth: '350px' }}/>
          <div className="promos-info-1-user card-img-overlay">
            <h5 className="promos-title">{props.title}</h5>
            <p className="promos-price">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(props.promo_discount_price)}</p>
            <p className={props.terms_condition.length > 43 ? "promos-term text-ellipsis" : "promos-term"}><small>{props.terms_condition.length > 43 ? props.terms_condition.slice(0, 40) + "..." : props.terms_condition}</small></p>
          </div>
          </Link>
    </div>
  )
}

PromoCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  promo_discount_price: PropTypes.number,
  terms_condition: PropTypes.string
}


export default PromoCard