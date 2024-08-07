import PropTypes from 'prop-types';

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

BannerForm.propTypes = {
  namePage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired
}

export default BannerForm
