import { useState, useEffect } from 'react';
import axios from 'axios';

const useActivitiesGet = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
        );
        setActivities(res.data.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
        setError("Error fetching activities. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, loading, error };
};

export default useActivitiesGet;
