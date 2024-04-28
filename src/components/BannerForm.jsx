
const BannerForm = (props) => {
  

  return (
    <>
    <h2>{props.pagesName}</h2>  
    <p className="id-banner">{props.id}</p>  
      <input
        type="text"
        placeholder="Title"
        value={props.title}
        onChange={props.handleTitleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={props.imageURL}
        onChange={props.handleImageURLChange}
      />
    </>
  )
}

export default BannerForm