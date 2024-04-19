import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
  const [title, setTitle] = useState("");  
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
        const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
        { 
          name: title, 
          imageUrl: imageURL,
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
        setMessage("Category berhasil dibuat!");
        setTitle("");
        setImageURL("");
      } 
    catch (err) {
      console.log(err)
        setMessage("Gagal membuat Category. Silakan coba lagi.");
      } 
    finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Promo"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateCategory;