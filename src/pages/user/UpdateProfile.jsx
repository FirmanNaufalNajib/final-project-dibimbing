import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"



const UpdateProfile = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("") 
  const [notif, setNotif] = useState("")
  const [profilePictureUrl, setprofilePictureUrl] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate() 

  const {id} = useParams()

  const handleEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handleProfilePictureUrl = (e) => {
    setprofilePictureUrl(e.target.value)
  }
  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = async () => { 
    
    const payload = {
      email: email, 
      name: name,
      profilePictureUrl: profilePictureUrl,
      phoneNumber: phoneNumber
      
    }

    setLoading(true)

    try{
    const res = await axios
    .post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile`, payload, 
    {headers: 
      { 
        apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
        Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k'
      }
    })
      console.log(res)
      setLoading(false)
       setNotif(res.data.data.name + 'profile was update!')
       setTimeout(() => {
         navigate("/allUser")
         }, 1500)

    }  catch (err) {
      setLoading(false)
      setNotif(err.message)
    } 
  }

  return (
    <>
    <div className="updateProfile-container">
      
      <div className="form-updateProfile">
        {!!notif.length && <h3>{notif}</h3>}
        <p>{id}</p>
        <input defaultValue={email} className="input-updateProfile-body" type="email" placeholder="Email" onChange={handleEmail}></input>
        <input className="input-updateProfile-body" type="text" placeholder="Full Name" onChange={handleName}></input>
        <input className="input-updateProfile-body" type="text" placeholder="url link" onChange={handleProfilePictureUrl}></input>
        <input className="input-updateProfiler-body" type="number" placeholder="phone" onChange={handlephoneNumber}></input>

        <button className="updateProfile-button" onClick={handleSubmit}>{loading ? 'loading..' : 'Update'}</button>
      </div>
    </div>
    </>
  )

}

export default UpdateProfile