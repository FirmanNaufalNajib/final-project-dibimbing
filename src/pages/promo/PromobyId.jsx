import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"
import Navbar from "../../components/Navbar"
import '../styles.css';

const PromoById = () => {


  const [promo, setPromo] = useState([])
  const {id} = useParams()
  const role = localStorage.getItem("role")

  useEffect(() => {
    const handleGetPromo = async () => {
      
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
          }
        )
        console.log(res)
        setPromo(res.data.data)

      } catch (error) {
        console.error(error)
      }
    }
    handleGetPromo()
  },  [id])

  return (
    <>
    

      <div key={promo.id} className="promo-detail " >
      
      {role === "admin" ? 
      <div className='page-bar position-fixed' >
        <SideBar namePage="Promos" />
        <Link to={`createPromo`}>
          <button className="button-promo-create">Create Promo!</button>
        </Link>
      </div>
      : <Navbar/>}

      <div className="promo-page container">
      
      

        <div className="promo-content position-fixed top-50 start-50 translate-middle" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${promo.imageUrl})`}} >
        <h2>{promo.title}</h2>
        
        <p>{promo.description}</p>

        <div className="promo-code ">
        <p>Promo Code</p>
        <p><strong>{promo.promo_code}</strong></p>
        </div>
        
        <div className="promo-pricing d-flex">

            <div className="promo-price">
            <p>Discount Price</p>
          <p className="text-value">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(promo.promo_discount_price)}</p>
            </div>

            <div className="minimum-claim">
              <p>Minimum Claim</p>
          <p className="text-value">{Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(promo.minimum_claim_price)}</p>
            </div>
        </div>

          <div className="terms-condition">
          <p>Terms & Conditions: </p>
          <p>{promo.terms_condition}</p>
          </div>
        </div>


        </div>

      </div>



    </>
  )
}

export default PromoById