import React, { useState } from "react";
import axios from "axios";

const CreatePromo = () => {
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
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
          title: title, 
          description: description,
          imageUrl: imageURL,
          terms_condition: terms_condition,
          promo_code: promo_code,
          promo_discount_price: promo_discount_price,
          minimum_claim_price: minimum_claim_price
        },
        {headers: 
        { 
          apiKey: 
        '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
          Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
        }
      }
        );
        console.log(res)
        setMessage("Promo berhasil dibuat!");
        setTitle("");
        setImageURL("");
      } 
    catch (err) {
      console.log(err)
        setMessage("Gagal membuat promo. Silakan coba lagi.");
      } 
    finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <h2>Create Promo</h2>
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
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Promo"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePromo;