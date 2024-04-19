import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const updateCategory = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/${id}`,
          {headers: 
            { apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c' 
           } 
          }
        );
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

    fetchBanner();
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleSubmit = async () => {

    const payload = {
      name: title,
      imageUrl: imageURL
    }
    try {
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-category/${id}`, payload,
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
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${id}`,
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
      console.log("Category berhasil dihapus:", res.data);
      // Redirect to banner list page or show success message
    } catch (error) {
      console.error("Gagal menghapus Category:", error);
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
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={handleImageURLChange}
      />
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleSubmit}>Update Banner</button>
      <button onClick={handleDelete}>Delete Banner</button>

    </div>
  );
};

export default updateCategory;
