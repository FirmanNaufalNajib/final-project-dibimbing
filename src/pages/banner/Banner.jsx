import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import '../styles.css';
import useBannerGet from "../../hooks/banner/useBannerGet";

const Banner = () => {
  const { banners, loading, error } = useBannerGet();

  const namePages = "Banners";

  return (
    <div className="banner-page d-flex">
      
      <div className="page-bar position-fixed">
      <SideBar namePage={namePages}/>
      <Link to={`createBanner`}>
        <button className="button-banner-create">Create Banner !</button>
      </Link>
      </div >

      <div className="banner-page-content d-flex ">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="banner-list container row">
          {banners.map((banner) => (
            <div className="banner-item container justify-content-center" key={banner.id}>

              <div className="banner-info-1 justify-content-center">
                <img className="banner-image mx-auto d-block" src={banner.imageUrl} alt={banner.name}  />   
              </div>
              <div className="banner-info-2 container">
                <h5>{banner.name}</h5>
                <p className="date-banner">Last Updated at {new Date(banner.updatedAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>

    
                <Link to={`updateBanner/${banner.id}`}>
                  <button className="button-banner-edit d-flex justify-content-end"><i className="bi bi-pencil-square"></i></button>
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}
      </div>
      

      
    </div>
  );
};

export default Banner;
