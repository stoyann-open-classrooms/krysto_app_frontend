import React from "react";
import krysto from "../../../assets/image/shredderpro-output.jpg";
import injectMethod from "../../../assets/image/injection_design.png";
import extrudeMethod from "../../../assets/image/extruder_design.png";

import injectProducts from "../../../assets/image/injection-products.jpg";
import extrudeProducts from "../../../assets/image/extrusion-products.jpg";
import { Link } from "react-router-dom";
function ProductMethod() {
  return (
    <div className="page-content">
      <section className="heading">
        <h1>Nos methodes de recyclage</h1>
      </section>
      <p>
        Les déchets plastiques collectés sont triés par type et par couleurs
        avant d'être lavés et broyer en fin <strong>KRYSTO </strong>
        avant d'être chauffée puis injecter ou extruder dans des moules.
      </p>
      <div className="image-container">
        <img src={krysto} alt="" />
      </div>

      <h3>methode 1 : Injection</h3>
      <div className="image-container">
        <img src={injectMethod} alt="" />
      </div>
      <p>
        Le plastique broyées en fin <strong>KRYSTO</strong> est placer dans un
        tubes ou il est chauffée avant d'être injecter dans un moule. Grâce a
        cette méthodes nous pouvons produire de petit objet (maximum 150
        grammes) allant du porte clefs j'usqu'a la monture de lunettes. Sur
        demande nous pouvons aussi concevoir les moules que vous shouaiter a
        l'image de votre entreprise ou organisation.{" "}
      </p>
      <div className="image-container">
        <img src={injectProducts} alt="" />
      </div>
      <h3>methode 2 : Extrusion</h3>
      <div className="image-container">
        <img src={extrudeMethod} alt="" />
      </div>
      <p>
        Les plastiques broyées en fin <strong>KRYSTO</strong> sont placées dans une
        trémie, l'action simultanée de la rotation d'une vis sans fin et d'un
        système de colliers chauffants "pousse" le plastique qui est
        simultanément chaufé puis malaxée jusqu'à  l'obtention d'une texture
        homogène et modelable. Grâce a cette méthode nous pouvons produire des
        objets de formes longues, creux ou plats comme les poutres et les
        planches <strong>KRYSTO</strong>. Vous avez une demande spécifique ? N'hésitez pas a nous contacter !
     
      </p>

       
      <div className="image-container">
        <img src={extrudeProducts} alt="" />
      </div>
    </div>
  );
}

export default ProductMethod;
