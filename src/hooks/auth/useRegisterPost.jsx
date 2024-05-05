import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const useRegisterPost = () => {
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

  return {
    email, 
    name, 
    password, 
    notif, 
    role, 
    profilePictureUrl, 
    phoneNumber, 
    loading, 
    handleSubmit, 
    setEmail, 
    setName, 
    setPassword, 
    setRole, 
    setprofilePictureUrl, 
    setphoneNumber,
    imageRegister
  }
}

export default useRegisterPost