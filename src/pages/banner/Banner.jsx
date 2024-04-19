import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = () => {
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
       // console.log(res)
        setBanners(res.data.data);
      } catch (error) {
        setError("Gagal memuat daftar banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div>
      <h2>Daftar Banner</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {banners.map((banner) => (
            <li key={banner.id}>
              <h3>{banner.name}</h3>
              <p>id: {banner.id}</p>
              <p>Last Update: {banner.updatedAt}</p>
              <img src={banner.imageUrl} alt={banner.name} />
              <Link to={`updateBanner/${banner.id}`}>
              <button>Update Banner</button>
              </Link>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Banner;
