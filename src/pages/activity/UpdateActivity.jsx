import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryOption from "../../components/CategoryOption";
import SideBar from "../../components/SideBar";
import ActivityForm from "../../components/ActivityForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal";
Modal

const UpdateActivity = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0); 
  const [price_discount, setPrice_discount] = useState(0); 
  const [total_reviews, setTotal_reviews] = useState(0);
  const [facilities, setfacilities] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [location_map, setLocation_map] = useState("");
  const [rating, setRating] = useState("");
  const [categoriesActivity, setCategoriesActivity] = useState('');

  const [message, setMessage] = useState("");
  const pagesName = "Update"

  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleImageURLChange = (e) => setImageURL(e.target.value.split(","))
  const handleRatingChange = (e) => setRating(Number(e.target.value))
  const handlePriceChange = (e) => setPrice(Number(e.target.value))
  const handlePrice_discountChange = (e) => setPrice_discount(Number(e.target.value))
  const handleTotal_reviewsChange = (e) => setTotal_reviews(Number(e.target.value))
  const handlefacilitiesChange = (e) => setfacilities(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)
  const handleCityChange = (e) => setCity(e.target.value)
  const handleProvinceChange = (e) => setProvince(e.target.value)
  const handleLocation_MapChange = (e) => setLocation_map(e.target.value)
  const handleCategoryActivityChange = (value) => setCategoriesActivity(value)

  useEffect(() => {
    const fetchUpdateActivity = async () => {
      try {
        const res = await axios.get(
            `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${id}`,
            {headers: 
              {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
            }
          
        );
        console.log(res)
        const bannerData = res.data.data;
        setTitle(bannerData.name);
        setImageURL(bannerData.imageUrl);
      } catch (error) {
        setError("Gagal memuat data activity. Silakan coba lagi."); 
        setLoading(false);
      }
    };

    fetchUpdateActivity();
  }, [id]);


  const handleSubmit = async () => {

    try {
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-activity/${id}`, 
        {
          categoryId: categoriesActivity,
          title: title, 
          description: description,
          imageUrls: imageURL,
          price: price,
          price_discount: price_discount,
          total_reviews: total_reviews,
          facilities: facilities,
          address: address,
          city: city,
          province: province,
          location_map: location_map
          
        },
        {
          headers: 
            { 
              apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
        }
      );
      console.log("Activityr berhasil diperbarui:", res.data);
      setMessage(res.data.message,"Promo berhasil diperbarui");
      Navigate("/activity");

    } catch (error) {
      console.error("Gagal memperbarui activity:", error);
      setMessage(error.message + " Silakan coba lagi.")
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${id}`,
        {
          headers: 
            { 
              apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
        }
      );
      console.log("Activity berhasil dihapus:", res.data);
      setMessage("activity berhasil dihapus");
      Navigate("/activities")

    } catch (error) {
      console.error("Gagal menghapus Activity:", error);
      setMessage("Gagal menghapus activity. Silakan coba lagi.")
    }
  };

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
      <SideBar />
      <button class="btn btn-danger bi bi-trash3" onClick={handleDelete}>Delete Activity</button>
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
      handlefacilitiesChange={handlefacilitiesChange}
      handleAddressChange={handleAddressChange}
      handleCityChange={handleCityChange}
      handleProvinceChange={handleProvinceChange}
      handleLocation_MapChange={handleLocation_MapChange}
      />
      
      <button onClick={handleSubmit}>Update Activity</button>
      </div>

    </div>
    </div>
  );
};

export default UpdateActivity;
