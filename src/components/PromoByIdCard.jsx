const PromoByIdCard = (props) => {

  return (
    <div className="promo-page container">

    <div className="promo-content position-fixed top-50 start-50 translate-middle" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${props.imageUrl})`}} >
    <h2>{props.title}</h2>
    
    <p>{props.description}</p>

    <div className="promo-code ">
    <p>Promo Code</p>
    <p><strong>{props.promo_code}</strong></p>
    </div>
    
    <div className="promo-pricing d-flex">

        <div className="promo-price">
        <p>Discount Price</p>
      <p className="text-value">{Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(props.promo_discount_price)}</p>
        </div>

        <div className="minimum-claim">
          <p>Minimum Claim</p>
      <p className="text-value">{Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(props.minimum_claim_price)}</p>
        </div>
    </div>

    <div className="terms-condition">
      <p>Terms & Conditions: </p>
      <p>{props.terms_condition}</p>
      </div>
    </div>

    </div>
  )
}

export default PromoByIdCard