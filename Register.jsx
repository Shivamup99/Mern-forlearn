import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useHistory,Link} from 'react-router-dom';
import auth from '../services/auth'
import './Res.css'

function Register() {
  let history = useHistory()
  const validation = Yup.object().shape({
    name: Yup.string().required().min(4).max(30),
    email:Yup.string().required().email(),
    mobile: Yup.string().required().min(10).max(10),
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
        const {data} = await auth.regUser(user)
        console.log(data)
        history.push("/login-user")
      } catch (error) {
        setError(<p className="alert alert-danger dan">credentials are not valid</p>)
      }
    }

  return (
   <div className="res">
  <div className="signup-form">
    <div>{error?error:''}</div>
    <form  onSubmit={handleSubmit(e=>onSubmit(e))}>
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account!</p>
      <hr />
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="fa fa-user" />
            </span>                    
          </div>
          <input type="text"  name="name" placeholder="Username"  
          {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)}  />
             <small className="invalid-feedback mb-1">{errors.name?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-paper-plane" />
            </span>                    
          </div>
          <input type="text"  name="email" placeholder="Email Address" 
           {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)} />
            <small className="invalid-feedback mb-1">{errors.email?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-phone" />
            </span>                    
          </div>
          <input type="text"  name="mobile" placeholder="Phone Number"
          {...register('mobile')} className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)} />
             <small className="invalid-feedback ">{errors.mobile?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>                    
          </div>
          <input type="password" name="password" placeholder="Password" 
           {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
           onChange={e=>handleChange(e)}  />
           <small className="invalid-feedback ">{errors.password?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
      </div>
      <div className="text-center">Already have an account? <Link to="/login-user" style={{color:'#19aa8d'}}>Login here</Link></div>
    </form>
   
  </div>
</div>

  )
}

export default Register
