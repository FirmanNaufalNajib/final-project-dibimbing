import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
      );
        console.log(res)
        setCategories(res.data.data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>List of Categories</h1>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <img src={category.imageUrl} alt={category.name} style={{ maxWidth: '300px' }} />
          
          <Link to={`categoryDetail/${category.id}`}>
              <button>Detail Category</button>
              </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
