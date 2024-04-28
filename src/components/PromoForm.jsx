const PromoForm = (props) => {
  
  return (

    <div className="promo-form-card">
    <h2>{props.pageName}</h2>

    <label for="title">Title:</label> <br />
    <input
      type="text"
      id="title"
      defaultValue={props.title}
      placeholder="Title"
      value={props.title}
      onChange={props.handleTitleChange}
    /><br />

    <label for="description">Description:</label><br />
    <input
      type="text"
      id="description"
      placeholder="Description"
      value={props.description}
      onChange={props.handleDescriptionChange}
    /><br />

    <label for="imageURL">Image URL:</label><br />
    <input
      type="text"
      id="imageURL"
      placeholder="Image URL"
      value={props.imageURL}
      onChange={props.handleImageURLChange}
    /><br />

    <label for="termsCondition">Terms and Condition:</label><br />
    <input
      type="text"
      id="termsCondition"
      placeholder="Terms and Condition"
      value={props.terms_condition}
      onChange={props.handleTerms_conditionChange}
    /><br />

    <label for="promoCode">Promo Code:</label><br />
    <input
      type="text"
      id="promoCode"
      placeholder="Promo Code"
      value={props.promo_code}
      onChange={props.handlePromo_codeChange}
    /><br />

    <label for="promoDiscountPrice">Promo Discount Price:</label><br />
    <input
      type="number"
      id="promoDiscountPrice"
      placeholder="Promo Discount Price"
      value={Number(props.promo_discount_price)}
      onChange={props.handlePromo_discount_priceChange}
    /><br />

    <label for="minimumClaimPrice">Minimum Claim Price:</label><br />
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

export default PromoForm