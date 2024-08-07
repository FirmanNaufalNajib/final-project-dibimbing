import PromoForm from "../../components/PromoForm";
import SideBar from "../../components/SideBar";
import Modal from "../../components/Modal";
import { close } from '../../features/modalSlice'
import { useState } from "react";
import { useDispatch } from "react-redux";
import usePromobyidAll from "../../hooks/promo/usePromobyidAll";
import '../styles.css';


const UpdatePromo = () => {
  const namePage = "Update Promo";
  
  const { 
    loading, 
    message, 
    error, 
    description, 
    imageUrl, 
    terms_condition, 
    promo_code, 
    promo_discount_price, 
    minimum_claim_price, 
    title, 
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
  } = usePromobyidAll();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    handleDelete()
  };
  const handleCancel = () => {
    dispatch(close());
  };
  const clearItemAndCloseModal = () => { 
    setIsModalOpen(true); }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(isModalOpen)

  return (
    <div className="edit-banner">
      {isModalOpen && <Modal message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} isOpen={isModalOpen} onConfirm={clearItemAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
      <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar namePage={namePage}/>
      <button className="delete-button btn btn-danger" onClick={() => setIsModalOpen(true)}><i className=" bi bi-trash3"></i>Delete Promo</button>
      </div>

      <div className="form-banner">

      <div className="current-banner">
        <img src={imageUrl} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
      </div>

      <div className="input-banner">
        <PromoForm
        namePage={namePage}
        title={title}
        description={description}
        imageUrl={imageUrl}
        terms_condition={terms_condition}
        promo_code={promo_code}
        promo_discount_price={promo_discount_price}
        minimum_claim_price={minimum_claim_price}
        handleDescriptionChange={handleDescriptionChange}
        handleTitleChange={handleTitleChange}
        handleTerms_conditionChange={handleTerms_conditionChange}
        handlePromo_codeChange={handlePromo_codeChange}
        handlePromo_discount_priceChange={handlePromo_discount_priceChange}
        handleMinimum_claim_priceChange={handleMinimum_claim_priceChange}
        handleImageUrlChange={handleImageUrlChange}
        handleFileChange={handleFileChange}
        />    
        {message && <p className="message-result">{message}</p>}
        <button onClick={handleSubmit}>Update Promo</button>
      </div>
      </div>
    </div>
  );
};

export default UpdatePromo;
