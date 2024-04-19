import axios from "axios"


const Dashboard = () => {

  const handleLogout = async () => { 
    
    try{
    const res = await axios
    .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout',
    {headers: 
      { apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
    }
      })
      console.log(res)
      alert(res.data.data.name + "you just log out")
      //setTimeout(() => {navigate("/users")}, 1000)

    }  catch (err) {
      console.log(err)
    } 
  }


  return (
    <>
    <button onClick={handleLogout}>Logout</button>
    
    </>
  )
}

export default Dashboard