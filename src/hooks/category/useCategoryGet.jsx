import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategoryGet = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',
          { headers: { apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' } }
        );
        setCategories(res.data.data);
      } catch (error) {
        setError('Error fetching categories. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategoryGet;
