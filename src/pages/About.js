import React from "react"
import cmb1 from '../images/cmb1.jpg'
function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">About InstentRepair</h1>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src={cmb1} alt="InstentRepair Team" className="img-fluid rounded shadow" />
        </div>
        <div className="col-lg-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2024,InstentRepair has been serving our local community with top-notch appliance
            repair services for over 1 years. Our journey began with a simple mission: to provide fast, reliable, and
            affordable repair solutions for all major household appliances.
          </p>
          <p>
            Over the years, we've built a team of skilled technicians who are not just experts in their field but also
            passionate about helping our customers. We understand the inconvenience of a malfunctioning appliance, which
            is why we strive to provide same-day services and lasting repairs.
          </p>
          <h2>Our Commitment</h2>
          <ul>
            <li>
              Quality Service: We use only high-quality parts and stand behind our work with a satisfaction guarantee.
            </li>
            <li>Honest Pricing: We provide upfront, transparent pricing with no hidden fees.</li>
            <li>
              Continuous Learning: Our technicians regularly undergo training to stay updated with the latest appliance
              technologies.
            </li>
            <li>Customer-First Approach: We prioritize your convenience and work around your schedule.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About


