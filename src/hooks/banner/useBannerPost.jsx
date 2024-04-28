import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useBannerPost = () => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageURLChange = (e) => setImageURL(e.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner",
        { name: title, imageUrl: imageURL },
        {
          headers: { 
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
          }
        }
      );
      setMessage("Banner berhasil dibuat!");
      setTitle("");
      setImageURL("");
      navigate("/banner");
    } catch (error) {
      setMessage("Gagal membuat banner. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    setTitle,
    imageURL,
    setImageURL,
    loading,
    message,
    handleTitleChange,
    handleImageURLChange,
    handleSubmit
  };
};

export default useBannerPost;
