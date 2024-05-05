
const BannerForm = (props) => {
  

  return (
    <>
    <h2>{props.namePage}</h2>  
    <p className="id-banner">{props.id}</p>  
      <input
        type="text"
        placeholder="Title"
        value={props.title}
        onChange={props.handleTitleChange}
      />
      <input
        type="file"
        accept="image/*"
        placeholder="Image"
        //value={props.imageURL}
        onChange={props.handleFileChange}
      />
    </>
  )
}

export default BannerForm
