import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import auth from '../services/auth';
import { useHistory,Link} from 'react-router-dom';
import './Login.css'


function Login() {
    let history = useHistory()
    const validation = Yup.object().shape({
      email:Yup.string().required().email(),
      password: Yup.string().required().min(6).max(26)
    });

    const formOption = {resolver:yupResolver(validation)}
    const {register , handleSubmit , formState} = useForm(formOption)
    const {errors} = formState;

    const [user,setUser]= useState({email:'',password:''})
    const [error,setError] = useState([])

    const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const onSubmit =async()=>{
        try {
          const {data} = await auth.loginUser(user)
          localStorage.setItem("token",data.token)
          localStorage.setItem("_id",data._id)
          console.log(data)
          history.push("/")
        } catch (error) {
          setError(<p className="alert alert-danger dan">credentials are not valid</p>)
        }
      }

    return (
  <div className="login">
  <div className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="card">
      <div className="card-header">
        <h3>Sign In</h3>
        <div className="d-flex justify-content-end social_icon">
          <span><i className="fab fa-facebook-square" /></span>
          <span><i className="fab fa-google-plus-square" /></span>
          <span><i className="fab fa-twitter-square" /></span>
        </div>
      </div>
      
      <div className="card-body">
      <small>{error?error:''}</small>
        <form onSubmit={handleSubmit(e=>onSubmit(e))}>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user" /></span>
            </div>
            <input type="text" placeholder="user-email" name="email" value={user.email} 
            {...register('email')} className={`form-control mb-4 ${errors.email ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)}/>
            <small className="invalid-feedback mb-1">{errors.email?.message}</small>
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password" name="password" placeholder="password" value={user.password} 
            {...register('password')} className={`form-control mb-4 ${errors.password ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)}/>
            <small className="invalid-feedback">{errors.password?.message}</small>
          </div>
          <div className="row align-items-center remember">
            <input type="checkbox" />Remember Me
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Don't have an account?<Link to="/register-user">Sign Up</Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/forget-password">Forgot your password?</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Login
