import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Profile.css'
import Editpro from './Editpro'
import Postpro from './Postpro'
import putpro from '../services/service'
function Profile({users}) {

const [users1,setUsers1] = useState({country:'',state:'',address:'',postCode:'',profession:'',gender:''})
  const [user , setUser] = useState({})
  const [pro,setPro] = useState([])
  //const [edit , setEdit] = useState([])
  
  useEffect(()=>{
    
    if(users)
    {
      setUser(users)
      setPro(users.profile)
      setUsers1(users.profile)
    }
    // setEdit(onchange)
    // console.log('userProfile',onchange)
    
    // console.log('use',users)
    // let result=users.filter(u=>u._id===_id)
    // setUser(result)
    // result.map((u)=>{
    // setUser(u)
    // console.log(u)
    // }
    // )
  },[users])

  const handleChange = (e)=>{
   setUsers1({...users1 ,[e.target.name]:e.target.value})
  }

  const onSubmit = async()=>{
    let resp = await putpro.putProfile(users1,pro._id)
    console.log(resp)
  }



    return (
     <>
    <div className="container bootstrap snippets bootdey">
  <div className="row">
    <div className="profile-nav col-md-3">
      <div className="panel">
        <div className="user-heading round">
          <a>
            <img src={`http://localhost:8000/${pro && pro.image}`} alt="lev" />
            </a>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <div className="proed">
        <ul className="nav nav-pills nav-stacked" style={{flexDirection: 'column'}}>
          <li><Link data-bs-toggle="modal" data-bs-target="#exampleModal" style={{textDecoration:'none'}}> <i className="fa fa-edit"  style={{color:'brown'}} /> Edit profile</Link></li>
          <li><Link data-bs-toggle="modal" data-bs-target="#exampleModal" style={{textDecoration:'none'}}> <i className="fa fa-edit"  style={{color:'brown'}} /> Complete profile</Link></li>
        </ul>
        </div>
       
      </div>
    </div>
    <div className="profile-info col-md-9">
      <div className="panel">
        <div className="panel-body bio-graph-info">
          <h1>Bio Graph</h1>
          <div className="row">
            <div className="bio-row">
              <p><span> Name </span>: {user.name}</p>
            </div>
            <div className="bio-row">
              <p><span>Mobile </span>: {user.mobile}</p>
            </div>
            {/* {pro && Object.entries(pro).map((u,i)=>(
               <div className="bio-row">
               <p><span>{u[0]} </span>:{u[1]} </p>
             </div>
            ))} */}
           
            <div className="bio-row">
              <p><span>Country</span>: {pro && pro.country}</p>
            </div>
            <div className="bio-row">
              <p><span>Occupation </span>:{pro && pro.profession}</p>
            </div>
            <div className="bio-row">
              <p><span>State </span>:{pro && pro.state}</p>
            </div>
           
            <div className="bio-row">
              <p><span>PostCode </span>:{pro && pro.postCode}</p>
            </div>
             
            <div className="bio-row">
              <p><span>Address </span>:{pro && pro.address}</p>
            </div>
            <div className="bio-row">
              <p><span>Gender </span>:{pro && pro.gender}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                <div className="bio-chart">
                  <div style={{display: 'inline', width: 100, height: 100}}><canvas width={100} height="100px" /><input className="knob" data-width={100} data-height={100} data-displayprevious="true" data-thickness=".2" defaultValue={35} data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" style={{width: 54, height: 33, position: 'absolute', verticalAlign: 'middle', marginTop: 33, marginLeft: '-77px', border: 0, fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(224, 107, 125)', padding: 0, WebkitAppearance: 'none', background: 'none'}} /></div>
                </div>
                <div className="bio-desk">
                  <h4 className="red">Envato Website</h4>
                  <p>Started : 15 July</p>
                  <p>Deadline : 15 August</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                <div className="bio-chart">
                  <div style={{display: 'inline', width: 100, height: 100}}><canvas width={100} height="100px" /><input className="knob" data-width={100} data-height={100} data-displayprevious="true" data-thickness=".2" defaultValue={63} data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" style={{width: 54, height: 33, position: 'absolute', verticalAlign: 'middle', marginTop: 33, marginLeft: '-77px', border: 0, fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(76, 197, 205)', padding: 0, WebkitAppearance: 'none', background: 'none'}} /></div>
                </div>
                <div className="bio-desk">
                  <h4 className="terques">ThemeForest CMS </h4>
                  <p>Started : 15 July</p>
                  <p>Deadline : 15 August</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                <div className="bio-chart">
                  <div style={{display: 'inline', width: 100, height: 100}}><canvas width={100} height="100px" /><input className="knob" data-width={100} data-height={100} data-displayprevious="true" data-thickness=".2" defaultValue={75} data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" style={{width: 54, height: 33, position: 'absolute', verticalAlign: 'middle', marginTop: 33, marginLeft: '-77px', border: 0, fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(150, 190, 75)', padding: 0, WebkitAppearance: 'none', background: 'none'}} /></div>
                </div>
                <div className="bio-desk">
                  <h4 className="green">VectorLab Portfolio</h4>
                  <p>Started : 15 July</p>
                  <p>Deadline : 15 August</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                <div className="bio-chart">
                  <div style={{display: 'inline', width: 100, height: 100}}><canvas width={100} height="100px" /><input className="knob" data-width={100} data-height={100} data-displayprevious="true" data-thickness=".2" defaultValue={50} data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" style={{width: 54, height: 33, position: 'absolute', verticalAlign: 'middle', marginTop: 33, marginLeft: '-77px', border: 0, fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(203, 164, 219)', padding: 0, WebkitAppearance: 'none', background: 'none'}} /></div>
                </div>
                <div className="bio-desk">
                  <h4 className="purple">Adobe Muse Template</h4>
                  <p>Started : 15 July</p>
                  <p>Deadline : 15 August</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Update Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <Editpro users={users1} user={user} handleChange={handleChange} onSubmit={onSubmit}/>
        </div>
        <div className="modal-body">
          <Postpro />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>


     </>
    )
}

export default Profile
