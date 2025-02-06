import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Correct imports for v6 routing
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ContactGet from "./components/ContactGet";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
function App() {
  const location=useLocation();
  useEffect(()=>{
  switch(location.pathname){
case'/':
  document.title='Instent-Repaire'
  break;
  case'/services':
  document.title='Instent-Repaire-Service'
  break;
  case'/contact':
  document.title='Instent-Repaire-Contact'
  break;
  case'/about':
  document.title='Instent-Repaire-About'
  break;
  case'/contactlist':
  document.title='Instent-Repaire-Contactlist'
  break;
  default:
  document.title="Instent-Repaire"
  }
  })
    return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Routes>
        {/* Define the routes with the element prop */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactlist" element={<ContactGet/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

