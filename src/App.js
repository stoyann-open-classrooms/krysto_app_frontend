import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ScrollToTop from "./components/ScrollToTop.";
import "./index.css";
import PublicRoute from "./pages/public/PublicRoute";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
      
          <PublicRoute/>
        
        
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
