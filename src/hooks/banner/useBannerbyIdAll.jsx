
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { close } from '../../features/modalSlice'
const useBannerbyIdAll = () => {
  const [banner, setBanner] = useState({});
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  // handle input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  }
  const handleFileChange = (e) => {
      setFile(e.target.files[0]);
  };
  console.log(file)

  //Update Banner by Id API
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
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${id}`, 
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
      navigate("/banner");

    } catch (error) {
      console.error("Gagal memperbarui banner:", error);
      setMessage(error.message, "Gagal memperbarui banner. Silakan coba lagi.")
    }
  };
  //get Banner by Id API
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${id}`,
          {headers: 
            { 
              apiKey: 
            '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
              Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }
          }
        );
        console.log(res)
        const bannerData = res.data.data;
        setTitle(bannerData.name);
        setImageURL(bannerData.imageUrl);
        setFile(null);
        setBanner(bannerData);
      } catch (error) {
        setError("Gagal memuat data banner. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, [id]);

  //Delete Banner by Id API
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`,
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
      console.log("Banner berhasil dihapus:", res.data);
      dispatch(close());
      setMessage("banner berhasil dihapus");
      navigate("/banner");

    } catch (error) {
      console.error("Gagal menghapus banner:", error);
      setMessage("Gagal menghapus banner. Silakan coba lagi.");
    }
  };

  console.log("banner", banner)

  return (
    {
      banner,
      title, 
      imageURL, 
      file,
      uploaded,
      setBanner,
      setTitle,
      setImageURL,
      setFile,
      setUploaded,
      message, 
      loading, 
      error, 
      setMessage,
      setLoading,
      setError,

      navigate,
      handleTitleChange,
      handleImageURLChange,
      handleFileChange,
      handleSubmit, 
      handleDelete
    }
  )


}

export default useBannerbyIdAll
