import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "../../features/modalSlice";



const useActivitybyIdAll = () => {
  const [activity, setActivity] = useState({});

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
  const [error, setError] = useState("");

  const [categoriesActivity, setCategoriesActivity] = useState('');
  const navigate = useNavigate();

  const {id} = useParams()
  const dispatch = useDispatch();

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
        setActivity(res.data.data);
        const bannerData = res.data.data;
        setTitle(bannerData.title);
        setImageURL(bannerData.imageUrls[0]);
        setDescription(bannerData.description);
        setPrice(bannerData.price);
        setPrice_discount(bannerData.price_discount);
        setRating(bannerData.rating);
        setTotal_reviews(bannerData.total_reviews);
        setFacilities(bannerData.facilities);
        setAddress(bannerData.address);
        setCity(bannerData.city);
        setProvince(bannerData.province);
        setLocation_map(bannerData.location_maps);
      } catch (error) {
        setError("Gagal memuat data activity. Silakan coba lagi."); 
        setLoading(false);
      }
    };

    fetchUpdateActivity();
  }, [id]);
  


  const handleSubmit = async () => {

    // Upload image
    const formData = new FormData();
    formData.append('image', file);

    const imageResponse = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image', formData,
    {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
      },
    });
    console.log(imageResponse);
    setImageURL(imageResponse?.data?.url)
    setUploaded(true);
    setMessage('');

    // Create banner
    try {
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-activity/${id}`, 
        {
          categoryId: categoriesActivity,
          title: title, 
          description: description,
          imageUrls: [imageResponse?.data?.url],
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

      console.log(res.data)
      
      setTitle("");
      setDescription("");
      setPrice("");
      setPrice_discount("");
      setRating("");
      setTotal_reviews("");
      setFacilities("");
      setAddress("");
      setCity("");
      setProvince("");
      setLocation_map("");
      setMessage("Activity berhasil di-Update!");
      navigate("/activities");
    } 
    catch (err) {
      console.error(err);
      setMessage("Gagal Update activity. Silakan coba lagi.");
    } 
    finally {
      setLoading(false);
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
      dispatch(close());
      setMessage("activity berhasil dihapus");
      navigate("/activities")

    } catch (error) {
      console.error("Gagal menghapus Activity:", error);
      setMessage("Gagal menghapus activity. Silakan coba lagi.")
    }
  };
 
  return {
    activity, 
    setActivity,
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

    file,
    setFile,
    uploaded,
    setUploaded,

    loading,
    setLoading,
    message,
    setMessage,
    error,
    setError,
    categoriesActivity,
    setCategoriesActivity,

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

    navigate,
    handleSubmit,
    handleDelete
  };

  
};

export default useActivitybyIdAll;
