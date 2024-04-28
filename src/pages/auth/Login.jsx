import axios from 'axios'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar'

const Login = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [loading, setLoading] = useState(false)
  const imageLogin = 'https://a.cdn-hotels.com/gdcs/production64/d1688/8eac9694-13d8-4228-bf14-9493e562ad66.jpg'


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
      localStorage.setItem("token", res.data?.token)
      localStorage.setItem("name", res.data?.data?.name)
      localStorage.setItem("role", res.data?.data?.role)



      setLoading(false)
      setNotif('welcome.. '+ res.data.data.name)

      if (res.data.data.role === 'admin') {
        navigate('/dashboard')
      } else {
        navigate('/')
      }
      
      

    }  catch (err) {
      console.log(err)
    } 
  }

 

  return ( 
    <>
      <div className="login-page container-fluid" >
        
       
      <img className='login-img position-fixed top-50 start-50 translate-middle' src={imageLogin} alt='login'/>
      <Navbar/>
        <div className="form-login position-fixed top-50 start-50 translate-middle d-flex align-items-center container">
        {!!notif.length && <h3>{notif}</h3>}
          <input className="input-body" type="email" placeholder="Email" onChange={handleEmail}/>
          <input className="input-body" type="password" placeholder="Password" onChange={handlePassword}/>         
          <button className="login-button" onClick={handleLogin}>{loading ? 'loading..':'Login'}</button>

          <p>or</p>
        <Link to="/register">      
          <h4>Sign Up</h4>
        </Link>

        </div>
        

      </div>
    </>
  )
}

export default Login

