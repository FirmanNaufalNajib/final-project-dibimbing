import ActivityForm from "../../components/ActivityForm";
import CategoryOption from "../../components/CategoryOption";
import SideBar from "../../components/SideBar";
import useActivityPost from "../../hooks/activity/useActivityPost";

const CreateActivity = () => {
const namePage = "Create Activity"
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
    categoriesActivity,
    
    loading,
    message,
    
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
    navigate
  } = useActivityPost();

  
  return (
    <div className="edit-banner">
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar namePage={namePage}/>
      </div>

      <div className="form-banner d-flex align-items-center">

  <div className="input-banner">
        
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
      handleFacilitiesChange={handleFacilitiesChange}
      handleAddressChange={handleAddressChange}
      handleCityChange={handleCityChange}
      handleProvinceChange={handleProvinceChange}
      handleLocation_MapChange={handleLocation_MapChange}
      handleFileChange={handleFileChange}
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