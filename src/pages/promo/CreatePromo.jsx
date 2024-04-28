import React, { useState } from "react";
import axios from "axios";
import PromoForm from "../../components/PromoForm";
import SideBar from "../../components/SideBar";
import '../styles.css';
import usePromoPost from "../../hooks/promo/usePromoPost";
 const CreatePromo = () => {

  const { 
    title,
    setTitle,
    description,
    setDescription,
    imageUrl,
    setImageUrl,
    terms_condition,
    setTerms_condition,
    promo_code,
    setPromo_code,
    promo_discount_price,
    setPromo_discount_price,
    minimum_claim_price,
    setMinimum_claim_price,
    loading,
    message,
    handleSubmit
  } = usePromoPost();



  const handleImageURLChange = (e) => setImageUrl(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleMinimum_claim_priceChange = (e) => setMinimum_claim_price(Number(e.target.value))
  const handlePromo_discount_priceChange = (e) => setPromo_discount_price(Number(e.target.value))
  const handlePromo_codeChange = (e) => setPromo_code(e.target.value)
  const handleTerms_conditionChange = (e) => setTerms_condition(e.target.value)

  const pageName = "Create Promo"

  return (
    <div className="edit-banner">
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar />
      </div>

      <div className="form-banner position-fixed top-50 start-50 translate-middle d-flex align-items-center">

      <div className="input-banner">
      <PromoForm
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
      pageName={pageName}
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