import React from "react";
import plasticPollution from "../../assets/image/tortue_sac_plastique.png";

import microPlasticPollution from "../../assets/image/plastic-ocean.png";
function ProblemHero() {
  return (
    <section className="problem-hero">
        <div className="hero-heading">
        <h2>Le problème du plastique</h2>
      <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolorum.</p>
        </div>
     
      <div className="tortue-container">
        <img src={plasticPollution} alt="" />
      </div>
      <p className="hero-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius
        doloremque consectetur iste soluta cupiditate a quas architecto ipsam
        quos odio, quibusdam qui. Sit enim maxime sequi odit quis consectetur!
        Porro iusto incidunt nihil suscipit sed at tenetur possimus asperiores,
        illum eveniet quasi. Esse laborum soluta consequatur? Vitae, harum iste.
      </p>
 
      <div className="hero-heading">
        <h2>Le problème du plastique</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolorum.</p>
        </div>
      <div className="microplastique-container">
        <img src={microPlasticPollution} alt="" />
      </div>
      <p className="hero-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem optio doloremque aut impedit tempore et recusandae inventore, consequatur, deleniti iure at facilis repellat perspiciatis nulla nihil. Laboriosam maiores mollitia, veniam inventore molestiae laudantium est amet, repellendus nam dolores alias? Provident voluptatem adipisci sed vero dolor ducimus molestias? Illo, magni consequatur.</p>
    </section>
  );
}

export default ProblemHero;
