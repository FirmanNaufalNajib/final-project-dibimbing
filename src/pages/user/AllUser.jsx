import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


const AllUsers = () => {

const [allUser, setAllUser] = useState([])
const navigate = useNavigate()



const handleAllUser = async () => { 
    
  try{
  const res = await axios
  .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user', 
  {headers: 
    { apiKey: 
    '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
    Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
  }
    })
    //console.log(res) 
    setAllUser(res.data.data) 

  }  catch (err) {
    console.log(err)
  } 
}

useEffect(() => {
  handleAllUser()
}, [])

return (
  <>
  <h1>All Users:</h1>
  {allUser.map((user) => (
    // Check if the user's role is "user"
    user.role === "user" && (
      <div className="userCard" key={user.id}>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <h3>{user.role}</h3>

        <Link to={`updateProfile/${user.id}`}>
        <button>Update Profile</button>
        </Link>

        <Link to={`updateUserRole/${user.id}`}>
        <button>Update Role</button>
        </Link>
        
      </div>
    )
  ))}
</>
);
};

export default AllUsers;