
const CategoryForm = (props) => {
  

  return (
    <>
    <h2>{props.namePage}</h2>    
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

export default CategoryForm
