import React from "react"
import ServiceCategory from "../components/ServiceCategory"

// Import your local images
import acRepairImage from "../images/ac.jpeg"
import refrigeratorRepairImage from "../images/ref.jpeg"
import washingMachineRepairImage from "../images/wash.jpeg"
import dryerRepairImage from "../images/dry.jpeg"
import dishwasherRepairImage from "../images/dsw.webp"
import ovenRepairImage from "../images/stove.jpeg"

function Services() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Repair Services</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <ServiceCategory
            title="AC Repair"
            description="We offer comprehensive AC repair services, including refrigerant recharge, compressor repair, and thermostat replacement."
            imageUrl={acRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Refrigerator Repair"
            description="Our expert technicians can fix various refrigerator issues, from temperature control problems to ice maker repairs."
            imageUrl={refrigeratorRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Washing Machine Repair"
            description="We repair all types of washing machines, addressing issues like faulty spin cycles, drainage problems, and control board failures."
            imageUrl={washingMachineRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Dryer Repair"
            description="Our dryer repair services cover heating element replacement, belt repairs, and sensor troubleshooting."
            imageUrl={dryerRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Dishwasher Repair"
            description="We fix common dishwasher problems, including poor cleaning performance, leaks, and drainage issues."
            imageUrl={dishwasherRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Oven and Stove Repair"
            description="Our technicians are skilled in repairing both gas and electric ovens and stoves, addressing heating problems and control issues."
            imageUrl={ovenRepairImage}
          />
        </div>
      </div>
    </div>
  )
}

export default Services

