import React from 'react'
import { Link } from 'react-router-dom'

import processMethod from '../../assets/image/process-3.jpg'
import ppProducts from '../../assets/image/pp_products.jpg'


function HeroMethod() {
  return (

<>
    <section className="home-method-section">
    <h3>Un procedé de recyclage innovant</h3>
    <p>
      Nos productions se différencient des alternatives actuellement
      disponibles sur le marché car elles peuvent être à nouveaux recyclées
      et bénéficient d'une qualité esthétique impossible à obtenir avec les
      méthodes de recyclage classiques.
    </p>
   

    <div className="image-container">
    <img src={processMethod} alt="" />
    </div>

  <Link to={"/product-method"} className="btn btn-cta">
    Découvir notre mode de production
  </Link>
  </section>

  <div className="container-img-bottom">
    <img src={ppProducts} alt="" />
  </div>
   
</>
  )
}

export default HeroMethod