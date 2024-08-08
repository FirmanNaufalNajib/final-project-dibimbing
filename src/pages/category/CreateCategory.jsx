import CategoryForm from "../../components/CategoryForm";
import SideBar from "../../components/SideBar";
import useCategoryPost from "../../hooks/category/useCategoryPost";

const CreateCategory = () => {

  const namePage = "Create Category";

  const {
    title,
    imageURL,
    loading,
    message,
    handleTitleChange,
    handleImageURLChange,
    handleSubmit,
    handleFileChange 
  } = useCategoryPost();


  return (
    <div className="create-banner">

    <div className="page-bar position-fixed top-0 start-0 container">
      <SideBar namePage={namePage}/>
    </div>

    <div className="form-banner position-fixed top-50 start-50 translate-middle d-flex align-items-center">

    <div className="current-banner">
      <img src={imageURL} alt={title} style={{ maxWidth: '50vw', maxHeight: '30vw' }} />
    </div>

    <div className="input-banner">
      <CategoryForm
        namePage={namePage}
        title={title}
        imageURL={imageURL}
        handleTitleChange={handleTitleChange}
        handleImageURLChange={handleImageURLChange}
        handleFileChange={handleFileChange}
      />
       {message && <p>{message}</p>}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Create Promo"}
      </button> 
      </div>
      </div>
      
      </div>
  );
};

export default CreateCategory;