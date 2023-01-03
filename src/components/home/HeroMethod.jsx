
import { Link } from "react-router-dom";
import processMethod from "../../assets/image/process-3.jpg";
import ppProducts from "../../assets/image/pp_products.jpg";

function HeroMethod() {
  return (
    <>
      <section className="hero-collect">
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

        <Link to={"/nos-methodes-de-production"} className="btn btn-block">
          Découvir notre mode de production
        </Link>
      </section>
      <h2>
        Positionnez votre entreprise comme leader de l'éco-responsabilité avec
        les moules sur mesure Krysto
      </h2>
      <p>
        Chez Krysto, nous offrons la possibilité de concevoir des moules sur
        mesure pour créer des articles durables et écologiques qui correspondent
        à l'image de votre entreprise.
      </p>
      <p>
        Grâce à notre expertise en matière de techniques d'injection et
        d'extrusion, nous pouvons produire des pièces en plastique de qualité
        supérieure à partir de matières recyclées. Nos moules en aluminium de
        qualité garantissent la précision et la qualité de chaque produit.
      </p>
      <p>
        En optant pour le plastique recyclé et en faisant concevoir des moules
        sur mesure, vous contribuez à la réduction de la pollution plastique et
        à la création de produits de qualité, tout en soutenant l'économie
        locale.
      </p>
      <p>
        En utilisant des produits fabriqués à partir de plastique recyclé, vous
        pouvez non seulement améliorer votre image de marque en montrant votre
        engagement en faveur de l'environnement, mais vous pouvez également vous
        démarquer de vos concurrents en proposant des produits uniques et
        durables.Votre engagement en faveur de l'environnement se concrétisera
        par la production d'articles durables et écologiques en plastique
        recyclé à partir de déchets collectés en Nouvelle-Calédonie.
      </p>
      <p>
        Nous pouvons créer des moules personnalisés selon vos spécifications et
        vos besoins, et les personnaliser avec votre logo.
      </p>

      <p>
        N'hésitez pas à nous contacter pour toute question ou pour discuter de
        votre projet de production de produits en plastique recyclé. Nous sommes
        à votre disposition pour répondre à toutes vos questions et vous aider à
        développer des solutions durables et responsables pour votre entreprise.
        Nous sommes impatients de mettre notre expertise en matière de
        production en plastique recyclé au service de votre image de marque et
        de votre engagement en faveur de l'environnement.
      </p>
      <Link className="btn btn-block"> Contacter-nous</Link>

      <div className="container-img-bottom">
        <img src={ppProducts} alt="" />
      </div>
    </>
  );
}

export default HeroMethod;
