import { Link } from "react-router-dom";
import HomeMap from "./HomeMap";
import landFill from "../../assets/image/burnlandfillocean.png"


function HeroCollect() {
  return (
    <section className="hero-collect">
    <h3>L'assurance que vos déchets soient bien recyclés</h3>
     <div className="hero-collect-explain">
    <div className="hero-collect-explain-img">
      <img src={landFill} alt="" />
    </div>
    <div className="hero-collect-explain-txt">
    <p>
      La production mondiale de plastique a triplé en 25 ans et la
      croissance ne ralentit pas. À l'echelle de la France, cela représente
      plus de 5 millions de tonnes produites chaque années dont seulement 9%
      seront recyclées. Pour la plupart ces déchets finissent enfouis ou dans
      l'océan. Si le constat est accablant, les conséquences sur notre
      environement unique au monde le sont tout autant. En apportant vos
      déchets plastique dans les points de collecte <strong>Krysto</strong>{" "}
      ou en choissisant parmis les formules de collecte à domicile vous êtes
      assurés à 100% que les déchets que vous avez triés sont effectivement
      recyclés.
    </p>
    </div>
     </div>
    

    <HomeMap/>
  
  </section>
  )
}

export default HeroCollect