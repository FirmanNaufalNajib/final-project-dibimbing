import { useState, useEffect } from "react";
import axios from "axios";

const useLoggeduserGet = () => {

const [logUser, setLogUser] = useState([])
const handleLogUser = async () => {   
  try{
  const res = await axios
  .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', 
  {headers: 
    { 
      Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ',
      apiKey: 
    '24405e01-fbc1-45a5-9f5a-be13afcd757c'    
  }
    })
    console.log(res) 
    setLogUser(res.data) 

  }  catch (err) {
    console.log(err)
  } 
}

useEffect(() => {
  handleLogUser()
}, [])


return { logUser, setLogUser }
}

export default useLoggeduserGet