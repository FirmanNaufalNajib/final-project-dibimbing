import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Navbar from "../../components/Navbar"

const Register = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [role, setRole] = useState("")
  const [profilePictureUrl, setprofilePictureUrl] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const imageRegister = 'https://free4kwallpapers.com/uploads/originals/2019/05/07/ecosystem-tropical-rain-forest-fore-wallpaper.jpg'

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
    <div className="login-page container-fluid">
      

    <img className='login-img position-fixed top-50 start-50 translate-middle' src={imageRegister} alt='login'/>
      <Navbar/>

      <div className="form-login position-fixed top-50 start-50 translate-middle d-flex align-items-center container">
        {!!notif.length && <h3>{notif}</h3>}
        <input className="input-register-body" type="email" placeholder="Email" onChange={handleEmail}></input>
        <input className="input-register-body" type="text" placeholder="Full Name" onChange={handleName}></input>
        <input className="input-register-body" type="password" placeholder="Password" onChange={handlePassword}></input>
        <input className="input-register-body" type="password" placeholder="Repeat your Password" onChange={handlePassword}></input>
        <div onChange={handleRole}>

          <div className="input-register-radio">
          <input
                className="input-register-body"
                type="radio"
                name="role"
                value= "admin"          
              /><p>Admin</p>            
          </div>
        
          <div className="input-register-radio">
          <input
                className="input-register-body"
                type="radio"
                name="role"
                value= "user"    
              /><p>User</p>
          </div>
          
        
        </div>
        <input className="input-register-body" type="text" placeholder="Profile Picture" onChange={handleProfilePictureUrl}></input>
        <input className="input-register-body" type="number" placeholder="phone" onChange={handlephoneNumber}></input>


        

        <button className="login-button" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
    

    </>
  )

}

export default Register