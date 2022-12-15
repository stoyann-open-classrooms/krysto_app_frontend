import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./index.css";
import About from "./pages/About";
import Cgu from "./pages/Cgu";
import CollectPoints from "./pages/CollectPoints";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewRequest from "./pages/NewRequest";
import Partners from "./pages/partners/Partners";
import Recyclers from "./pages/partners/recyclers/Recyclers";
import Resselers from "./pages/partners/resselers/Resselers";
import PressKit from "./pages/PressKit";
import CollectRequest from "./pages/private/CollectRequest";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/PrivateHome";
import ProductMethod from "./pages/ProductMethod";
import Products from "./pages/Products";
import ProOffers from "./pages/ProOffers";
import RecyclableProducts from "./pages/RecyclableProducts";
import Register from "./pages/Register";
import RegisterPlan from "./pages/RegisterPlan";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Thanks from "./pages/Thanks";

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
            <Route path="/new-request" element={<NewRequest />} />
            <Route path="/thanks" element={<Thanks/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/recyclable-products" element={<RecyclableProducts/>} />
            <Route path="/product-method" element={<ProductMethod/>} />
            <Route path="/files" element={<Files/>} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/partners" element={<Partners />}>
              <Route path="/partners/resselers" element={<Resselers />} />
              <Route path="/partners/recyclers" element={<Recyclers />} />
            </Route>

            <Route path="/private" element={<Private />}>
              <Route path="/private/private-home" element={<PrivateHome />} />
              <Route path="/private/collect-request" element={<CollectRequest />} />
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
