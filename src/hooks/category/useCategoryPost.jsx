import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useCategoryPost = () => {
  const [title, setTitle] = useState("");  
  const [imageURL, setImageURL] = useState("");

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageURLChange = (e) => setImageURL(e.target.value);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
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
      setImageURL(imageResponse?.data?.url);
      setUploaded(true);

        // Create banner
        const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
        { name: title, imageUrl: imageResponse?.data?.url },
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
        setTitle("");
        navigate("/category");
      } 
    catch (err) {
      console.error(err)
      setMessage("Gagal membuat Category. Silakan coba lagi.");
      } 
    finally {
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
    handleSubmit,
    file,
    setFile,
    uploaded,
    setUploaded,
    handleFileChange   
  }
}

export default useCategoryPost

