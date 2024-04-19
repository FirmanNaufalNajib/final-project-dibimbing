import axios from "axios"
import { useState, useEffect } from "react"


const LoggedUsers = () => {

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
    setLogUser(res.data.data) 

  }  catch (err) {
    console.log(err)
  } 
}

useEffect(() => {
  handleLogUser()
}, [])

return (
  <>
  <h1>Log User:</h1>
  {Array.isArray(logUser) && logUser.map((user) => (
        user.role === "user" ? (
          <div className="userCard" key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <h3>{user.role}</h3>
          </div>
        ) : <h2>Nobody Log on</h2>
      ))}
    </>
  );
};

export default LoggedUsers;