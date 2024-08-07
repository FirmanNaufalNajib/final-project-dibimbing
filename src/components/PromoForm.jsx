import PropTypes from 'prop-types';

const PromoForm = (props) => {
  
  return (

    <div className="promo-form-card">
    <h2>{props.namePage}</h2>

    <label htmlFor="title">Title:</label> <br />
    <input
      type="text"
      id="title"
      defaultValue={props.title}
      placeholder="Title"
      value={props.title}
      onChange={props.handleTitleChange}
    /><br />

    <label htmlFor="description">Description:</label><br />
    <input
      type="text"
      id="description"
      placeholder="Description"
      value={props.description}
      onChange={props.handleDescriptionChange}
    /><br />

    <label htmlFor="imageURL">Image:</label><br />
    <input
      type="file"
      id="imageURL"
      placeholder="Image URL"
      accept="image/*"
      //value={props.imageURL}
      onChange={props.handleFileChange}
    /><br />

    <label htmlFor="termsCondition">Terms and Condition:</label><br />
    <input
      type="text"
      id="termsCondition"
      placeholder="Terms and Condition"
      value={props.terms_condition}
      onChange={props.handleTerms_conditionChange}
    /><br />

    <label htmlFor="promoCode">Promo Code:</label><br />
    <input
      type="text"
      id="promoCode"
      placeholder="Promo Code"
      value={props.promo_code}
      onChange={props.handlePromo_codeChange}
    /><br />

    <label htmlFor="promoDiscountPrice">Promo Discount Price:</label><br />
    <input
      type="number"
      id="promoDiscountPrice"
      placeholder="Promo Discount Price"
      value={Number(props.promo_discount_price)}
      onChange={props.handlePromo_discount_priceChange}
    /><br />

    <label htmlFor="minimumClaimPrice">Minimum Claim Price:</label><br />
    <input
      type="number"
      id="minimumClaimPrice"
      placeholder="Minimum Claim Price"
      value={Number(props.minimum_claim_price)}
      onChange={props.handleMinimum_claim_priceChange}
    /><br />
  </div>
  )
}

PromoForm.propTypes = {
  namePage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  terms_condition: PropTypes.string.isRequired,
  promo_code: PropTypes.string.isRequired,
  promo_discount_price: PropTypes.string.isRequired,
  minimum_claim_price: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleTerms_conditionChange: PropTypes.func.isRequired,
  handlePromo_codeChange: PropTypes.func.isRequired,
  handlePromo_discount_priceChange: PropTypes.func.isRequired,
  handleMinimum_claim_priceChange: PropTypes.func.isRequired
}

export default PromoForm