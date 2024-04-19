import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdatePromo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [terms_condition, setTerms_condition] = useState(""); 
  const [promo_code, setPromo_code] = useState(""); 
  const [promo_discount_price, setPromo_discount_price] = useState("");
  const [minimum_claim_price, setMinimum_claim_price] = useState("");

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
          }
        )
        console.log(res)
        const bannerData = res.data.data;
        setTitle(bannerData.name);
        setImageURL(bannerData.imageUrl);
      } catch (error) {
        setError("Gagal memuat data banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);


  const handleSubmit = async () => {

    const payload = {
      title: title, 
      description: description,
      imageUrl: imageURL,
      terms_condition: terms_condition,
      promo_code: promo_code,
      promo_discount_price: promo_discount_price,
      minimum_claim_price: minimum_claim_price
      
    }
    try {
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`, payload,
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
      console.log("Banner berhasil diperbarui:", res.data);
      // Redirect to banner list page or show success message
    } catch (error) {
      console.error("Gagal memperbarui banner:", error);
      // Handle error state or show error message
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`,
        {
          headers: 
            { 
              apiKey: 
            '224405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
        }
      );
      console.log("Banner berhasil dihapus:", res.data);
      // Redirect to banner list page or show success message
    } catch (error) {
      console.error("Gagal menghapus banner:", error);
      // Handle error state or show error message
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Update Banner</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Terms and Condition"
        value={terms_condition}
        onChange={(e) => setTerms_condition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Promo Code"
        value={promo_code}
        onChange={(e) => setPromo_code(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promo Discount Price"
        value={Number(promo_discount_price)}
        onChange={(e) => setPromo_discount_price(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Minimun Claim Price"
        value={Number(minimum_claim_price)}
        onChange={(e) => setMinimum_claim_price(Number(e.target.value))}
      />
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleSubmit}>Update Promo</button>
      <button onClick={handleDelete}>Delete Promo</button>

    </div>
  );
};

export default UpdatePromo;
