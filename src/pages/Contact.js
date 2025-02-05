import React, { useState } from "react"
import '../components/cont.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

 
  const buttonhnd=async(e1)=>{
    e1.preventDefault();
  
    fetch("https://portfolioback-nu.vercel.app/accontact", {
  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
          alert("we will contact  you soon!n Have a good day");
       
        })
  
    
  console.log(formData);
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2>Get in Touch</h2>
          <p>
            We're here to help with all your appliance repair needs. Don't hesitate to reach out to us for any questions
            or to schedule a repair.
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Address:</strong>841226 Mohiuddinpur
              Siwan Bihar
            </li>
            <li>
              <strong>Phone:</strong>9199245536
            </li>
            <li>
              <strong>Email:</strong> InstentRepair@gmail.com
            </li>
            <li>
              <strong>Hours:</strong> Monday - Thursday: 8am - 6pm, Friday:9am-12pm,3pm-6pm ,Saturday: 9am - 3pm
            </li>
          </ul>
        </div>
        <div className="col-md-6 container" id="frm">
          <form onSubmit={buttonhnd} className="mt-3 mb-3 ms-3 me-3" >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="service" className="form-label">
                Service Needed
              </label>
              <select
                className="form-select"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="AC Repair">AC Repair</option>
                <option value="Refrigerator Repair">Refrigerator Repair</option>
                <option value="Washing Machine Repair">Washing Machine Repair</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

