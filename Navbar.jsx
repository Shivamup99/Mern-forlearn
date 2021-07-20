import React,{useState,useEffect} from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
function Navbar({users}) {
  const [user , setUser] = useState({})
  const [pro,setPro] = useState([])
  
  useEffect(()=>{
    setUser(users)
    if(users)
    {
      setPro(users.profile)
    }
  },[users])

  let _id = localStorage.getItem('_id')
  let location = useLocation()
  if(location.pathname==="/login-user" || location.pathname==="/register-user" || location.pathname==="/forget-password"){
    return <h1 style={{textAlign:'center'}}>Welcome to best selling House</h1>
  }
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
            <img src= "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/real-estate-logo-design.jpg"
             height={40} style={{borderRadius:'999px'}} alt="me" loading="lazy" />
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to="/for/sale/house">For Sale</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link"  to="/to/rent/house" >To Rent</NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link" to="/sale/property" >Sale Property</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact/us"  >Contact Us</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to ="/about/us" >About Us</NavLink>
            </li>
          </ul>
        </div>
        {localStorage.getItem('token')?(
        <div className="d-flex align-items-center">
          <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bell" />
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
       
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
          <a className="dropdown-toggle d-flex align-items-center drop"  id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src={`http://localhost:8000/${pro && pro.image}`} className="rounded-circle" height={35} width={35} alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
         
            <>
            <li>
              <Link className="dropdown-item" to={`/my-profile/${_id}`}>My profile</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">Settings</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/logout" >Logout</Link>
            </li>
            </>
           
          </ul>
          
        </div>):<Link to="/login-user" className="btn btn-info">Login</Link>
        }
       
      </div>
    </nav>
  </div>
  )
}

export default Navbar

