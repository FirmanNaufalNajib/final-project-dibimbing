import React, { useState } from "react";
import axios from "axios";
import ActivityForm from "../../components/ActivityForm";
import CategoryOption from "../../components/CategoryOption";
import SideBar from "../../components/SideBar";

import useActivityPost from "../../hooks/activity/useActivityPost";

const CreateActivity = () => {

  const { 
    title,
    setTitle,
    description,
    setDescription,
    imageURL,
    setImageURL,
    price,
    setPrice,
    price_discount,
    setPrice_discount,
    rating,
    setRating,
    total_reviews,
    setTotal_reviews,
    facilities,
    setFacilities,
    address,
    setAddress,
    city,
    setCity,
    province,
    setProvince,
    location_map,
    setLocation_map,
    loading,
    message,
    categoriesActivity,
    setCategoriesActivity,
    handleSubmit,
    navigate
  } = useActivityPost();

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleImageURLChange = (e) => setImageURL(e.target.value.split(","))
  const handleRatingChange = (e) => setRating(Number(e.target.value))
  const handlePriceChange = (e) => setPrice(Number(e.target.value))
  const handlePrice_discountChange = (e) => setPrice_discount(Number(e.target.value))
  const handleTotal_reviewsChange = (e) => setTotal_reviews(Number(e.target.value))
  const handlefacilitiesChange = (e) => setFacilities(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)
  const handleCityChange = (e) => setCity(e.target.value)
  const handleProvinceChange = (e) => setProvince(e.target.value)
  const handleLocation_MapChange = (e) => setLocation_map(e.target.value)
  const handleCategoryActivityChange = (value) => setCategoriesActivity(value)
  
  return (
    <div className="edit-banner">
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar />
      </div>

      <div className="form-banner position-fixed top-50 start-50 translate-middle d-flex align-items-center">

  <div className="input-banner">
        <h2>Create Activity</h2>
      <CategoryOption
      handleCategoryActivityChange={handleCategoryActivityChange}
      />

      <ActivityForm
      title={title}
      imageURL={imageURL}
      description={description}
      price={price}
      price_discount={price_discount}
      rating={rating}
      total_reviews={total_reviews}
      facilities={facilities}
      address={address}
      city={city}
      province={province}
      location_map={location_map}
      categoriesActivity={categoriesActivity}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleImageURLChange={handleImageURLChange}
      handleRatingChange={handleRatingChange}
      handlePriceChange={handlePriceChange}
      handlePrice_discountChange={handlePrice_discountChange}
      handleTotal_reviewsChange={handleTotal_reviewsChange}
      handlefacilitiesChange={handlefacilitiesChange}
      handleAddressChange={handleAddressChange}
      handleCityChange={handleCityChange}
      handleProvinceChange={handleProvinceChange}
      handleLocation_MapChange={handleLocation_MapChange}
      navigate={navigate}
      />
      
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Activity"}
      </button>
      {message && <p>{message}</p>}
    </div>

</div>
</div>
  );
};

export default CreateActivity;