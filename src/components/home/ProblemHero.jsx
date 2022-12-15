import React from "react";
import plasticPollution from "../../assets/image/tortue_sac_plastique.png";

import microPlasticPollution from "../../assets/image/plastic-ocean.png";
function ProblemHero() {
  return (
    <section className="problem-hero">
      <div className="hero-heading">
        <h2>Le problème du plastique</h2>
        <blockquote>
        À travers le monde, 73 % des déchets sur les plages sont du plastique : filtres de cigarettes, bouteilles, bouchons, emballages alimentaires, sacs ou bacs en polystyrène.
        </blockquote>
        <figcaption><cite>National Geographic</cite> </figcaption>
      </div>

      <div className="tortue-container">
        <img src={plasticPollution} alt="" />
      </div>
      <p className="hero-txt">
       Les plastiques ne contaminent pas seulement les côtes. En effet, ils affectent toute la faune marine. Les animaux se coincent dans les plus grands déchets et confondent les petits fragments de plastique avec de la nourriture, ce qui peut provoquer leur intoxication et leur coûter la vie.
      </p>

      <div className="hero-heading">
        <h2>Un désastre pour la faune et la flore marine</h2>
        <blockquote>
       D'ici 2050, toutes les espèces d'oiseaux marins mangeront du plastique régulierement.
        </blockquote>
        <figcaption><cite>National Geographic</cite> </figcaption>
      </div>
      <div className="microplastique-container">
        <img src={microPlasticPollution} alt="" />
      </div>
      <p className="hero-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem optio
        doloremque aut impedit tempore et recusandae inventore, consequatur,
        deleniti iure at facilis repellat perspiciatis nulla nihil. Laboriosam
        maiores mollitia, veniam inventore molestiae laudantium est amet,
        repellendus nam dolores alias? Provident voluptatem adipisci sed vero
        dolor ducimus molestias? Illo, magni consequatur.
      </p>
    </section>
  );
}

export default ProblemHero;
