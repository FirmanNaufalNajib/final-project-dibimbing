import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const usePromobyidGet = () => {
  const [promo, setPromo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`, 
          { headers: { apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' } }
        );
        console.log(res);
        setPromo(res.data.data);
      } catch (error) {
        console.error('Error fetching promo:', error);
        setError("Gagal memuat data promo. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    
      fetchPromo();
   
  }, [id]);

  return { promo, loading, error };
};

export default usePromobyidGet;
