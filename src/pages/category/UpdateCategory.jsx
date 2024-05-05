import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { close } from "../../features/modalSlice";
import CategoryForm from "../../components/CategoryForm";
import SideBar from "../../components/SideBar";
import Modal from "../../components/Modal";
import useCategorybyIdAll from "../../hooks/category/useCategorybyIdAll";


const updateCategory = () => {
  const namePage = "Update Category";
  
  //params
  const { id } = useParams();
  //hooks
  const {
    title, 
    imageURL, 
    loading, 
    error, 
    message, 
    handleSubmit,
    handleDelete,
    handleFileChange,
    handleTitleChange,
    handleImageURLChange
  } = useCategorybyIdAll();

  
  // Redux: Modal
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className="edit-category-page">
      <section className="edit-banner-title">
        {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
      </section>
      <div className="page-bar position-fixed top-0 start-0 container">
        <SideBar namePage={namePage}/>
        <button class=" delete-button btn btn-danger" onClick={() => setIsModalOpen(true)}><i className=" bi bi-trash3"></i>Delete Category</button>
      </div>
      
      <div className="form-category d-flex align-items-center">
        <div className="current-category">
          <img src={imageURL} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
        </div>
        <div className="input-category">
          <CategoryForm
            id = {id}
            namePage={namePage}
            title={title}
            imageURL={imageURL}
            handleTitleChange={handleTitleChange}
            handleImageURLChange={handleImageURLChange}
            handleFileChange={handleFileChange}
          />
          {message && <p className="message-result">{message}</p>}
        <button onClick={handleSubmit}>Update Banner</button>       
        </div>
      </div>
    </div>
    
  );
};

export default updateCategory;
