import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const useUpdateProfilePost = () => {
  const [allUser, setAllUser] = useState([])

  const [email, setEmail] = useState("")
  const [name, setName] = useState("") 
  const [profilePictureUrl, setprofilePictureUrl] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState("")

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [updatedUserDetail, setUpdatedUserDetail] = useState([{
    email: email,
    name: name,
    profilePictureUrl: profilePictureUrl,
    phoneNumber: phoneNumber,
  }])

  const navigate = useNavigate() 
  const handleEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handleProfilePictureUrl = (e) => {
    setprofilePictureUrl(e.target.value)
  }
  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const {id} = useParams()

  useEffect(() => {
    handleAllUsers();
  }, []); 

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
      console.log('allperson', allperson)
      setAllUser(allperson)

    } catch (err) {
      console.log(err);
    }
  };


  // sort array
  const sortArray = allUser
  .flatMap((array) => array)
  .filter((user) => user.id === id); 

  console.log('sortArray',sortArray);


 // HANDLE SUBMIT
  const handleSubmit = async () => { 
    setLoading(true)

    try{

    // Upload image
    const formData = new FormData();
    formData.append('image', file);

    const imageResponse = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image', formData,
    {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
      },
    });
    console.log(imageResponse);
    setprofilePictureUrl(imageResponse?.data?.url)
    setUploaded(true);
    setNotif('');

    // Create banner
    const res = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile`,
    {
      email: email, 
      name: name,
      profilePictureUrl: imageResponse?.data?.url,
      phoneNumber: phoneNumber
      
    }, 
    {headers: 
      { 
        apiKey: 
      '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
        Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
      }
    })
      console.log(res)
      
      setName("")
      setEmail("")
      setprofilePictureUrl("")
      setphoneNumber("")
      setLoading(false)
      setNotif(res.data.message)
      setTimeout(() => {
         navigate("/allUser")
         }, 1500)

    }  catch (err) {
      setLoading(false)
      setNotif(err.message)
    } 
  }



  console.log(updatedUserDetail)

  return {
    email,
    setEmail,
    name,
    setName,
    notif,
    setNotif,
    profilePictureUrl,
    setprofilePictureUrl,
    phoneNumber,
    setphoneNumber,
    loading,
    handleSubmit,
    sortArray,
    navigate,
    handleEmail,
    handleName,
    handlephoneNumber,
    handleProfilePictureUrl,

    updatedUserDetail,
    setUpdatedUserDetail,
    file,
    setFile,
    uploaded,
    setUploaded,
    handleFileChange,

  }
}


export default useUpdateProfilePost