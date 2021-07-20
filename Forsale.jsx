import React, { useEffect, useState } from 'react'

function Forsale({houses}) {
  const [home,setHome] = useState([])

  useEffect(()=>{
    setHome(houses)
  },[houses])


    return (
    <div className="container" style={{marginTop: 50}}>
  <div className="row">
  {home.map((house,index)=>(
          <div className="col-md-4 mb-3" key={index}>
          <div className="card-sl">
            <div className="card-image">
              <img src={`http://localhost:8000/${house.imageHouse}`} width={400} height={160} alt="audi"/>
            </div>
            <div className="card-heading">
              {house.state}
            </div>
            <div className="card-text">
            {house.message}
            </div>
            <div className="card-text">
              {house.price}
            </div>
            <a href="#" className="card-button"> Purchase</a>
          </div>
        </div>      
    ))}
  </div>
</div>
 
    )
}

export default Forsale
