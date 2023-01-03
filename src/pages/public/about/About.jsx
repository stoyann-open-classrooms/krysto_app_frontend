import handImage from "../../../assets/image/bouchons_hands.png";
import product from "../../../assets/image/extrusion-products.jpg";
import krysto from "../../../assets/image/shred_plastic_bar.jpeg";
import waste from "../../../assets/image/Plastic-waste-ocean.jpg";
import './about.css'

function About() {
  return (
    <div className="page-content">
      <section className="heading">
        <h1>Notre mission</h1>
        <div className="image-container">
          <img src={handImage} alt="" />
        </div>
        <h4>
          Transformer un matériau obsolète pour créer quelque chose de
          qualitiativement supérieur
        </h4>
        <p>
          Chez Krysto, nous faisons en sorte de collecter divers déchets qui
          autrement finiraient dans l'océan, seraient enfouis ou incinérés.
          Aprés avoir triées et laver les plastiques il sont finement broyée
          avant d'être chaufer et injecter ou extruder dans des moules pour
          donner vie à nos production. En uttilisant cette méthode nous sommes
          en mesure de créer des produitss de qualité surpérieur tout en
          préservant l'environement et notre ecosystéme unique au monde.
        </p>
        <p>
         Nous nous donnons pour mission de recycler les déchets
          plastiques pour en faire des produits durables et écologiques. Nous
          proposons une large gamme de produits en plastique recyclé, tels que
          des poutres, planches, lunettes de soleil,clés USB..., fabriqués à
          partir de déchets plastiques collectés localement. Nous proposons
          également des points de collecte pour faciliter le dépôt de vos
          déchets plastiques, ainsi que des solutions sur mesure pour les
          entreprises souhaitant améliorer leur bilan RSE.
        </p>
        <p>
          Nos machines de production sont fabriquées en France et sont conçues
          selon une approche Low tech pour maximiser l'efficacité énergétique. Nos moules en
          aluminium de qualité garantissent la précision et la qualité de chaque
          produit.
        </p>
        <p>
          En optant pour le plastique recyclé, vous contribuez à la réduction de la pollution plastique
          et à la création de produits recyclés de qualité, tout en soutenant
          l'économie locale. Nous pouvons également créer des moules
          personnalisés selon vos spécifications et vos besoins, y compris pour
          personnaliser les produits avec votre logo. Nous sommes engagés en
          faveur d'une écoconception durable et nous mettons notre expertise en
          matière de production responsable au service de l'environnement et de
          l'économie locale et circulaire.
        </p>
      </section>
      <div className="boxes">
        <div>
          <img className="img-box" src={waste} alt="" />
          <h4>Déchets</h4>
        </div>
        <div>
          <img className="img-box" src={krysto} alt="" />
          <h4>krysto</h4>
        </div>
        <div>
          <img className="img-box" src={product} alt="" />
          <h4>Produits</h4>
        </div>
      </div>
    </div>
  );
}

export default About;
