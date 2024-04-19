import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [role, setRole] = useState("")
  const [profilePictureUrl, setprofilePictureUrl] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate() 

  const handleEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRole = (e) => {
    setRole(e.target.value)
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
      password: password,
      passwordRepeat: password,
      role: role,
      profilePictureUrl: profilePictureUrl,
      phoneNumber: phoneNumber, 

    }
    
    setLoading(true)

    try{
    const res = await axios
    .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', payload, 
    {headers: 
      { apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
    }
      })
      console.log(res)
      setLoading(false)
       setNotif('welcome' + res.data.data.name)
       setTimeout(() => {
         navigate("/login")
         }, 1000)

    }  catch (err) {
      setNotif(err.message)
    } 
  }

  return (
    <>
    <div className="register-container">
      
      <div className="form-register">
        {!!notif.length && <h3>{notif}</h3>}
        <input className="input-register-body" type="email" placeholder="Email" onChange={handleEmail}></input>
        <input className="input-register-body" type="text" placeholder="Full Name" onChange={handleName}></input>
        <input className="input-register-body" type="password" placeholder="Password" onChange={handlePassword}></input>
        <input className="input-register-body" type="password" placeholder="Repeat your Password" onChange={handlePassword}></input>
        <div onChange={handleRole}>
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
        <input className="input-register-body" type="text" placeholder="url link" onChange={handleProfilePictureUrl}></input>
        <input className="input-register-body" type="number" placeholder="phone" onChange={handlephoneNumber}></input>


        

        <button className="register-button" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
    

    </>
  )

}

export default Register