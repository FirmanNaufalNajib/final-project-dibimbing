import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PromoForm from "../../components/PromoForm";
import SideBar from "../../components/SideBar";
import '../styles.css';
import { useNavigate } from "react-router-dom";
import usePromoPost from "../../hooks/promo/usePromoPost";
import usePromoGet from "../../hooks/promo/usePromoGet";
import Modal from "../../components/Modal";
import { close } from '../../features/modalSlice'
import { useDispatch } from "react-redux";

const UpdatePromo = () => {
  const pageName = "Update Promo";
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();

const handleImageUrlChange = (e) => setImageUrl(e.target.value)
const handleDescriptionChange = (e) => setDescription(e.target.value)
const handleTitleChange = (e) => setTitle(e.target.value)
const handleMinimum_claim_priceChange = (e) => setMinimum_claim_price(Number(e.target.value))
const handlePromo_discount_priceChange = (e) => setPromo_discount_price(Number(e.target.value))
const handlePromo_codeChange = (e) => setPromo_code(e.target.value)
const handleTerms_conditionChange = (e) => setTerms_condition(e.target.value)

const [isModalOpen, setIsModalOpen] = useState(false);
const dispatch = useDispatch()

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
          {headers: 
            {apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'},
          }
        )
        console.log(res)
        const bannerData = res.data.data;
        setTitle(bannerData.name);
        setImageUrl(bannerData.imageUrl);
      } catch (error) {
        setError("Gagal memuat data banner. Silakan coba lagi.");
      } finally {
        //setLoading(false);
      }
    };

    fetchPromo();
  }, [id]);

  const { 
    title,
    setTitle,
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
    loading,
    setLoading,
    message,
    setMessage,
    handleSubmit
  } = usePromoPost();


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
      dispatch(close())
      Navigate("/promos");
      

    } catch (error) {
      console.error("Gagal menghapus promo:", error);
      setMessage("Gagal menghapus promo. Silakan coba lagi.");
      
    }
  };

  const handleConfirm = () => {
    handleDelete()
  
  };

  const handleCancel = () => {
    dispatch(close());
  };

  const clearItemAndCloseModal = () => {; 
    setIsModalOpen(true); }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(isModalOpen)

  return (
    <div className="edit-banner">
      {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar />
      <button class="btn btn-danger bi bi-trash3" onClick={() => setIsModalOpen(true)}>Delete Promo</button> 
      </div>

      <div className="form-banner">


      <div className="current-banner">
        <img src={imageUrl} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
      </div>

      <div className="input-banner">
        <PromoForm
        pageName={pageName}
        title={title}
        description={description}
        imageUrl={imageUrl}
        terms_condition={terms_condition}
        promo_code={promo_code}
        promo_discount_price={promo_discount_price}
        minimum_claim_price={minimum_claim_price}
        handleDescriptionChange={handleDescriptionChange}
        handleTitleChange={handleTitleChange}
        handleimageUrlChange={handleImageUrlChange}
        handleTerms_conditionChange={handleTerms_conditionChange}
        handlePromo_codeChange={handlePromo_codeChange}
        handlePromo_discount_priceChange={handlePromo_discount_priceChange}
        handleMinimum_claim_priceChange={handleMinimum_claim_priceChange}
        />    
        {message && <p className="message-result">{message}</p>}
        <button onClick={handleSubmit}>Update Promo</button>
      </div>
      </div>
    </div>
  );
};

export default UpdatePromo;
