import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams} from "react-router-dom"



const UpdateUserRole = () => {
   const [role, setRole] = useState("")
   const [loading, setLoading] = useState(false)
   const [notif, setNotif] = useState("")

   const navigate = useNavigate() 

   const {id} = useParams()

   const handleUpdateUserRole = (e) => {
    setRole(e.target.value)
   }

   const handleSubmitUserRole = async () => {
    const payload = {
      role: role  
    }

    setLoading(true)

    try{
    const res = await axios
    .post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${id}`, payload, 
    {headers: 
      { 
        apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
        Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
      }
    })
      console.log(res)
      setLoading(false)
       setNotif(res.message)
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
    <h1>Update Role</h1>
    {!!notif.length && <h3>{notif}</h3>}
      <div onChange={handleUpdateUserRole}>
          <input
                  className="input-register-body"
                  type="radio"
                  name="role"
                  value= "admin"
                  
                />Admin
          <input
                  className="input-register-body"
                  type="radio"
                  name="role"
                  value= "user"
                  
                />User
          </div>
      
      <button onClick={handleSubmitUserRole}>submit</button>
    </>
  )
}

export default UpdateUserRole