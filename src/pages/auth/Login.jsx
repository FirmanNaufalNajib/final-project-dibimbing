import { Link } from "react-router-dom"
import Navbar from '../../components/Navbar'
import useLoginPost from "../../hooks/auth/useLoginPost"

const Login = () => {
  
  const { notif, loading, handleLogin, setEmail, setPassword } = useLoginPost()

  const handleEmail = (e) => { 
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return ( 
    <>
      <div className="login-page container-fluid" >
           
        {/* <img className='login-img position-fixed top-50 start-50 translate-middle' src={imageLogin} alt='login'/> */}
          <Navbar/>
        <div className="form-login position-fixed top-50 start-50 translate-middle d-flex align-items-center container">
          {!!notif.length && <h3>{notif}</h3>}
            <input className="input-body" type="email" placeholder="Email" onChange={handleEmail}/>
            <input className="input-body" type="password" placeholder="Password" onChange={handlePassword}/>         
            <button className="login-button" onClick={handleLogin}>{loading ? 'loading..':'Login'}</button>
            
            <p>or</p>

          <Link to="/register">      
            <h4>Sign Up</h4>
          </Link>

        </div>
        

      </div>
    </>
  )
}

export default Login

