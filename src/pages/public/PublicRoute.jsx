import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductCategory from "../public/productCategories/ProductCategories";
import About from "../public/about/About";
import Cgu from "../public/cgu/Cgu";
import CollectPoints from "../public/collectPoints/CollectPoints";
import Files from "../public/files/Files";
import Home from "../public/home/Home";
import HowToRecycle from "../public/howToRecycle/HowToRecycle";
import Login from "../public/login/Login";
import NewRequest from "../public/newRequest/NewRequest";
import Partners from "../public/partners/Partners";
import PressKit from "../public/pressKit/PressKit";
import CollectRequest from "../public/private/CollectRequest";
import Private from "../public/private/Private";
import PrivateHome from "../public/private/PrivateHome";
import ProductCategories from "../public/productCategories/ProductCategories";
import ProductMethod from "../public/productMethod/ProductMethod";
import ProOffers from "../public/proOffers/ProOffers";
import RecyclableProducts from "../public/recyclableProducts/RecyclableProducts";
import Register from "../public/register/Register";
import RegisterPlan from "../public/registerPlan/RegisterPlan";
import Team from "../public/team/Team";
import Testimonials from "../public/testimonials/Testimonials";
import Thanks from "../public/thanks/Thanks";
import Partner from "../public/Partner/Partner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PublicRoute() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/nos-produits-categories"
          element={<ProductCategories />}
        />
        <Route
          path="/nos-produits-categorie/:id"
          element={<ProductCategory />}
        />
        <Route path="/a-propos" element={<About />} />
        <Route
          path="/trouver-un-point-de-collecte"
          element={<CollectPoints />}
        />
        <Route path="/connection" element={<Login />} />
        <Route path="/creer-un-compte" element={<Register />} />
        <Route path="/nos-offre-de-collecte" element={<RegisterPlan />} />
        <Route path="/offre-proffesionel" element={<ProOffers />} />
        <Route path="/new-request" element={<NewRequest />} />
        <Route path="/remmerciements" element={<Thanks />} />
        <Route path="/equipe-krysto" element={<Team />} />
        <Route path="/on-parle-de-nous" element={<Testimonials />} />
        <Route
          path="/les-produits-recyclables"
          element={<RecyclableProducts />}
        />
        <Route
          path="/comment-recycler-efficacement"
          element={<HowToRecycle />}
        />
        <Route path="/nos-methodes-de-production" element={<ProductMethod />} />
        <Route path="/fichiers-a-telecharger" element={<Files />} />
        <Route path="/press-kit" element={<PressKit />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/condition-generale-uttilisation" element={<Cgu />} />
        <Route path="/nos-partenaires" element={<Partners />}></Route>
        <Route path="/partenaire/:id" element={<Partner />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/collect-request" element={<CollectRequest />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}
