import React, { useState } from "react";
import axios from "axios";
import CategoryForm from "../../components/CategoryForm";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [title, setTitle] = useState("");  
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const pagesName = "Create Category";

  const Navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

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
        Navigate("/category");
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
    <div className="create-banner">

    <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar/>
    </div>

    <div className="form-banner position-fixed top-50 start-50 translate-middle d-flex align-items-center">

    <div className="current-banner">
      <img src={imageURL} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
    </div>

    <div className="input-banner">
      <CategoryForm
        pagesName={pagesName}
        title={title}
        imageURL={imageURL}
        handleTitleChange={handleTitleChange}
        handleImageURLChange={handleImageURLChange}
      />
       {message && <p>{message}</p>}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Promo"}
      </button> 
      </div>
      </div>
      
      </div>
  );
};

export default CreateCategory;