import PropTypes from 'prop-types';
import './styles-components.css'

const UserCard= (props) => { 

  return (
    <>
    <div className="user-list container">

     <div className="user-card container d-flex flex-row justify-content-between align-items-center" key={props.id}>
        <img className='user-img' src={props.profilePictureUrl} alt={props.name}/>
        <p >{props.id}</p>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p >{props.phoneNumber}</p>
        <p className='role-text'>{props.role}</p>
      </div>
    </div>
    </>
  )
}

UserCard.propTypes = {
  id: PropTypes.string,
  profilePictureUrl: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  role: PropTypes.string
}

export default UserCard