import { useState, useEffect } from "react";
import axios from "axios";

const useBannerGet = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' }}
        );
        setBanners(res.data.data);
      } catch (error) {
        setError("Gagal memuat daftar banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBanners();
  }, []);

  return { banners, loading, error };
};

export default useBannerGet;
