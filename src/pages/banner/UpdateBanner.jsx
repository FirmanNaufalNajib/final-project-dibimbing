import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import BannerForm from "../../components/BannerForm";
import '../styles.css';
import { close } from '../../features/modalSlice'
import Modal from "../../components/Modal";
import useBannerbyIdAll from "../../hooks/banner/useBannerbyIdAll";
import { useDispatch } from "react-redux";

const UpdateBanner = () => {
  const namePage = "Update Banner"
  //params: id
  const { id } = useParams();
  //hooks
  const  {
    title, 
    imageURL, 
    message, 
    loading, 
    error, 
    handleTitleChange,
    handleImageURLChange,
    handleFileChange,
    handleSubmit, 
    handleDelete
  } = useBannerbyIdAll();
  
  //redux: Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    handleDelete() 
  };
  const handleCancel = () => {
    dispatch(close());
  };
  const clearItemAndCloseModal = () => {; 
    setIsModalOpen(true); }

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-banner-page">
      <section className="edit-banner-title">
        {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
      </section>
      <div className="page-bar container">
        <SideBar namePage={namePage} />
        <button class=" delete-button btn btn-danger" onClick={() => setIsModalOpen(true)}><i className=" bi bi-trash3"></i>Delete Banner</button>
      </div>

      <div className="form-banner d-flex align-items-center">
        <div className="current-banner">
          <img src={imageURL} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
        </div>
        <div className="input-banner">
          <BannerForm
            id={id}
            namePage={namePage}
            title={title}
            imageURL={imageURL}
            handleTitleChange={handleTitleChange}
            handleImageURLChange={handleImageURLChange}
            handleFileChange={handleFileChange}
          />
          {message && <p className="message-result">{message}</p>}
          <button  onClick={handleSubmit}>Update Banner</button> 
        </div>
      </div>
    </div>
  );
};

export default UpdateBanner;
