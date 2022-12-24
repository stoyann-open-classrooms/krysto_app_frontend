import React from "react";
import dailyPlastic from "../../assets/image/dailyplastic.png";
import PETICONS from "../../assets/plasticTypeIcons/type-pet.png";
import LDPEICONS from "../../assets/plasticTypeIcons/type-ldpe.png";
import HDPEICONS from "../../assets/plasticTypeIcons/type-hdpe.png";
import OTHERICONS from "../../assets/plasticTypeIcons/type-other.png";
import PPICONS from "../../assets/plasticTypeIcons/type-pp.png";
import PSICONS from "../../assets/plasticTypeIcons/type-ps.png";
import PVCICONS from "../../assets/plasticTypeIcons/type-hdpe.png";
import thermosetex from "../../assets/image/thermosetex.jpg";
import { Link } from "react-router-dom";
import './howToRecycle.css'

function HowToRecycle() {
  return (
    <div className="page-content">
      <section >
        <h1>
          Maximisez votre impact écologique grâce aux points de collecte Krysto
        </h1>
        <p>
          Pour maximiser le taux de recyclage de vos déchets, il est recommandé
          de rincer à l'eau les contenants qui ont contenu des aliments, comme
          du yaourt ou de la glace, avant de les déposer dans les points de
          collecte Krysto. 
          </p>
          <p>

          Cela permet de réduire les mauvaises odeurs et de
          faciliter le tri et le traitement ultérieur des déchets.
          </p>
          <p>

           En ce qui
          concerne les produits d'entretien ménager (bidons de lessive,
          assouplissants, etc.) ou les produits de beauté (bouteilles de
          shampoing, gel douche, etc.), il n'est pas nécessaire de les rincer.
          Nous utilisons les résidus qui restent à l'intérieur lorsque nous
          lavons le plastique, ce qui nous évite d'ajouter du détergent. 
          </p>
          <p>
          De
          même, en enlevant les étiquettes des bouteilles et autres contenants,
          vous pouvez contribuer à améliorer le taux de recyclage, car cela rend
          les produits plus faciles à trier et à recycler.
          </p>

        <p>
          Il est important de noter que, bien que le rinçage et le retrait des
          étiquettes puissent être bénéfiques pour le recyclage, ils ne sont pas
          obligatoires lorsque vous déposez vos déchets dans les points de
          collecte Krysto.
        </p>
          <p>

           Néanmoins, nous vous encourageons à suivre ces
          recommandations afin de contribuer au mieux à la protection de
          l'environnement et à la préservation de nos ressources naturelles.
          </p>

        <h2>Qu'est-ce que le plastique ? </h2>
        <p>
          Dans un premmier temps interressont nous aux différents types de
          plastiques. Quelles sont les différents types de plastiques ? Comment
          les reconnaitres ?
        </p>
      </section>
      <p>
        Il est important de savoir qu'il existe deux grandes catégories de
        plastique : les thermoplastiques et les thermodurcissables.
      </p>
      <div className="plastic-type-container">
        <h4>Les thermodurcissables</h4>
        <p>
          Les thermodurcissables, quant à eux, sont des matériaux qui ne peuvent
          pas être fondus une fois qu'ils ont été durcis. Ils sont souvent
          utilisés dans la fabrication de produits durables, tels que les
          jouets, les meubles, les appareils électroniques, etc.
        </p>
        <p>
          On peut considérer les plastiques thermodurcissables comme du pain :
          une fois cuits, si vous tentez de les réchauffer, ils brûleront.
        </p>
        <p className="red">Aucun de ces plastiques ne peuvent être recyclé.</p>
      </div>
      <h3>Exemples de thermodurcissable : </h3>

      <div className="image-container">
        <img src={thermosetex} alt="" />
      </div>
      <div className="plastic-type-container">
        <h4>Les thermoplastiques</h4>
        <p>
          Les thermoplastiques sont des matériaux qui peuvent être fondus et
          refondus plusieurs fois sans perdre leur qualités. Ils sont souples et
          malléables à basse température, et se durcissent lorsqu'ils sont
          refroidis. Les thermoplastiques sont couramment utilisés dans la
          fabrication de produits jetables, tels que les bouteilles d'eau, les
          sacs en plastique, les contenants alimentaires, etc.
        </p>
        <p>
          Les matériaux thermoplastiques peuvent être chauffés et refroidis à
          plusieurs reprises : lorsqu'ils sont chauffés, ils fondent et
          redeviennent durs lorsqu'ils refroidissent. On peut les considérer
          comme du beurre : il peut être réchauffé et refroidi plusieurs fois,
          il fond et se solidifie à nouveau.
        </p>
        <h3>Exemples de thermoplastiques : </h3>

        <div className="image-container">
          <img src={dailyPlastic} alt="" />
        </div>

        <p>
          Heureusement, 80 % des plastiques produits dans le monde sont des
          thermoplastiques, ce qui signifie qu'ils peuvent être recyclés et
          transformés. Il existe plusieurs méthodes pour reconnaître les
          différents types de plastiques. La plupart des produits en plastique
          portent un symbole qui indique le type de matériau utilisé. Ce symbole
          est généralement placé sur le fond ou sur le côté du produit, et est
          composé d'un triangle avec un chiffre à l'intérieur. Le chiffre
          indique le type de plastique utilisé, selon la classification suivante
          :
        </p>
        <ul className="plastic-types-list">
          <li>
          <div className="plastic-icons">
            <img src={PETICONS} alt="icone du type de plastique PET" />
          </div>
            polyéthylène téréphtalate (PET)</li>
          <li>
            
          <div className="plastic-icons">
            <img src={HDPEICONS} alt="icone du type de plastique HDPE" />
          </div>
            polyéthylène haute densité (HDPE)</li>
          <li>
          <div className="plastic-icons">
            <img src={PVCICONS} alt="icone du type de plastique PVC" />
          </div>
            polyvinylchlorure (PVC)</li>
          <li>
          <div className="plastic-icons">
            <img src={LDPEICONS} alt="icone du type de plastique LDPE" />
          </div>
            polyéthylène basse densité (LDPE)</li>
          <li>
          <div className="plastic-icons">
            <img src={PPICONS} alt="icone du type de plastique PP" />
          </div>
            polypropylène (PP)</li>
          <li>
          <div className="plastic-icons">
            <img src={PSICONS} alt="icone du type de plastique PS" />
          </div>
            polystyrène (PS)</li>
          <li>
          <div className="plastic-icons">
            <img src={OTHERICONS} alt="icone du type de plastique autres" />
          </div>
            autres plastiques (acrylique, polycarbonate, etc.)</li>
        </ul>
        <p>
          Il est important de noter que cette classification ne concerne que les
          plastiques couramment utilisés dans la vie quotidienne, et qu'il
          existe d'autres types de plastiques qui ne sont pas inclus dans cette
          liste. En outre, certains produits en plastique peuvent être fabriqués
          à partir de différents types de plastiques, selon les exigences de
          l'application.
        </p>
      </div>
      <h2>Comprendre les différents types de plastique et leur recyclabilité.</h2>
      <div className="plastic-type-container">
        <h4>Le PET (polytéréphtalate d'éthylène)</h4>
        <div className="plastic-type-content">
       
          <div className="plastic-type-txt">
            <p>
              Le PET est un plastique très solide qui se reconnaît facilement
              grâce à son aspect transparent. La plupart des bouteilles d'eau et
              de soda sont fabriquées à partir de PET, ainsi que certains pots,
              peignes, sacs, fourre-tout, tapis, cordes et filets de pêche. Le
              PET est le type de plastique qui est le mieux recyclé par les
              techniques de recyclage traditionnelles.
            </p>
            <p>
              Le plastique PET est un peu complexe à travailler et dégage des
              fumées qui peuvent être très nocives.
            </p>
            <p className="red">
              Comme ce type de plastique est couramment recyclé par les
              industriels, nous avons choisi chez KRYSTO de ne pas travailler
              avec ce type de plastique.
            </p>
          </div>
        </div>
      </div>
      <div className="plastic-type-container">
        <h4>Le PEHD (polyéthylène haute densité)</h4>
        <p>
          Le PEHD est souvent utilisé pour les contenants alimentaires et de
          boissons, ainsi que pour les bouteilles de lait, d'huile de moteur, de
          shampoing, de gel douche, les détergents, les javellisants, les jouets
          et les bouchons de bouteilles. Les produits en PEHD sont souvent plus
          faciles à collecter, trier et nettoyer.
          <p className="green">
            Le PEHD fonctionne très bien avec nos machines, ce qui en fait un
            choix idéal pour être transformé en de nouveaux objets !
          </p>
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PVC (chlorure de polyvinyle)</h4>
        <p>
          Le PVC est toxique, Il est le plus souvent utilisé dans les tuyaux de
          plomberie et libère du chlorure lorsqu'il est chauffé.
        </p>
        <p className="red">
          En raison de sa toxicité, nous avons choisi de ne pas travailler avec
          le PVC chez KRYSTO.
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le LDPE (polyéthylène basse densité)</h4>
        <p>
          Le LDPE est largement utilisé pour les emballages en plastique, les
          sacs à sandwich, les bouteilles compressibles et les sacs d'épicerie
          en plastique. Habituellement, le LDPE n'est pas souvent recyclé, car
          il n'est souvent pas estampillé, est trop léger et a tendance à être
          plus difficile à nettoyer, mais il fonctionne assez bien avec nos
          techniques de recyclage.
        </p>
        <p className="green">Nous collectons ce type de plastique !</p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PP (polypropylène)</h4>
        <p>
          Le PP est l'un des plastiques les plus couramment disponibles sur le
          marché. Il est solide et peut généralement résister à des températures
          plus élevées. Le PP a une grande variété d'utilisations, mais est
          systématiquement utilisé pour les produits qui entrent en contact avec
          les aliments et les boissons, tels que les boîtes de tupperware, les
          boîtes de yaourt, les bouteilles de sirop, etc. Le PP fonctionne très
          bien avec nos machines de recyclage.
        </p>
        <p className="green">
          Nous travaillons avec le PP, un plastique qui fonctionne parfaitement
          avec nos techniques de recyclage. Chez Krysto, nous aimons ce type de
          plastique qui nous permet de fabriquer de nouveaux objets durables
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PS (polystyrène)</h4>
        <p>
          Le PS est plus communément connu sous le nom de polystyrène expansé,
          mais apparaît également dans de nombreux autres produits. Le PS peut
          être recyclé, mais cela nécessite beaucoup d'énergie, ce qui signifie
          que peu d'endroits l'acceptent. Les tasses à café jetables, les boîtes
          à aliments en plastique, les couverts en plastique et la mousse
          d'emballage sont fabriqués en PS. Ce plastique fonctionne très bien
          avec nos machines, mais il est l'un des types de plastique les plus
          toxiques (nous devons donc faire attention lorsque nous travaillons
          avec lui). Cependant, il offre des propriétés esthétiques et haptiques
          intéressantes, similaires au verre, et peut être poli.
        </p>
        <p className="green">
          Nous avons choisi de recycler le PS en raison de ses propriétés
          intéressantes et de sa faible recyclabilité par les techniques
          traditionnelles
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Autres (7)</h4>
        <p>
          Le code 7 est utilisé pour identifier d'autres types de plastique qui
          ne sont pas définis par les six premières catégories. Des plastiques
          tels que l'ABS, l'acrylique ou le polycarbonate sont inclus dans cette
          catégorie et peuvent être difficiles à recycler, mais certains d'entre
          eux peuvent fonctionner avec nos techniques de recyclage.
          <p className="orange">
            Lorsque nous trouvons des gisements de plastique de cette catégorie,
            nous effectuons des tests pour essayer de les transformer en quelque
            chose de qualitatif supérieur
          </p>
        </p>
        {/* <RecyclableProductsList /> */}
      </div>

      <Link className="btn btn-cta" to={"/nos-produits-categories"}>
        Découvrir la gamme de produits Krysto
      </Link>
      <Link className="btn btn-cta" to={"/"}>
        Retour a l'accueil
      </Link>
    
    </div>
  );
}

export default HowToRecycle;
