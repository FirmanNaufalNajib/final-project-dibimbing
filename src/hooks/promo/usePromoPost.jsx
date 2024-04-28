import { useState } from "react";
import axios from "axios";

const usePromoPost = () => {
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [terms_condition, setTerms_condition] = useState(""); 
  const [promo_code, setPromo_code] = useState(""); 
  const [promo_discount_price, setPromo_discount_price] = useState("");
  const [minimum_claim_price, setMinimum_claim_price] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo",
        { 
          title, 
          description,
          imageUrl,
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
      setMessage("Promo berhasil dibuat!");
      setTitle("");
      setDescription("");
      setImageUrl("");
      setTerms_condition("");
      setPromo_code("");
      setPromo_discount_price("");
      setMinimum_claim_price("");
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
    loading,
    message,
    handleSubmit
  };
};

export default usePromoPost;
