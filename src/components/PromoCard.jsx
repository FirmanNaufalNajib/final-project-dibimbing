import { Link } from 'react-router-dom'

const PromoCard = (props) => {

  return (
    <div class="promos-item container justify-content-center card text-bg-transparent" >
            {/* <Link to={`promosById/${props.id}`}> */}
          <img class="promos-image" src={props.imageUrl} alt={props.title} style={{ maxWidth: '350px' }}/>
          <div class="promos-info-1-user card-img-overlay">
            <h5 class="promos-title">{props.title}</h5>
            <p class="promos-price">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(props.promo_discount_price)}</p>
            <p class={props.terms_condition.length > 43 ? "promos-term text-ellipsis" : "promos-term"}><small>{props.terms_condition.length > 43 ? props.terms_condition.slice(0, 40) + "..." : props.terms_condition}</small></p>
          </div>
          {/* </Link> */}
        </div>
  )
}

export default PromoCard