import React, { useState } from "react";
import axios from "axios";
import BannerForm from "../../components/BannerForm";
import SideBar from "../../components/SideBar";
import '../styles.css';
import useBannerPost from "../../hooks/banner/useBannerPost";

const CreateBanner = () => {
  const {
    title,
    setTitle,
    imageURL,
    setImageURL,
    loading,
    message,
    handleTitleChange,
    handleImageURLChange,
    handleSubmit
  } = useBannerPost();

  const pagesName = "Create Banner";

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
      <BannerForm
        pagesName={pagesName}
        title={title}
        imageURL={imageURL}
        handleTitleChange={handleTitleChange}
        handleImageURLChange={handleImageURLChange}
        setTitle={setTitle}
        setImageURL={setImageURL}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Banner"}
      </button>
      </div>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateBanner;
