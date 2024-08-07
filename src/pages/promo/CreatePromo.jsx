import PromoForm from "../../components/PromoForm";
import SideBar from "../../components/SideBar";
import usePromoPost from "../../hooks/promo/usePromoPost";
import '../styles.css';
 const CreatePromo = () => {
  const namePage = "Create Promo"
  const { 
    title,
    description,
    imageUrl,
    terms_condition,
    promo_code,
    promo_discount_price,
    minimum_claim_price,
    handleTitleChange,
    handleDescriptionChange,
    handleTerms_conditionChange,
    handleImageURLChange,
    handlePromo_codeChange,
    handlePromo_discount_priceChange,
    handleMinimum_claim_priceChange,
    handleFileChange,
    loading,
    message,
    handleSubmit
  } = usePromoPost();

  return (
    <div className="edit-banner">
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar namePage={namePage} />
      </div>

      <div className="form-banner position-fixed top-50 start-50 translate-middle d-flex align-items-center">

      <div className="input-banner">
      <PromoForm
      namePage={namePage}
      title={title}
      description={description}
      imageURL={imageUrl}
      terms_condition={terms_condition}
      promo_code={promo_code}
      promo_discount_price={promo_discount_price}
      minimum_claim_price={minimum_claim_price}
      handleDescriptionChange={handleDescriptionChange}
      handleTitleChange={handleTitleChange}
      handleImageURLChange={handleImageURLChange}
      handleTerms_conditionChange={handleTerms_conditionChange}
      handlePromo_codeChange={handlePromo_codeChange}
      handlePromo_discount_priceChange={handlePromo_discount_priceChange}
      handleMinimum_claim_priceChange={handleMinimum_claim_priceChange}
      handleFileChange={handleFileChange}
      />
  
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Promo"}
      </button>
      {message && <p>{message}</p>}
      </div>
      </div>


    </div> 
  );
};

export default CreatePromo;