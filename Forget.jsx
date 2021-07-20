import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import auth from '../services/auth';
import { Link } from 'react-router-dom';

function Forget() {
    const validation = Yup.object().shape({
        email:Yup.string().required('This is required').email('Invalid email')
      });
      const formOption = {resolver:yupResolver(validation)}
      const {register , handleSubmit , formState} = useForm(formOption)
      const {errors} = formState

    const[user,setUser] = useState({email:''})
    const [error,setError] = useState([])

    
  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit =async()=>{
    try {
      const response = await auth.forgetPass(user)
      console.log(response)
      if(response){
      (<p className="alert alert-success">check your email address</p>)}
    } catch (error) {
      setError(<p className="alert alert-danger">something went wrong</p>)
    }
  }

    return (
 <>
 <div className="container padding-bottom-3x mb-2 mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10">
      <div className="forgot">
        <h2>Forgot your password?</h2>
        <p>Change your password in three easy steps. This will help you to secure your password!</p>
        <ol className="list-unstyled">
          <li><span className="text-primary text-medium">1. </span>Enter your email address below.</li>
          <li><span className="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
          <li><span className="text-primary text-medium">3. </span>Use the link to reset your password</li>
        </ol>
      </div>
      <form className="cards mt-4"  onSubmit={handleSubmit(e=>onSubmit(e))}>
        <div className="cards-body">
            <div>{error?error:''}</div>
          <div className="form-group"> <label htmlFor="email">Enter your email address</label> 
          <input type="text" placeholder="enter email address" 
           {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
           onChange={e=>handleChange(e)}/>
            <small className="invalid-feedback">{errors.email?.message}</small>
           </div>
        </div>
        <div className="cards-footer mt-4"> 
        <button className="btn btn-success" type="submit">Get New Password</button> 
        <Link className="btn btn-danger mr" type="submit" to="/login-user">Back to Login</Link> 
        </div>
      </form>
    </div>
  </div>
</div>

</>
 )
}

export default Forget