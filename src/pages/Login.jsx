import axios from 'axios'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [loading, setLoading] = useState(false)


  const handleEmail = (e) => { 
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = async () => { 
    
    const payload = {
      email: email, 
      password: password
    }

    setLoading(true)

    try{
    const res = await axios
    .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login', payload, 
    {headers: 
      { apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
    }
      })
      //console.log(res.data)
      localStorage.setItem("token", res.data.token)
      setLoading(false)
      setNotif('welcome.. '+ res.data.data.name)
      console.log(res)
      
      //setTimeout(() => {navigate("/users")}, 1000)

    }  catch (err) {
      console.log(err)
    } 
  }


  return ( 
    <>
      <div className="login-container">
        <img className="form-image" alt="administration" />

        <div className="form-login">
        {!!notif.length && <h3>{notif}</h3>}
          <input className="input-body" type="email" placeholder="Email" onChange={handleEmail}/>
          <input className="input-body" type="password" placeholder="Password" onChange={handlePassword}/>         
          <button className="login-button" onClick={handleLogin}>{loading ? 'loading..':'Login'}</button>
        </div>

        <p>or go to :</p>
        <Link to="/register">      
          <h4>Sign Up</h4>
        </Link>
      </div>
    </>
  )
}

export default Login

