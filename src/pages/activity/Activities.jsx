import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import useActivitiesGet from '../../hooks/activity/useActivityGet';
import Navbar from '../../components/Navbar';
import '../styles.css';

const Activities = () => {
  const { activities, loading, error } = useActivitiesGet();
  const namePages = "Activities";
  const role = localStorage.getItem("role")

  return (
    <div lassName="activity-page d-flex">

{role === "admin" ? 
      <div className='page-bar position-fixed' >
        <SideBar namePage="Promos" />
        <Link to={`createPromo`}>
          <button className="button-promo-create">Create Promo!</button>
        </Link>
      </div>
      : <Navbar/>}

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
      <div className="activity-page-content d-flex ">

      <div className="activity-list container row">
      {activities.map(activity => (
        <div className="activity-item container justify-content-center" key={activity.id}>
          <div className="activity-info-1 justify-content-center">
          <img className="activity-image mx-auto d-block" src={activity.imageUrls[1]} alt={activity.title} style={{ maxWidth: '700px' }} />
          </div>
          <div className="activity-info-2 container">
          <h2>{activity.title}</h2>
          </div>
          <Link to={`activityUser/${activity.id}`}>
             <i class="button-activity-edit bi bi-card-list d-flex justify-content-end"></i>
          </Link>
        </div>
      ))}
      </div>
      </div>
    )}
      
    </div>
  );
};

export default Activities;
