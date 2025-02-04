import React from "react"
import { Link } from "react-router-dom"
import ServiceCategory from "../components/ServiceCategory"

import acRepairImage from "../images/ac.jpeg"
import refrigeratorRepairImage from "../images/ref.jpeg"
import washingMachineRepairImage from "../images/wash.jpeg"

function Home() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Welcome To InstentRepair Services</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        <div className="col">
          <ServiceCategory
            title="AC Repair"
            description="Keep your cool with our expert AC repair services"
           imageUrl={acRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Refrigerator Repair"
            description="We'll fix your fridge to keep your food fresh"
             imageUrl={refrigeratorRepairImage}
          />
        </div>
        <div className="col">
          <ServiceCategory
            title="Washing Machine Repair"
            description="Get your clothes clean again with our washing machine repairs"
             imageUrl={washingMachineRepairImage}
          />
        </div>
      </div>
      <div className="text-center mb-5">
        <Link to="/services" className="btn btn-primary btn-lg">
          View All Services
        </Link>
      </div>
      <div className="text-center">
        <h2 className="mb-4">Need a Repair?</h2>
        <p className="mb-4">
          Don't let a broken appliance disrupt your daily life. Contact us today for fast and reliable repairs.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Home




// import React from "react"
// import { Link } from "react-router-dom"
// import ServiceCategory from "../components/ServiceCategory"
// import acRepairImage from "../images/ac.jpeg"
// import refrigeratorRepairImage from "../images/ref.jpeg"
// import washingMachineRepairImage from "../images/wash.jpeg"
// import dryerRepairImage from "../images/dry.jpeg"
// import dishwasherRepairImage from "../images/dsw.webp"
// import ovenRepairImage from "../images/stove.jpeg"

// function Home() {
//   return (
//     <div className="container py-5">
//       <h1 className="text-center mb-5">Expert Appliance Repair Services</h1>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
//         <div className="col">
//           <ServiceCategory
//             title="AC Repair"
//             description="Keep your cool with our expert AC repair services"
//           >
//             <img src={acRepairImage} alt="AC Repair" />
//           </ServiceCategory>
//         </div>
//         <div className="col">
//           <ServiceCategory
//             title="Refrigerator Repair"
//             description="We'll fix your fridge to keep your food fresh"
//           >
//             <img src={refrigeratorRepairImage} alt="Refrigerator Repair" />
//           </ServiceCategory>
//         </div>
//         <div className="col">
//           <ServiceCategory
//             title="Washing Machine Repair"
//             description="Get your clothes clean again with our washing machine repairs"
//           >
//             <img src={washingMachineRepairImage} alt="Washing Machine Repair" />
//           </ServiceCategory>
//         </div>
//         <div className="col">
//           <ServiceCategory
//             title="Dryer Repair"
//             description="Get your clothes dry and ready to wear with our dryer repair services"
//           >
//             <img src={dryerRepairImage} alt="Dryer Repair" />
//           </ServiceCategory>
//         </div>
//         <div className="col">
//           <ServiceCategory
//             title="Dishwasher Repair"
//             description="We'll fix your dishwasher and make sure your dishes come out spotless"
//           >
//             <img src={dishwasherRepairImage} alt="Dishwasher Repair" />
//           </ServiceCategory>
//         </div>
//         <div className="col">
//           <ServiceCategory
//             title="Oven Repair"
//             description="Bake to perfection with our oven repair services"
//           >
//             <img src={ovenRepairImage} alt="Oven Repair" />
//           </ServiceCategory>
//         </div>
//       </div>
//       <div className="text-center mb-5">
//         <Link to="/services" className="btn btn-primary btn-lg">
//           View All Services
//         </Link>
//       </div>
//       <div className="text-center">
//         <h2 className="mb-4">Need a Repair?</h2>
//         <p className="mb-4">
//           Don't let a broken appliance disrupt your daily life. Contact us today for fast and reliable repairs.
//         </p>
//         <Link to="/contact" className="btn btn-success btn-lg">
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home
