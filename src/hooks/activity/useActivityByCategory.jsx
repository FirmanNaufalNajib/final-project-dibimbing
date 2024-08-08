import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useActivitybyCategory = () => {
  const [anActivity, setAnActivity] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {id} = useParams();

  useEffect(() => {
    const fetchActivitiesByCategory = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/${id}`,
          { headers: { apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' } }
        );
        console.log(res?.data?.data)
        setAnActivity(res?.data?.data);
      } catch (error) {
        console.error('Error fetching activities by category:', error);
        setError("Error fetching activities by category. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivitiesByCategory();
  }, [id]);

  console.log(anActivity)

  return { anActivity, loading, error, setAnActivity, setError, setLoading };
};

export default useActivitybyCategory;
