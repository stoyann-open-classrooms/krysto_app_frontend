import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import "./home.css";
function HomeHero() {
  return (
    <section className="home-hero">
    
      <div className="home-hero-content">
        
        <h1>Re-Penser le design grâce au plastique recyclé</h1>
        <Link className="btn btn-cta" to={"/products"}>
          Découvrir nos produits
        </Link>
      </div>
    </section>

  );
}

export default HomeHero;
