import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryForm from "../../components/CategoryForm";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import { close } from "../../features/modalSlice";

const updateCategory = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const pagesName = "Update Category";

const Navigate = useNavigate();

const [isModalOpen, setIsModalOpen] = useState(false);

const dispatch = useDispatch();

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
      dispatch(close());
      setMessage("Banner berhasil diperbarui");
      Navigate("/category");
    } catch (error) {
      console.error("Gagal memperbarui banner:", error);
      setMessage(error.message)
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
        setMessage("Category berhasil dihapus");
        Navigate("/category");
        } 
    catch (error) {
          console.error("Gagal menghapus Category:", error);
          setMessage(error.message)
        }
  };

  const handleConfirm = () => {
    handleDelete()
  
  };

  const handleCancel = () => {
    dispatch(close());
  };

  const clearItemAndCloseModal = () => {; 
    setIsModalOpen(true); }


  console.log(isModalOpen)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-banner">
      <section className="edit-banner-title">
        {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
      </section>
      <div className="page-bar position-fixed top-0 start-0 container">
        <SideBar />
        <button class="btn btn-danger bi bi-trash3" onClick={() => setIsModalOpen(true)}>Delete Banner</button>
      </div>
      
      <div className="form-banner d-flex position-fixed top-50 start-50 translate-middle d-flex align-items-center">
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
          {message && <p className="message-result">{message}</p>}
        <button onClick={handleSubmit}>Update Banner</button>       
        </div>
      </div>
    </div>
    
  );
};

export default updateCategory;
