import './styles-components.css'

const UserCard= (props) => { 

  return (
    <>
    <div className="user-list container">

     <div className="user-card container d-flex flex-row justify-content-between align-items-center" key={props.key}>
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

export default UserCard