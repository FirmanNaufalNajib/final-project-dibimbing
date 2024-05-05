import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {close} from '../../features/modalSlice';

const usePromobyidAll = () => {
  const [promo, setPromo] = useState([]);
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [terms_condition, setTerms_condition] = useState(""); 
  const [promo_code, setPromo_code] = useState(""); 
  const [promo_discount_price, setPromo_discount_price] = useState("");
  const [minimum_claim_price, setMinimum_claim_price] = useState("");

  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {id} = useParams();

  const dispatch = useDispatch()

  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleMinimum_claim_priceChange = (e) => setMinimum_claim_price(Number(e.target.value))
  const handlePromo_discount_priceChange = (e) => setPromo_discount_price(Number(e.target.value))
  const handlePromo_codeChange = (e) => setPromo_code(e.target.value)
  const handleTerms_conditionChange = (e) => setTerms_condition(e.target.value)
  const handleImageUrlChange = (e) => setImageURL(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`, 
          { headers: { apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' } }
        );
        console.log(res);
        setPromo(res.data.data);

        const promoData = res.data.data;
        setTitle(promoData.title);
        setImageUrl(promoData.imageUrl);
        setDescription(promoData.description);
        setTerms_condition(promoData.terms_condition);
        setPromo_code(promoData.promo_code);
        setPromo_discount_price(promoData.promo_discount_price);
        setMinimum_claim_price(promoData.minimum_claim_price);
      } catch (error) {
        console.error('Error fetching promo:', error);
        setError("Gagal memuat data promo. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
      fetchPromo();  
  }, [id]);

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
    setImageUrl(imageResponse?.data?.url)
    setUploaded(true);
    setMessage('');

    // Create banner
    const res = await axios.post(
      `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`,
        {
          name: title,
          imageUrl: imageResponse?.data?.url,
          description: description,
          terms_condition: terms_condition,
          promo_code: promo_code,
          promo_discount_price: promo_discount_price,
          minimum_claim_price: minimum_claim_price,
        },
          {
          headers: 
            {
              apiKey:
              '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              Authorization: 
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
            }        
          }
        )
        console.log(res);
        setTitle("");
        setDescription("");
        setTerms_condition("");
        setPromo_code("");
        setPromo_discount_price("");
        setMinimum_claim_price("");
        setMessage("Promo berhasil dibuat!");
        navigate("/promos");
      } 
      catch (error) {
        console.error('Error update promo:', error);
        setMessage("Gagal update Promo. Silakan coba lagi.");
      }
      finally {
        setLoading(false);
      }
    }

    const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`,
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
      console.log("promo berhasil dihapus:", res.data);
      //message("Promo berhasil dihapus");
      dispatch(close())
      navigate("/promos");
    } 
    catch (error) {
      console.error("Gagal menghapus promo:", error);
      setMessage("Gagal menghapus promo. Silakan coba lagi.");     
    }

  };

  return { 
    promo, 
    setPromo, 
    
    description, 
    setDescription,
    imageUrl, 
    setImageUrl,
    terms_condition, 
    setTerms_condition,
    promo_code, 
    setPromo_code,
    promo_discount_price, 
    setPromo_discount_price,
    minimum_claim_price, 
    setMinimum_claim_price,
    title, 
    setTitle,
    file,
    setFile,
    uploaded,
    setUploaded,

    handleTitleChange,
    handleImageUrlChange,
    handleDescriptionChange,
    handleTerms_conditionChange,
    handlePromo_codeChange,
    handlePromo_discount_priceChange,
    handleMinimum_claim_priceChange,
    handleFileChange,

    handleSubmit, 
    handleDelete
  };
};

export default usePromobyidAll;
