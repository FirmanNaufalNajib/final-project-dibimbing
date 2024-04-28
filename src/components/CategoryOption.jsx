import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './styles-components.css'
import { Link } from "react-router-dom";


const CategoryOption = (props) => {
  const [activitiesById, setActivitiesById] = useState([]);

  useEffect(() => {
    const getActivitiesById = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
      );
        console.log(res)
        setActivitiesById(res.data.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    getActivitiesById();
  }, []);



  return (
    <div className="category-option">

  <select className="category-select" onChange={(e) => props.handleCategoryActivityChange(e.target.value)}>
  {activitiesById.map((activity) => (

    <option key={activity.id} value={activity.id}>{activity.name}</option>

    
  ))}
</select>

  </div>

  );
}

export default CategoryOption