import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const PromoById = () => {
  const [aPromo, setAPromo] = useState([])
  const {id} = useParams()

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
        setAPromo(res.data.data)

      } catch (error) {
        console.error(error)
      }
    }
    handleGetPromo()
  },  [id])

  return (
    <>
    <h1>Detail Promo</h1>
      <div key={aPromo.id}>
        <h2>{aPromo.title}</h2>
        <img src={aPromo.imageUrl} alt={aPromo.title} style={{ maxWidth: '300px' }} />
        <p>{aPromo.description}</p>
        <p>Promo Code: {aPromo.promo_code}</p>
        <p>Promo Discount Price: {aPromo.promo_discount_price}</p>
        <p>Minimum Claim Price: {aPromo.minimum_claim_price}</p>
        <p>Terms & Conditions: {aPromo.terms_condition}</p>
        <p>Created At: {aPromo.createdAt}</p>
        <p>Updated At: {aPromo.updatedAt}</p>

        <Link to={`updatePromo/${aPromo.id}`}>
        <button>Edit</button>
        </Link>
      </div>
    </>
  )
}

export default PromoById