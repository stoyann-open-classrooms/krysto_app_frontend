import ProductCategoriesList from "../../components/productCategories/ProductCategoriesList";
import './productCategories.css'
function ProductCategories() {
  return (
    <div className="page-content">
      <h1>Produits durables et écologiques : découvrez la gamme Krysto</h1>

      <div className="product-categories-paragraphe">


      <h4>Krysto, une entreprise engagée dans la durabilité</h4>
      <p>
        Notre gamme de produits est fabriquée à partir de plastique recyclé
        issus de déchets plastiques collectés localement. Nous avons choisi de
        travailler avec ce matériau car il nous permet de réduire la
        consommation de matières premières et de contribuer à la réduction des
        déchets plastiques. En utilisant du plastique recyclé, nous évitons
        également de devoir extraire de nouvelles matières premières, ce qui a
        un impact positif sur l'environnement.
      </p>
      </div>
      <div className="product-categories-paragraphe">


      <h4>Des produits 100% recyclables pour préserver l'environnement</h4>
      <p>
        Nos produits sont également conçus de manière à être 100% recyclables.
        Nous avons choisi de privilégier des formes simples et épurées afin de
        faciliter leur recyclage et de maximiser leur impact écologique. Nous
        sommes convaincus que chacun de nos produits peut avoir une seconde vie,
        et nous encourageons nos clients à les recycler une fois qu'ils ne sont
        plus utilisés.
      </p>

      </div>
      <div className="product-categories-paragraphe">

      <h4>
      Une large gamme de produits pour tous les besoins et tous les goûts
      </h4>
      <p>
        En plus d'être écologiques, nos produits sont également pratiques et
        esthétiques. Nous proposons une large gamme de couleurs et de designs
        pour répondre à tous les goûts et tous les besoins. Que vous cherchiez
        des produits pour votre maison, votre entreprise, ou pour offrir en
        cadeau, nous avons certainement ce qu'il vous faut dans notre catalogue
        en constante évolution.
      </p>

      </div>
      <div className="product-categories-paragraphe">

      <h4>
        Krysto, votre choix pour une maison ou une entreprise durable et
        écologique
      </h4>
      <p>
        Nous espérons que vous apprécierez nos produits autant que nous
        apprécions de les créer. N'hésitez pas à découvrir notre gamme de
        produits Krysto et à opter pour des produits durables et écologiques
        pour votre maison ou votre entreprise. Nous sommes convaincus que vous
        serez satisfait de la qualité et de l'écologie de nos produits, qui
        contribuent à réduire les déchets plastiques et à préserver notre
        planète pour les générations futures.
      </p>
      </div>

      <ProductCategoriesList />
    </div>
  );
}

export default ProductCategories;
