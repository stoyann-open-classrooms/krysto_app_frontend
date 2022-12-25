import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCategory from "./pages/ProductCategory";
import ScrollToTop from "./components/ScrollToTop.";

import "./index.css";
import About from "./pages/About";
import Cgu from "./pages/Cgu";
import CollectPoints from "./pages/CollectPoints";
import Files from "./pages/Files";
import Home from "./pages/Home";
import HowToRecycle from "./pages/howToRecycle/HowToRecycle";
import Login from "./pages/Login";
import NewRequest from "./pages/NewRequest";
import NotFound from "./pages/NotFound";
import Partners from "./pages/partners/Partners";
import Recyclers from "./pages/partners/recyclers/Recyclers";
import Resselers from "./pages/partners/resselers/Resselers";
import PressKit from "./pages/PressKit";
import CollectRequest from "./pages/private/CollectRequest";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/PrivateHome";
import ProductCategories from "./pages/productCategories/ProductCategories";
import ProductMethod from "./pages/ProductMethod";

import ProOffers from "./pages/ProOffers";
import RecyclableProducts from "./pages/recyclableProducts/RecyclableProducts";
import Register from "./pages/Register";
import RegisterPlan from "./pages/RegisterPlan";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
       
      <Router>
        <ScrollToTop/>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nos-produits-categories" element={<ProductCategories/>} />
            <Route path="/nos-produits-categorie/:id" element={<ProductCategory/>} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/trouver-un-point-de-collecte" element={<CollectPoints />} />
            <Route path="/connection" element={<Login />} />
            <Route path="/creer-un-compte" element={<Register />} />
            <Route path="/nos-offre-de-collecte" element={<RegisterPlan />} />
            <Route path="/offre-proffesionel" element={<ProOffers />} />
            <Route path="/new-request" element={<NewRequest />} />
            <Route path="/remmerciements" element={<Thanks/>} />
            <Route path="/equipe-krysto" element={<Team/>} />
            <Route path="/on-parle-de-nous" element={<Testimonials/>} />
            <Route path="/les-produits-recyclables" element={<RecyclableProducts/>} />
            <Route path="/comment-recycler-efficacement" element={<HowToRecycle/>} />
            <Route path="/nos-method-de-production" element={<ProductMethod/>} />
            <Route path="/fichiers-a-telecharger" element={<Files/>} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/condition-generale-uttilisation" element={<Cgu />} />
            <Route path="/nos-partenaires" element={<Partners />}>
              <Route path="/nos-partenaires/revendeurs" element={<Resselers />} />
              <Route path="/nos-partenaires/recycleurs" element={<Recyclers />} />
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
