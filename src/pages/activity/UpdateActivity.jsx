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
  const [price, setPrice] = useState(0); 
  const [price_discount, setPrice_discount] = useState(0); 
  const [total_reviews, setTotal_reviews] = useState(0);
  const [facilities, setfacilities] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [location_map, setLocation_map] = useState("");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}
          }
        );
        console.log(res)
        const bannerData = res.data.data;
        setTitle(bannerData.name);
        setImageURL(bannerData.imageUrl);
      } catch (error) {
        setError("Gagal memuat data activity. Silakan coba lagi."); // Ganti 'Gagal memuat data banner. Silakan coba lagi.' dengan pesan error yang sesuai activity
        setLoading(false);
      }
    };

    fetchBanner();
  }, [id]);


  const handleSubmit = async () => {

    const payload = {
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
      
    }
    try {
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-activity/${id}`, payload,
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

    } catch (error) {
      console.error("Gagal memperbarui banner:", error);

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

    } catch (error) {
      console.error("Gagal menghapus banner:", error);

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
