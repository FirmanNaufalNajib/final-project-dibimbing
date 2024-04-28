import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import usePromoGet from '../../hooks/promo/usePromoGet';
import Navbar from '../../components/Navbar';


const Promos = () => {
 
  const { promos, loading, error } = usePromoGet();
  const role = localStorage.getItem("role")
  
  return (
    <div className='promos-page'>
      {role === "admin" ? 
      <div className='page-bar position-fixed' >
        <SideBar namePage="Promos" />
        <Link to={`createPromo`}>
          <button className="button-promo-create">Create Promo!</button>
        </Link>
      </div>
      : <Navbar/>}

      <div className='promos-page-content d-flex'>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
      <div className='promos-list container row'>
        {promos.map(promo => (
          <div class="promos-item container justify-content-center card text-bg-transparent" >
            <Link to={`promosById/${promo.id}`}>
          <img src={promo.imageUrl} class="promos-image" alt={promo.title}   style={{ maxWidth: '350px' }}/>
          <div class="card-img-overlay promos-info-1-user">
            <h5 class="promos-title">{promo.title}</h5>
            <p class="promos-price">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(promo.promo_discount_price)}</p>
            <p class="promos-term"><small>{promo.terms_condition}</small></p>
          </div>
          </Link>
        </div>

          
        ))}
      </div>
      )}
      </div>
    </div>
  );
};

export default Promos;
