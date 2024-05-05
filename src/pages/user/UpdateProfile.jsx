import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import '../styles.css';


import useUpdateProfilePost from "../../hooks/user/useUpdateProfilePost";

const UpdateProfile = () => {

  const {id} = useParams()
  const namePage = 'Update Profile'
  const {
    notif,
    loading,
    sortArray,
    handleSubmit,
    handleEmail,
    handleName,
    handlephoneNumber,
    handleFileChange,   
    
  } = useUpdateProfilePost()

  return (
    <>
       <div className="updateProfile-container d-flex">
      
    <div className="page-bar position-fixed">
      <SideBar namePage={namePage}/>
      <Link to={`createBanner`}>
      </Link>
      </div >

      {sortArray.map(user => (
        <div className="form-updateProfile">
        {!!notif.length && <h3>{notif}</h3>}
        <p className="input-id">{id}</p>
        <div className="input-updateProfile">

         <label htmlFor="email">Email</label>
        <input 
        defaultValue={user.email} 
        id="email" 
        className="input-updateProfile-body" 
        type="email" 
        placeholder="Email" 
        onChange={handleEmail}>
        </input> 

        <label htmlFor="name">Full Name</label>
        <input 
        id="name" 
        className="input-updateProfile-body" 
        type="text" 
        placeholder="Full Name" 
        onChange={handleName} 
        defaultValue={user.name}>
        </input>

        <label htmlFor="profilePictureUrl">Profile Picture URL</label>
        <input 
        id="profilePictureUrl" 
        className="input-updateProfile-body" 
        type="file"
        accept="image/*" 
        placeholder="link profile picture" 
        onChange={handleFileChange}>
        </input>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input 
        id="phoneNumber" 
        className="input-updateProfiler-body" 
        type="number" 
        placeholder="phone" 
        onChange={handlephoneNumber} 
        defaultValue={user.phoneNumber}>
        </input>
        </div>

        <button className="updateProfile-button" onClick={handleSubmit}>{loading ? 'loading..' : 'Update'}</button>
      </div>
      ))}
      
    </div>        
    </>
  )

}

export default UpdateProfile