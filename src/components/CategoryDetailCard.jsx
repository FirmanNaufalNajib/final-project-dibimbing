const CategoryDetailCard = (props) => {

  return (
    <div className="category-data position-fixed top-50 start-50 translate-middle d-flex align-items-center">
        <div key={props.id}>
          <img src={props.imageUrl} alt={props.name} style={{ maxWidth: '700px' }} />
          <div className="category-data-text">
          <h2>{props.name}</h2>
          <p><strong>ID is</strong> {props.id}</p>
          <p> <strong>Created</strong> {new Date(props.createdAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>
          <p><strong>Last Update</strong> {new Date(props.updatedAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>
          </div>
        </div>
      </div>
  )
}

export default CategoryDetailCard