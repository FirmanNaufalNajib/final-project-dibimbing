import { useState, useEffect } from 'react';
import axios from 'axios';

const usePromoGet = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
        );
        setPromos(res.data.data);
      } catch (error) {
        console.error('Error fetching promos:', error);
        setError("Gagal memuat daftar banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchPromos();
  }, []);

  return { promos, loading, error };
};

export default usePromoGet;
