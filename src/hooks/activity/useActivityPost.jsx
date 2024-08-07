import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useActivityPost = () => {
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(""); 
  const [price_discount, setPrice_discount] = useState(""); 
  const [rating, setRating] = useState("");
  const [total_reviews, setTotal_reviews] = useState("");
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [location_map, setLocation_map] = useState("");

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categoriesActivity, setCategoriesActivity] = useState('');
  const navigate = useNavigate();

 
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleImageURLChange = (e) => setImageURL(e.target.value.split(","))
  const handleRatingChange = (e) => setRating(Number(e.target.value))
  const handlePriceChange = (e) => setPrice(Number(e.target.value))
  const handlePrice_discountChange = (e) => setPrice_discount(Number(e.target.value))
  const handleTotal_reviewsChange = (e) => setTotal_reviews(Number(e.target.value))
  const handleFacilitiesChange = (e) => setFacilities(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)
  const handleCityChange = (e) => setCity(e.target.value)
  const handleProvinceChange = (e) => setProvince(e.target.value)
  const handleLocation_MapChange = (e) => setLocation_map(e.target.value)
  const handleCategoryActivityChange = (value) => setCategoriesActivity(value)

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setLoading(true);

    try {
       // Upload image
       const formData = new FormData();
       formData.append('image', file);
       const imageResponse = await axios.post(
         'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image',
         formData,
         {
           headers: {
             apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
           },
         }
       );
       setImageURL(imageResponse?.data?.url);
       setUploaded(true);

     // Create banner
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity",
        { 
          categoryId: categoriesActivity,
          title, 
          description,
          imageUrls: [imageResponse?.data?.url],
          price,
          price_discount,
          rating,
          total_reviews,
          facilities,
          address,
          city,
          province,
          location_map
        },
        {
          headers: { 
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
          }
        }
      );  
      
      console.log(res.data)
      
      setTitle("");
      setDescription("");
      setImageURL("");
      setPrice("");
      setPrice_discount("");
      setRating("");
      setTotal_reviews("");
      setFacilities("");
      setAddress("");
      setCity("");
      setProvince("");
      setLocation_map("");
      setMessage("Activity berhasil dibuat!");
      navigate("/activities");
    } 
    catch (err) {
      console.error(err);
      setMessage("Gagal membuat activity. Silakan coba lagi.");
    } 
    finally {
      setLoading(false);
    }
  };

  return {
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
    categoriesActivity,
    setCategoriesActivity,

    uploaded,
    setUploaded,
    file,
    setFile,
    
    loading,
    setLoading,
    message,
    setMessage,
    
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
  };
};

export default useActivityPost;
