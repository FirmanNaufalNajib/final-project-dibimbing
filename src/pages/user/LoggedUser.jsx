import axios from "axios"
import { useState, useEffect } from "react"
import UserCard from "../../components/UserCard";
import SideBar from "../../components/SideBar";


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
    setLogUser(res.data) 

  }  catch (err) {
    console.log(err)
  } 
}

useEffect(() => {
  handleLogUser()
}, [])

return (
  <>
  <div className="user-page d-flex">
    <div className="page-bar position-fixed">
          <SideBar/>
    </div>
    <div className="user-page-content container">
    <div className="user-card-tabler container d-flex flex-row justify-content-between align-items-center">
            <p className="img-text">Image Profile</p>
            <p> ID</p>
            <p>Name</p>
            <p>Email</p>
            <p className="img-text">Phone Number</p>
            <p className="role-text">Role</p>
            <p>Update</p>
    </div>

    {logUser.length > 0 ? (
      logUser.map((user) => {
        if (user.role === "user") {
          return (
            <div className="user-item container d-flex flex-row justify-content-between align-items-center">

              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phoneNumber={user.phoneNumber}
                profilePictureUrl={user.profilePictureUrl}
                role={user.role}
              />

            </div>
          );
        }
      })
    ) : (
      <h2>Nobody Log on</h2>
    )}
    </div>

    </div>
    </>
  );
};

export default LoggedUsers;