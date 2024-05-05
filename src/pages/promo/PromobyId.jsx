
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"
import Navbar from "../../components/Navbar"
import usePromobyidAll from "../../hooks/promo/usePromobyidAll"
import PromoByIdCard from "../../components/PromoByIdCard"
import '../styles.css';

const PromoById = () => {

  const {id} = useParams();
  const { promo, loading, error,} = usePromobyidAll();

  console.log(promo)

   const role = localStorage.getItem("role")

  return (
    <>

      <div key={promo.id} className="promo-detail " >
      
      {/* {role === "admin" ?  */}
      <div className='page-bar position-fixed' >
        <SideBar namePage="Promo" />
        <Link to={`updatePromo/${id}`}>
        <button className="edit-button">Update Promo!</button>
        </Link>
      </div>
      {/* : <Navbar/>} */}

      <PromoByIdCard 
      promo={promo}
      key={promo.id}
      id={promo.id}
      title={promo.title}
      description={promo.description}
      imageUrl={promo.imageUrl}
      promo_code={promo.promo_code}
      promo_discount_price={promo.promo_discount_price}
      minimum_claim_price={promo.minimum_claim_price}
      terms_condition={promo.terms_condition}
      />

      </div>



    </>
  )
}

export default PromoById