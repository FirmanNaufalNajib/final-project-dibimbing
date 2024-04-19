import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Promos = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const res = await axios.get(
          'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', 
          {headers: {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'}}
      );
        console.log(res)
        setPromos(res.data.data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchPromos();
  }, []);

  return (
    <div>
      <h1>List of Promos</h1>
      {promos.map(promo => (
        <div key={promo.id}>
          <h2>{promo.title}</h2>
          <img src={promo.imageUrl} alt={promo.title} style={{ maxWidth: '300px' }} />
          <p>{promo.description}</p>
          <p>Promo Code: {promo.promo_code}</p>
          
          <Link to={`promosById/${promo.id}`}>
              <button>Detail Promo</button>
              </Link>
        </div>
      ))}
    </div>
  );
};

export default Promos;
