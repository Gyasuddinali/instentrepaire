import React from "react"
import { FaFacebook,FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaWhatsapp,FaPhone } from "react-icons/fa";
function Footer() {
  const number = "+919199245536";
 
  const message = "Hello! Gyasuddin";

  const redirectToWhatsApp = () => {
    window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const CallingMe = () => {
    window.location.href = `tel:${number}`;
  };
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p className="small">
            InstentFix Appliance Repair is your trusted partner for all home appliance repairs. With years of
              experience, we provide fast, reliable, and affordable repair services.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Our Services</h5>
            <ul className="list-unstyled small">
              <li>AC Repair and Maintenance</li>
              <li>Refrigerator Repair</li>
              <li>Washing Machine Repair</li>
              <li>Other Home Appliance Repairs</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address className="small">
              841226 Mohiuddinpur
              <br />
              Siwan Bihar
              <br />
              Phone: 9199245536
              <br />
              Email: InstentRepair@gmail.com
            </address>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
          <h5>Connect Now</h5>
          <ul  className="list-unstyled small">
          
 <FaWhatsapp onClick={redirectToWhatsApp} className=" float-start me-2 color-success rounded-circle" size={40} style={{cursor:'pointer',color:'green'}} />
           
 <FaPhone onClick={CallingMe} className="me-2 rounded-circle" size={40} style={{cursor:'pointer',color:'green'}}/>
 
 </ul>
 </div>
 
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Visit our social website</h5>
            <ul className="list-unstyled small">
              <li> <a
                href="https://www.instagram.com/iam_gyasu/"
                className="fs-2 mx-2 float-start"
              >
                <FaInstagram />
              </a></li>
              <li>              <a
                href="https://www.facebook.com/gyasusrkian91992"
                className="fs-2 mx-2 float-start"
              >
                <FaFacebook/>
              </a>
                  </li>
              <li><a href="#"
                className="fs-2 mx-2 float-start"><FaYoutube/></a></li>
                
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} InstentRepair. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

