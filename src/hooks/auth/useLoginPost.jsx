import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const useLoginPost = () => {
  
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [loading, setLoading] = useState(false)
  const imageLogin = 'https://a.cdn-hotels.com/gdcs/production64/d1688/8eac9694-13d8-4228-bf14-9493e562ad66.jpg'

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

      // if (res.data.data.role === 'admin') {
      //   navigate('/dashboard')
      // } else {
      //   navigate('/')
      // }
      
      

    }  catch (err) {
      console.log(err)
    } 
  }


  return { email, password, notif, loading, imageLogin, handleLogin, setEmail, setPassword }
}

export default useLoginPost