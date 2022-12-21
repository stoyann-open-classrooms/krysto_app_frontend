import React from "react";
import RecyclableProductsList from "../components/recyclableProducts/RecyclableProductsList";
import dailyPlastic from "../assets/image/dailyplastic.png";
import thermosetex from "../assets/image/thermosetex.jpg";
import { Link } from "react-router-dom";

function RecyclableProducts() {
  return (
    <div className="page-content">
      <section className="heading">
        <h1>Comment bien recyclé avec Krysto</h1>
        <h2>Qu'est-ce que le plastique ? </h2>
        <p>
          Dans un premmier temps interressont nous aux différents types de
          plastiques. Quelles sont les différents types de plastiques ? Comment
          les reconnaitres ?
        </p>
      </section>
      <p>
        Premierement il faut savoir qu'il existe deux grandes catégories de
        plastique: Les thermoplastiques et les thermodurcissables
      </p>
      <div className="plastic-type-container">

      <h4>Les thermodurcissables</h4>
      <p>
        Les plastiques thermodurcissables contiennent des polymères qui se
        réticulent et créent une liaison irréversible, ce qui signifie qu'ils ne
        peuvent pas être refondus - une fois leur forme prise, ils seront
        solidifiés pour toujours.{" "}
      </p>
      <p>
        Considerez les plastiques thermodurcissables comme du pain: Une fois que
        le pain est fait, si vous essayer de le chauffer, il brûle.{" "}
        <p className="red">Aucun de ces plastiques ne peuvent être recyclé.</p>
      </p>

      </div>
      <h3>Exemples de thermodurcissable : </h3>

      <div className="image-container">
        <img src={thermosetex} alt="" />
      </div>
      <div className="plastic-type-container">
      <h4>Les thermoplastiques</h4>
      <p>
        Les thermoplastiques sont des polymères plastiques qui deviennent mous
        lorsqu'ils sont chauffés et durs une fois refroidis
      </p>
      <p>
        Les matériaux thermoplastiques peuvent être refroidis et chauffés
        plusieurs fois : lorsqu'ils sont chauffés, ils fondent et redeviennent
        durs lorsqu'ils refroidissent. Considérez les thermoplastiques comme du
        beurre: il peut être chauffé et refroidi plusieurs fois, il fond et se
        fige à nouveau.
      </p>
      <h3>Exemples de thermoplastiques : </h3>

      <div className="image-container">
        <img src={dailyPlastic} alt="" />
      </div>

      <p>
        Heureusement, 80 % des plastiques dans le monde sont des
        thermoplastiques, ce qui signifie qu'ils peuvent être recyclés et
        transformés. Les thermoplastiques sont divisés en 6 sous-catégories
        supplémentaires en fonction de leur structure et de leur propriétés, et
        peuvent être reconnu par leur nom ou numéro qui doit généralement être
        imprimé ou estampé quelques part sur vos objets.
      </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PET (1)</h4>
        <p>
          Le PET est un plastique trés solide qui peut facilement être reconnu
          par son aspect transparent - Toutes les bouteilles d'eau et de soda
          sont fabriquée à partir de PET ainsi que certains pots, peignes, sacs,
          fourre-tout, tapis, cordes et filets de pêche et sont trés courament
          recyclés.
        </p>
        <p>
          Ce plastique est un peut complexe a travailler et dégage des fummées
          qui peuvent être trés nocive. 
        </p>
        <p className="red">
        Ce plastique etant courament recyclé par
          les industriels nous avons donc fait le choix chez KRYSTO de ne pas
          travailler ce plastique.
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PEHD (2)</h4>
        <p>
          Le PEHD est souvent utilisé pour les contenants alimentaires et de
          boissons, ainsi que pour les bouteilles de lait, d’huile de moteur, de
          shampoing, de gel douche, les détergents, les javellisants, les jouets
          et les bouchons de bouteilles. Les produits de ce type de plastique
          sont souvent plus faciles à collecter, trier et nettoyer.
          <p className="green">

           Le PEHD
          fonctionne très bien avec nos machines, ce qui le rend idéal pour les
          transformer en de nouveaux objets!
          </p>
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PVC (3)</h4>
        <p>
          Le PVC est toxique donc nous ne travaillons pas avec. Il se trouve le
          plus souvent dans les tuyaux de plomberie et libère du chlorure
          lorsqu'il est chauffé
        </p>
        <p className="red">
          Ces pour ces raisons que nous avons choisi de ne pas travailler ce
          type de plastique chez <strong>KRYSTO</strong>
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le LDPE (4)</h4>
        <p>
          Le LDPE est largement utilisé pour les emballages en plastique, les
          sacs à sandwich, les bouteilles compressibles et les sacs d'épicerie
          en plastique. Habituellement, le LDPE n'est pas fréquemment recyclé,
          car il n'est souvent pas estampillé, est trop léger et a tendance à
          être plus difficile à nettoyer, mais il fonctionne plutôt bien avec
          nos techniques.
        </p>
        <p className="green">Nous collectons ce type de plastique !</p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PP (5)</h4>
        <p>
          Le PP est l'un des plastiques les plus couramment disponibles sur le
          marché, il est solide et peut généralement résister à des températures
          plus élevées. Le PP a une grande variété d'utilisations mais est
          systématiquement utilisé pour les produits qui entrent en contact avec
          les aliments et boissons - tupperware, boîtes de yaourt, bouteilles de
          sirop, etc. PP fonctionne très bien avec Nos machines.
        </p>
        <p className="green">
          Nous travaillons avec ce plastique ! Celui fonctionne parfaitement
          avec nos techniques de recyclage.
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Le PS (6)</h4>
        <p>
          Le PS est plus communément connu sous le nom de polystyrène expansé,
          mais apparaît également dans de nombreux autres produits. Le PS peut
          être recyclé, mais pas efficacement - le recyclage nécessite beaucoup
          d'énergie, ce qui signifie que peu d'endroits l'acceptent. Les tasses
          à café jetables, les boîtes à aliments en plastique, les couverts en
          plastique et la mousse d'emballage sont fabriqués en PS - ce plastique
          fonctionne très bien avec nos machines. Cependant c'est l'un des types
          de plastique les plus toxiques (nous accordons donc une attention
          particulière quand nous le travaillons), mais il offre en même temps
          d’intéressantes propriétés esthétiques et haptiques car il est
          comparable au verre et peut être poli.
        </p>
        <p className="green">
          Nous avons donc choisi de recyclé ce type de plastique chez{" "}
          <strong>KRYSTO</strong>
        </p>
      </div>
      <div className="plastic-type-container">
        <h4>Autres (7)</h4>
        <p>
          Ce code est utilisé pour identifier d'autres types de plastique qui ne
          sont pas définis par les six premières catégories. Des plastiques tels
          que l'ABS, l'acrylique ou le polycarbonate sont inclus dans cette
          catégorie et peuvent être difficiles à recycler, mais peuvent
          fonctionner avec nos techniques pour une partie d’entre eux.
          <p className="orange">
            Nous effectuons des tests quand nous trouvons un de ces gissement de
            plastique pour tenter de le transformer en quelques choses de
            qualitativement supérieur.
          </p>
        </p>
        {/* <RecyclableProductsList /> */}
      </div>
        
     <strong>Votre entreprise est génèratrice de déchets plastiques ? Nous pouvons vous aider a les recyclées!</strong>

      <Link className="btn btn-cta" to={'/'}>contacter nous</Link>
    </div>
  );
}

export default RecyclableProducts;
