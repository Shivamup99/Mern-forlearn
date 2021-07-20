import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios'
import { useHistory,useParams} from 'react-router-dom';
import './Res.css'

function Register() {
  let history = useHistory()
  let token = useParams()
  const validation = Yup.object().shape({
    password: Yup.string().required().min(6).max(26),
    cpassword: Yup.string().required().oneOf([Yup.ref("password")])
  });
  const formOption = {resolver:yupResolver(validation)}
  const {register , handleSubmit , formState} = useForm(formOption)
  const {errors} = formState;

  const [user,setUser]= useState({password:'',cpassword:''})
  const [error,setError] = useState([])

  const handleChange=(event)=>{
      setUser({...user,[event.target.name]:event.target.value})
  }

  const onSubmit =async()=>{
      try {
        const {data} = await axios.put(`http://localhost:8000/api/data/resetPassword`,({password:user.password, token:token.token}))
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
      <h2>Reset Password</h2>
      <hr />
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>                    
          </div>
          <input type="password"  name="mobile" placeholder="Password"
          {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={e=>handleChange(e)} />
             <small className="invalid-feedback ">{errors.password?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
              <i className="fa fa-check" />
            </span>                    
          </div>
          <input type="password" name="cpassword" placeholder="Confirm Password" 
           {...register('cpassword')} className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`}
           onChange={e=>handleChange(e)}  />
           <small className="invalid-feedback ">{errors.cpassword?.message}</small>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg">Change Password</button>
      </div>
    </form>
   
  </div>
</div>

  )
}

export default Register
