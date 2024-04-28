
const CategoryForm = (props) => {
  

  return (
    <>
    <h2>{props.pagesName}</h2>    
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

export default CategoryForm
