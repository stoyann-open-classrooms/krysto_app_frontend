import { Link } from "react-router-dom";
import HomeMap from "./HomeMap";


function HeroCollect() {
  return (
    <section className="hero-collect">
    <h3>L'assurance que vos déchets soient bien recyclés</h3>

    <p>
      La production mondiale de plastique a triplé en 25 ans et la
      croissance ne ralentit pas.à l'echelle de la France, cela représente
      plus de 5 millions de tonnes produite chaque années dont seulement 9%
      seront recyclés. Pour la plupart ces déchets finissent enfouit ou dans
      l'océan. Si le constat est accablant, les conséquence sur notre
      environement unique au monde le sont tout autant En apportant vos
      déchets plastique dans les points de collecte <strong>Krysto</strong>{" "}
      ou en choissisant parmis les formules de collecte à domicile vous êtes
      assurer a 100% que les déchets que vous avez trié sont effectivement
      recyclés.
    </p>

    <HomeMap/>
  
  </section>
  )
}

export default HeroCollect