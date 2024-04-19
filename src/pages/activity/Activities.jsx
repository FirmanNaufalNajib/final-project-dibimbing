import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
      );
        console.log(res)
        setActivities(res.data.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>List of Promos</h1>
      {activities.map(activity => (
        <div key={activity.id}>
          <h2>{activity.title}</h2>
          <img src={activity.imageUrls[1]} alt={activity.title} style={{ maxWidth: '700px' }} />
          <p>{activity.description}</p>
  
          <Link to={`activityDetail/${activity.id}`}>
            <button>More Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Activities;
