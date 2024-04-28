import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import '../styles.css';
import useCategoryGet from '../../hooks/category/useCategoryGet';
const Category = () => {
  const { categories, loading, error } = useCategoryGet();

  return (
    <div className="category-page d-flex">
      <div className="page-bar position-fixed">
      <SideBar namePage="Categories"/>
      <Link to={`createCategory`}>
        <button className="button-category-create">Create Category </button>
      </Link>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="category-list container row">
      {categories.map(category => (
        <div className="category-item container justify-content-center" key={category.id}>

          
          <div className="category-info-1 justify-content-center">
          <img className="category-image mx-auto d-block" src={category.imageUrl} alt={category.name} style={{ maxWidth: '300px' }} />
          </div>

          <div className="category-info-2 container">
          <h4>{category.name}</h4>
          <Link to={`categoryDetail/${category.id}`}>
            <i class="button-category-edit bi bi-card-list d-flex justify-content-end"></i>
          </Link>
          </div>

        </div>
      ))}
    </div>
      )}
      
    </div>
  );
};

export default Category;
