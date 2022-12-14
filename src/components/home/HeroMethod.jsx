import React from 'react'
import { Link } from 'react-router-dom'
import extrudeMethod from '../../assets/image/extruder_design.svg'
import injectionMethod from '../../assets/image/injection_design.svg'


function HeroMethod() {
  return (
    <section className="home-method-section">
    <h3>Une proceder de recyclage innovant</h3>
    <p>
      Nos productions ce différencient des alternatives actuellement
      disponible sur le marché car elles peuvent être a nouveaux recyclées
      et benneficie d'une qualité esthétique impossible à obtenir avec les
      methodes de recyclage classiques.
    </p>
    <h3>Extrusion</h3>
    <img src={extrudeMethod} alt="" />
    <h3>Injection</h3>
    <img src={injectionMethod} alt="" />
  <Link to={"/"} className="btn btn-cta">
    Découvir notre mode de production
  </Link>
  </section>
  )
}

export default HeroMethod