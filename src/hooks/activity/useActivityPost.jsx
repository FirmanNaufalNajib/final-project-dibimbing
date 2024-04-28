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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categoriesActivity, setCategoriesActivity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity",
        { 
          categoryId: categoriesActivity,
          title, 
          description,
          imageUrls: imageURL,
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
      setMessage("Activity berhasil dibuat!");
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
    loading,
    message,
    categoriesActivity,
    setCategoriesActivity,
    handleSubmit,
    navigate
  };
};

export default useActivityPost;
