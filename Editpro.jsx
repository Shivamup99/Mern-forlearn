import React, { useEffect, useState } from 'react'

function Editpro({users,onSubmit,handleChange}) {
    const [close,setClose] = useState(false) 
    
   
    const onUpdate = async()=>{
     setClose(!close)
    
    }

    return (
     users?
   <div>
  <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="country" className="form-label">Country</label>
      <input type="text" className="form-control" name="country" value={users.country} 
      onChange={e=>handleChange(e)} />
    </div>
    <div className="mb-3">
      <label htmlFor="profession" className="form-label">Occupation</label>
      <input type="text" className="form-control" name="profession" value={users.profession} 
       onChange={e=>handleChange(e)} />
    </div>
    <div className="mb-3">
      <label htmlFor="state" className="form-label">State</label>
      <input type="text" className="form-control" name="state" value={users.state} 
      onChange={e=>handleChange(e)} />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address</label>
      <input type="text" className="form-control" name="address"  value={users.address} 
      onChange={e=>handleChange(e)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="postCode" className="form-label">Post Code</label>
      <input type="text" className="form-control" name="postCode" value={users.postCode}
      onChange={e=>handleChange(e)} />
    </div>
  
    <button type="submit" onClick={e=>onUpdate(e)} className="btn btn-primary">Update</button>
  </form>
</div>
:''
    )
}

export default Editpro
