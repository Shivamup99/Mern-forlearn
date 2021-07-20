import React from 'react'

function Postpro() {
    return (
    <div>
        
  <form>
    <div className="mb-3">
      <label htmlFor="country" className="form-label">Country</label>
      <input type="text" className="form-control" name="country" 
       />
    </div>
    <div className="mb-3">
      <label htmlFor="profession" className="form-label">Occupation</label>
      <input type="text" className="form-control" name="profession"  
        />
    </div>
    <div className="mb-3">
      <label htmlFor="state" className="form-label">State</label>
      <input type="text" className="form-control" name="state" 
       />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address</label>
      <input type="text" className="form-control" name="address"  
      />
    </div>
    <div className="mb-3">
      <label htmlFor="postCode" className="form-label">Post Code</label>
      <input type="text" className="form-control" name="postCode" 
       />
    </div>
  
    <button type="submit"  className="btn btn-primary">Sumbmit</button>
  </form>
</div>
        
    )
}

export default Postpro
