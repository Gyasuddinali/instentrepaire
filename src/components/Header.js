import React, { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [shows,setShows]=useState(false)
  const hnd=()=>{
    setShows(!shows);
  }
  return (
    <header className=" text-white bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container float-start">
          <Link to="/" className="navbar-brand">
          InstentRepair
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={shows ? 'true' : 'false'}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            // aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={hnd}
            style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(255, 255, 255)", 
            }}
          >

            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactlist" className="nav-link text-white">
                  Get
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

