import React from "react";
import { Link } from "react-router-dom";
import localIcone from "../../assets/icones/Fichier 12.svg";
import hydroIcone from "../../assets/icones/Fichier 14.svg";
import recyclableIcone from "../../assets/icones/Fichier 3.svg";
import transformIcone from "../../assets/icones/Fichier 4.svg";
import designIcone from "../../assets/icones/Fichier 13.svg";
import easyIcone from "../../assets/icones/Fichier 10.svg";

import '../../pages/public/home/home.css'
function HeroMaterial() {
  return (
    <section className="sunglases-home-section">
      <p>
        En collaboration avec Optic Discount, le seul opticien calédonien à
        fabriquer des verres de lunettes localement, nous avons conçu une gamme
        de lunettes de soleil 100% recyclé et recyclable fabriquée en
        Nouvelle-Calédonie.
      </p>
      <p>
        Chez Krysto, nous fournissons la monture en plastique recyclé tandis que
        Optic Discount place des verres de qualité afin de vous proposer une
        lunette de soleil durable et unique.
      </p>
      <p>
        Cette collaboration vous permet de profiter d'un produit de qualité tout
        en contribuant à la réduction de la pollution plastique et à la création
        de produits recyclés de qualité. Nous sommes fiers de pouvoir offrir une
        alternative écologique et responsable aux lunettes de soleil classiques,
        en travaillant avec des entreprises locales engagées dans la protection
        de l'environnement.
      </p>

      <Link className="btn btn-block">
        {" "}
        Découvir la gamme de lunettes Cinq Iles
      </Link>

      <p>
       Nous proposons également une gamme de stylos rechargeables et de
        clefs USB. Nos stylos sont conçus pour être pratiques, durables et
        écologique et sont disponible dans une large gamme de couleurs et de
        motifs pour s'adapter à tous les goûts et toutes les occasions. Nos
        clefs USB quant à elle sont conçues pour être fiables et robustes. Elles
        offrent un stockage sécurisé et sont compatibles avec tous les appareils
        électroniques.
      </p>
    </section>
  );
}

export default HeroMaterial;
