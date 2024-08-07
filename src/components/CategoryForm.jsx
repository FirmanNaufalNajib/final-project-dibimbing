import PropTypes from 'prop-types';
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

CategoryForm.propTypes = {
  namePage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired
}

export default CategoryForm
