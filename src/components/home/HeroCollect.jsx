import { Link } from "react-router-dom";
import HomeMap from "./HomeMap";
import landFill from "../../assets/image/burnlandfillocean.png";

function HeroCollect() {
  return (
    <section className="hero-collect">
      <h3>L'assurance que vos déchets soient bien recyclés</h3>
      <blockquote>
        Depuis 2015, plus de 6.9 milliards de tonnes de plastique ont étè
        produites. Environ 9 % ont été recyclés, 12 % incinérés et 79 % ont été
        accumulé dans des décharges ou dans la nature.
      </blockquote>
      <figcaption>
        <cite>National Geographic</cite>{" "}
      </figcaption>
      <div className="hero-collect-explain">
        <div className="hero-collect-explain-img">
          <img src={landFill} alt="" />
        </div>
        <div className="hero-collect-explain-txt">
          <p>
            Chez Krysto, nous avons pour objectif de mettre en place de nombreux
            points de collecte en Nouvelle-Calédonie afin de faciliter le tri
            des déchets plastiques. Nous proposons également aux entreprises qui
            le souhaitent de mettre en place des bacs de tri dans leurs locaux,
            afin de sensibiliser leurs employés au tri sélectif et de contribuer
            à la protection de l'environnement. Ces bacs de tri ne concernent
            que certains types de plastiques, comme le HDPE (polyéthylène haute
            densité) et le PP (polypropylène), qui sont les matériaux plastiques
            les plus couramment utilisés dans la production de plastique a usage
            unique. En triant vos déchets plastiques et en les apportant dans
            l'un de nos points de collecte, vous contribuez à la réduction de la
            pollution plastique et à la création de produits recyclés de
            qualité.
          </p>
          <p>
            Voici quelques exemples de produits en plastique HDPE et PP qui
            peuvent être triés et apporter dans nos points de collecte :
          </p>
          <ul>
            <li>Bouteille de lessive</li>
            <li>Bouteilles de shampoings et autre produits de toilette</li>
            <li>Bouchons de bouteilles d'eau ou de sodas</li>
            <li>
              contenant alimentaires (pot de creme glacée, bouteille de lait...)
            </li>
          </ul>

          <p>
            Il est facile de reconnaitre ces types de déchets plastique en
            uttilisant les numeros de imprimée normalement sur chaque produit.
            Si vous voyez le numéro 2 ou 5 imprimé sur un produit en plastique
            cela siginifie que le produit peut être apporté dans nos points de
            collecte pour être recyclé.
          </p>
          <p>
            vous pouvez également vous rendre sur notre page de liste de
            produits recyclables et utiliser la barre de recherche pour savoir
            si un produit peut être apporté dans nos points de collecte. Cette
            page vous permet de consulter la liste complète des produits en
            plastique que nous acceptons dans nos points de collecte, ainsi que
            les consignes de tri à respecter. Si vous ne trouvez pas le produit
            que vous souhaitez recycler dans cette liste, n'hésitez pas à nous
            contacter pour obtenir plus d'informations. Nous sommes là pour vous
            aider à trier vos déchets de manière responsable et à contribuer à
            un avenir plus durable.
          </p>

          <Link to={"/les-produits-recyclables"} className="btn btn-block"> consulter la liste des produits recyclable</Link>

        </div>
      </div>
      <p>Grâce a nôtre carte interactive, vous pouvez facilement trouver un point de collecte Krysto proche de votre domicile ou de votre travail. La carte vous indique l'adresse exacte du point de collecte et vous permet de vous y rendre en utilisant les indications de géolocalisation de votre appareil. </p>
      <HomeMap />
    </section>
  );
}

export default HeroCollect;
