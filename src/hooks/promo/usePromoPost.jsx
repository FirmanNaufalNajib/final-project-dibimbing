import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const usePromoPost = () => {
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [terms_condition, setTerms_condition] = useState(""); 
  const [promo_code, setPromo_code] = useState(""); 
  const [promo_discount_price, setPromo_discount_price] = useState("");
  const [minimum_claim_price, setMinimum_claim_price] = useState("");

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  
  const handleImageURLChange = (e) => setImageUrl(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleMinimum_claim_priceChange = (e) => setMinimum_claim_price(Number(e.target.value))
  const handlePromo_discount_priceChange = (e) => setPromo_discount_price(Number(e.target.value))
  const handlePromo_codeChange = (e) => setPromo_code(e.target.value)
  const handleTerms_conditionChange = (e) => setTerms_condition(e.target.value)
  
  const handleFileChange = (e) => setFile(e.target.files[0]);
  ;

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
        setImageUrl(imageResponse?.data?.url);
        setUploaded(true);
 
      // Create banner
        const res = await axios.post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo",
          { 
            title, 
            description,
            imageUrl: imageResponse?.data?.url,
            terms_condition,
            promo_code,
            promo_discount_price,
            minimum_claim_price
          },
          {
            headers: { 
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
          }
        );
      
      setTitle("");
      setDescription("");
      setImageUrl("");
      setTerms_condition("");
      setPromo_code("");
      setPromo_discount_price("");
      setMinimum_claim_price("");
      setMessage("Promo berhasil dibuat!");
      navigate("/promos");
    } 
    catch (err) {
      console.error(err);
      setMessage("Gagal membuat promo. Silakan coba lagi.");
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
    file,
    setFile,
    uploaded,
    setUploaded,

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
    handleSubmit,
    navigate
  };
};

export default usePromoPost;
