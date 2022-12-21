import { Link } from "react-router-dom";
import HomeHero from "../components/home/HomeHero";

import HeroDetails from "../components/home/HeroDetails";
import HomeSlider from "../components/home/HomeSlider";
import HeroCollect from "../components/home/HeroCollect";
import HeroMaterial from "../components/home/HeroMaterial";
import HeroMethod from "../components/home/HeroMethod";
import ProblemHero from "../components/home/ProblemHero";
import HeroSunglasses from "../components/home/HeroSunglasses";

function Home() {
  return (
    <div>
      <HomeHero />
      <ProblemHero/>  
      <HeroDetails />
      <HomeSlider />
      <HeroCollect />
      <HeroMaterial />
      <HeroSunglasses/>

      <HeroMethod />

      {/* <section className="heading">
        <h3>Un catalogue en constante evolution</h3>
        <p>
          Nos productions ce différencie des alternatives actuellement
          disponible sur le marché et bennéficie d'une qualité esthétique
          impossible a obtenir avec les methodes de recyclage "classique" qui
          melange le plastique a d'autre matiéres comme le verres et obtienne
          des produits de couleurs noir car les couleurs de plastique sont
          melangé. pour colorer les productions obtenue des produits chimique
          sont ajoutée ce qui a pour effet de sortir les rende non recyclable
          par la suite.
        </p>
        <Link to={"/"} className="btn btn-cta">
          La methode de recyclage KRYSTO VS méthode traditionnel
        </Link>
      </section> */}
    </div>
  );
}

export default Home;
