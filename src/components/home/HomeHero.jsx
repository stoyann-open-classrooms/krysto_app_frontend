import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import "./home.css";
function HomeHero() {
  return (
    <section className="home-hero">
    
      <div className="home-hero-content">
        
        <h1>Des produits en plastique recylé pour un monde plus reponsable.</h1>
        <Link className="btn btn-cta" to={"/nos-produits-categories"}>
          Découvrir nos produits
        </Link>
      </div>
    </section>

  );
}

export default HomeHero;
