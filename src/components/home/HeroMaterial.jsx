import React from "react";
import { Link } from "react-router-dom";
import localIcone from "../../assets/icones/Fichier 12.svg";
import hydroIcone from "../../assets/icones/Fichier 14.svg";
import recyclableIcone from "../../assets/icones/Fichier 3.svg";
import transformIcone from "../../assets/icones/Fichier 4.svg";
import designIcone from "../../assets/icones/Fichier 13.svg";
import easyIcone from "../../assets/icones/Fichier 10.svg";
import './home.css'
function HeroMaterial() {
  return (
    <section className="material-home-section">
      <h3>Faites le choix de la durabilité et de l'esthétique et de l'originalité avec nos poutres et planche en plastique recyclé.</h3>
      <p>
        Nos poutres et planches en plastique recyclé offrent de
        nombreux avantages par rapport aux matériaux plus conventionnels. Tout
        d'abord, leur esthétique est très appréciée pour leur originalité et
        leur effet marbré obtenu grâce au tri par couleur des plastiques. Chaque
        article est donc unique et offre un design original et personnalisé.
        Ensuite, leur imperméabilité les rend idéales pour les usages en
        extérieur. Elles résistent aux intempéries et ne pourrissent pas, ce qui
        les rend très durables et économiques à l'utilisation. Enfin, nos
        poutres et planches sont faciles à travailler et peuvent être coupées,
        percées ou vissées comme du bois, ce qui les rend très polyvalentes et
        adaptées à de nombreux projets. En optant pour nos produits en plastique
        recyclé, vous contribuez à la réduction de la pollution plastique et à
        la création de produits recyclés de qualité.
      </p>
      <div className="icones-boxes">
        <div className="little-boxe">
          <img src={localIcone} alt="icone fabrication locale" />
          <h3>Fabriqué localement</h3>
        </div>
        <div className="little-boxe">
          <img src={hydroIcone} alt="Icone Imputrescible et hydrogfuge" />

          <h3>Imputrescible & Hydrofuge</h3>
        </div>
        <div className="little-boxe">
          <img src={recyclableIcone} alt="Icone 100% recyclable" />

          <h3>100% recyclé & recyclable</h3>
        </div>
        <div className="little-boxe">
          <img src={transformIcone} alt="Icone transformable et durable" />

          <h3>Transformable & durable</h3>
        </div>
        <div className="little-boxe">
          <img src={designIcone} alt="Icone Coloré et design" />
          <h3>Coloré & design</h3>
        </div>
        <div className="little-boxe">
          <img src={easyIcone} alt="Icone ce travaille comme le bois" />
          <h3>Se travaille comme le bois</h3>
        </div>
      </div>
      <Link className="btn btn-block"> Découvir la gamme de poutres et de planches Krysto</Link>
    </section>
  );
}

export default HeroMaterial;
