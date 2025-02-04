import React from "react"
import { useNavigate } from "react-router-dom"
function ServiceCategory({ title, description, imageUrl }) {

  const navigate = useNavigate()  

  const handleClick = () => {
    
    navigate('/contact') 
  }
  return (
    <div className="card h-100">
      <img
        src={imageUrl || "/placeholder.svg"}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-danger mt-auto" onClick={handleClick}>Get Appoinment</button>
      </div>
    </div>
  )
}

export default ServiceCategory

