import React from 'react'
import { Link } from 'react-router-dom'
import localIcone from "../../assets/icones/Fichier 12.svg";
import hydroIcone from "../../assets/icones/Fichier 14.svg";
import recyclableIcone from "../../assets/icones/Fichier 3.svg";
import transformIcone from "../../assets/icones/Fichier 4.svg";
import designIcone from "../../assets/icones/Fichier 13.svg";
import easyIcone from "../../assets/icones/Fichier 10.svg";
function HeroMaterial() {
  return (
    <section className="material-home-section">
        <h3>Un nouveaux materiau écologique, design et coloré</h3>
        <p>
          Les avantages des poutres et planches <strong>KRYSTO</strong> en
          rapport aux matériaux plus "conventionnels" sont les motifs et
          l'effet marbré obtenus grâce au tri par couleur des plastiques. Ce
          qui rend chaque article unique. Leur imperméabilité les rendent idéals
          pour les usages en exterieur.
        </p>
        <div className="boxes">
        <div className="little-boxe">
          <img src={localIcone} alt="" />
          <h3>Fabriqué localement</h3>
        </div>
        <div className="little-boxe">
          <img src={hydroIcone} alt="" />

          <h3>Imputrescible & Hydrofuge</h3>
        </div>
        <div className="little-boxe">
          <img src={recyclableIcone} alt="" />

          <h3>100% recyclé & recyclable</h3>
        </div>
        <div className="little-boxe">
          <img src={transformIcone} alt="" />

          <h3>Transformable & durable</h3>
        </div>
        <div className="little-boxe">
          <img src={designIcone} alt="" />
          <h3>Coloré & design</h3>
        </div>
        <div className="little-boxe">
          <img src={easyIcone} alt="" />
          <h3>Se travaille comme le bois</h3>
        </div>
      </div>
  
      </section>
 

  )
}

export default HeroMaterial