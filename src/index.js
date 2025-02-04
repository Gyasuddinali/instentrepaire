import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter } from "react-router-dom";
import App from "./App";


// Create a root for rendering your app
const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using createRoot

// Render the App inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
