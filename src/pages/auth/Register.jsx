
import Navbar from "../../components/Navbar"
import useRegisterPost from "../../hooks/auth/useRegisterPost"

const Register = () => {

  const {
    email, 
    name, 
    password, 
    notif, 
    role, 
    profilePictureUrl, 
    phoneNumber, 
    loading, 
    handleSubmit, 
    setEmail, 
    setName, 
    setPassword, 
    setRole, 
    setprofilePictureUrl, 
    setphoneNumber,
    imageRegister
  } = useRegisterPost()

  const handleEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleRole = (e) => {
    setRole(e.target.value)
  }
  const handleProfilePictureUrl = (e) => {
    setprofilePictureUrl(e.target.value)
  }
  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <>
    <div className="login-page container-fluid">
      

    <img className='login-img position-fixed top-50 start-50 translate-middle' src={imageRegister} alt='login'/>
      <Navbar/>

      <div className="form-login position-fixed top-50 start-50 translate-middle d-flex align-items-center container">
        {!!notif.length && <h3>{notif}</h3>}
        <input className="input-register-body" type="email" placeholder="Email" onChange={handleEmail}></input>
        <input className="input-register-body" type="text" placeholder="Full Name" onChange={handleName}></input>
        <input className="input-register-body" type="password" placeholder="Password" onChange={handlePassword}></input>
        <input className="input-register-body" type="password" placeholder="Repeat your Password" onChange={handlePassword}></input>
        <div onChange={handleRole}>

          <div className="input-register-radio">
          <input
                className="input-register-body"
                type="radio"
                name="role"
                value= "admin"          
              /><p>Admin</p>            
          </div>
        
          <div className="input-register-radio">
          <input
                className="input-register-body"
                type="radio"
                name="role"
                value= "user"    
              /><p>User</p>
          </div>
          
        
        </div>
        <input className="input-register-body" type="text" placeholder="Profile Picture" onChange={handleProfilePictureUrl}></input>
        <input className="input-register-body" type="number" placeholder="phone" onChange={handlephoneNumber}></input>


        

        <button className="login-button" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
    

    </>
  )

}

export default Register