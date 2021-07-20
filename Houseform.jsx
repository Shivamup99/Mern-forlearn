import React from 'react'
function Houseform() {
  return (
    <div className="container">
    <form>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" htmlFor="form6Example1">Saler name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" htmlFor="form6Example2">Contact number</label>
      </div>
    </div>
  </div>
  {/* Text input */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">Address</label>
  </div>
  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example5" className="form-control" />
    <label className="form-label" htmlFor="form6Example5">Price of House</label>
  </div>
  {/* Number input */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example6" className="form-control" />
    <label className="form-label" htmlFor="form6Example6">House Registration</label>
  </div>
  {/* Message input */}
  <div className="form-outline mb-4">
    <textarea className="form-control" id="form6Example7" rows={4} defaultValue={""} />
    <label className="form-label" htmlFor="form6Example7">Additional information</label>
  </div>
 <div className="file-upload">
  <button className="file-upload-btn" type="button" >Add Image</button>
  <div className="image-upload-wrap">
    <input className="file-upload-input" type="file" />
    <div className="drag-text">
      <h3>Drag and drop a file or select add Image</h3>
    </div>
  </div>
  <div className="file-upload-content">
    <img className="file-upload-image" src="#" alt="your image" />
    <div className="image-title-wrap">
      <button type="button" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
    </div>
  </div>
</div>


  {/* Checkbox */}
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" defaultValue id="form6Example8" defaultChecked />
    <label className="form-check-label" htmlFor="form6Example8"> Create an account? </label>
  </div>
  {/* Submit button */}
  <button type="submit" className="file-upload-btn1 mb-5">Sale House</button>
</form>
</div>
  )
}

export default Houseform
