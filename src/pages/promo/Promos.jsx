import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import usePromoGet from '../../hooks/promo/usePromoGet';
import Navbar from '../../components/Navbar';
import '../styles.css';
import PromoCard from '../../components/PromoCard';


const Promos = () => {
 
  const { promos, loading, error } = usePromoGet();
  const role = localStorage.getItem("role")
  
  return (
    <div className='promos-page'>

       {role === "admin" ?  
      <div className='page-bar position-fixed' >
        <SideBar namePage="Promos" />
        <Link to={`createPromo`}>
          <button className="button-create">Create Promo!</button>
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
            <Link to={`/promos/promosById/${promo.id}`} key={promo.id}>
            <PromoCard
            promos={promo}
            key={promo.id}
            id={promo.id}
            title={promo.title}
            imageUrl={promo.imageUrl}
            promo_discount_price={promo.promo_discount_price}
            terms_condition={promo.terms_condition}
            /> 
            </Link>        
          ))}
        </div>
        )}
      </div>

    </div>
  );
};

export default Promos;
