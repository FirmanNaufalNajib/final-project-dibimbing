import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryOption from "../../components/CategoryOption";
import SideBar from "../../components/SideBar";
import ActivityForm from "../../components/ActivityForm";
import { useDispatch } from "react-redux";
import { close } from "../../features/modalSlice";
import Modal from "../../components/Modal";
import useActivitybyIdAll from "../../hooks/activity/useActivitybyIdAll";

const UpdateActivity = () => {

  const namePage = "Update Activity";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    title,
    description,
    imageURL,
    price,
    price_discount,
    rating,
    total_reviews,
    facilities,
    address,
    city,
    province,
    location_map,
    loading,
    message,
    error,
    handleTitleChange,
    handleDescriptionChange,
    handleImageURLChange,
    handlePriceChange,
    handlePrice_discountChange,
    handleRatingChange,
    handleTotal_reviewsChange,
    handleFacilitiesChange,
    handleAddressChange,
    handleCityChange,
    handleProvinceChange,
    handleLocation_MapChange,
    handleCategoryActivityChange,
    handleFileChange,

    handleSubmit,
    handleDelete
  } = useActivitybyIdAll();

  const {id} = useParams()

  const handleConfirm = () => {
    handleDelete() 
  };
  const handleCancel = () => {
    dispatch(close());
  };
  const clearItemAndCloseModal = () => {; 
    setIsModalOpen(true); }

  console.log(isModalOpen)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-banner">
  <section className="edit-banner-title">
    {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
  </section>
   <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar namePage={namePage}/>
      <button class=" delete-button btn btn-danger" onClick={() => setIsModalOpen(true)}><i className=" bi bi-trash3"></i>Delete Activity</button>
      </div>
      

      <div className="form-banner ">

      <div className="input-banner">
        <h2>Update Activity</h2>
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
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleImageURLChange={handleImageURLChange}
      handleRatingChange={handleRatingChange}
      handlePriceChange={handlePriceChange}
      handlePrice_discountChange={handlePrice_discountChange}
      handleTotal_reviewsChange={handleTotal_reviewsChange}
      handleFacilitiesChange={handleFacilitiesChange}
      handleAddressChange={handleAddressChange}
      handleCityChange={handleCityChange}
      handleProvinceChange={handleProvinceChange}
      handleLocation_MapChange={handleLocation_MapChange}
      handleFileChange={handleFileChange}
      />
      
      <button onClick={handleSubmit}>Update Activity</button>
      </div>

    </div>
    </div>
  );
};

export default UpdateActivity;
