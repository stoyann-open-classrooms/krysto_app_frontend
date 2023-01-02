import React from "react";
import plasticPollution from "../../assets/image/tortue_sac_plastique.png";
import '../../pages/home/home.css'
import microPlasticPollution from "../../assets/image/plastic-ocean.png";
import Paralax from "./Paralax";
function ProblemHero() {
  return (
    <section className="problem-hero">
      <div className="hero-heading">
        <h2>Le problème du plastique</h2>
      </div>
     
        <blockquote>
          À travers le monde, 73 % des déchets sur les plages sont du plastique
          : filtres de cigarettes, bouteilles, bouchons, emballages
          alimentaires, sacs ou bacs en polystyrène.
        </blockquote>
        <figcaption>
          <cite>National Geographic</cite>
        </figcaption>
<Paralax/>
      
      <p className="hero-txt">
       Les plastiques ne contaminent pas seulement les côtes. En effet, ils affectent toute la faune marine. Les animaux se coincent dans les plus grands déchets et confondent les petits fragments de plastique avec de la nourriture, ce qui peut provoquer leur intoxication et leur coûter la vie.
      </p>

      <div className="hero-heading">
        <h2>Un désastre pour la faune et la flore marine</h2>
      
      </div>
      <blockquote>
       D'ici 2050, toutes les espèces d'oiseaux marins mangeront du plastique régulierement.
        </blockquote>
        <figcaption><cite>National Geographic</cite> </figcaption>

      <section className="paralax2">
   
   </section>
      
      <p className="hero-txt">
      L'océan Pacifique Sud est également gravement touché par la pollution plastique, avec la présence d'un "continent de plastique" appelé "South Pacific Garbage Patch", qui est un amas de déchets flottants de la taille de cinq fois la Grande Terre de la Nouvelle-Calédonie. Si la situation est alarmante, les conséquences sur notre environnement sont également graves. En apportant vos déchets plastique dans les points de collecte Krysto ou en choisissant une des options de collecte à domicile, vous pouvez être sûr à 100% que les déchets que vous avez triés seront effectivement recyclés.
      </p>
    </section>
  );
}

export default ProblemHero;
