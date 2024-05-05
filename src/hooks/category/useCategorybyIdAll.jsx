import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { close } from "../../features/modalSlice";
const useCategorybyIdAll = () => {

  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const {id} = useParams();

  const dispatch = useDispatch();

  //handle input
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };
  console.log(file)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/${id}`,
          {headers: 
            { apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c' 
           } 
          }
        );
        console.log(res)
        const CategoryData = res.data.data;
        setCategory(CategoryData);
        setTitle(CategoryData.name);
        setImageURL(CategoryData.imageUrl);

      } catch (error) {
        setError("Gagal memuat data banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  console.log(category)
  

  const handleSubmit = async () => {

    setLoading(false);

    try {
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
    setImageURL(imageResponse?.data?.url)
    setUploaded(true);
    setMessage('');


       // Create banner
      const res = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-category/${id}`, 
        { name: title, imageUrl: imageResponse?.data?.url },
        {
          headers: 
            { 
              apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
        }
      );
      console.log("Banner berhasil diperbarui:", res.data);
      setTitle("")
      setMessage(res.data.message);
      navigate("/category");

    } catch (error) {
      console.error("Gagal memperbarui banner:", error);
      setMessage(error.message, "Gagal memperbarui banner. Silakan coba lagi.")
    }
  };

  const handleDelete = async () => {
    try {
        const res = await axios.delete(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${id}`,
          {
            headers: 
              { 
                apiKey: 
              '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
                Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
              }
          }
        );
        
        setMessage("Category berhasil dihapus");
        dispatch(close());
        navigate("/category");
        } 
    catch (error) {
          console.error("Gagal menghapus Category:", error);
          setMessage(error.message)
        }
  };
  
  return {
    category, 

    title, 
    setTitle, 
    imageURL, 
    setImageURL, 
    loading, 
    setLoading, 
    error, 
    setError, 
    message, 
    setMessage, 
    file,
    setFile,
    uploaded,
    setUploaded,

    navigate,
    handleSubmit,
    handleDelete,

    handleFileChange,
    handleTitleChange,
    handleImageURLChange
  }
}

export default useCategorybyIdAll
