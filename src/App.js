import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./index.css";
import About from "./pages/About";
import Cgu from "./pages/Cgu";
import CollectPoints from "./pages/CollectPoints";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Partners from "./pages/partners/Partners";
import Recyclers from "./pages/partners/recyclers/Recyclers";
import Resselers from "./pages/partners/resselers/Resselers";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/PrivateHome";
import Products from "./pages/Products";
import ProOffers from "./pages/ProOffers";
import Register from "./pages/Register";
import RegisterPlan from "./pages/RegisterPlan";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about" element={<About />} />
            <Route path="/collect-points" element={<CollectPoints />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-plan" element={<RegisterPlan />} />
            <Route path="/pro-offers" element={<ProOffers />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/partners" element={<Partners />}>
              <Route path="/partners/resselers" element={<Resselers />} />
              <Route path="/partners/recyclers" element={<Recyclers />} />
            </Route>

            <Route path="/private" element={<Private />}>
              <Route path="/private/private-home" element={<PrivateHome />} />
            </Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
