import { useState, useEffect } from "react";
import axios from "axios";
const useAlluserGet = () => {

  const [allUsers, setAllUsers] = useState([]);
 
  useEffect(() => {
    handleAllUsers();
  }, []); // Fetch users when component mounts

  const handleAllUsers = async () => {
    try {
      const res = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ",
          },
        }
      );
      const allperson = res.data.data;
      const sortedUsers = allperson.filter((person) => {
        return person.role === 'user'
      })
      setAllUsers(sortedUsers);
    } catch (err) {
      console.log(err);
    }
  };


  return { allUsers, setAllUsers };
}

export default useAlluserGet