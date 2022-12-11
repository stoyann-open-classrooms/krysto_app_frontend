import React from "react";

function ProOffers() {
  return (
    <div className="page-content">
      <section className="heading">
        <h1>Nos offres Pro</h1>
      </section>
      <section className="heading">
        <h2>Collectes de déchet plastiques</h2>
        <p>
          Commande de fournitures, emballages de repas, boisson fraîches en
          bouteilles... En entreprise, les sources de déchets plastique ne
          manquent pas !
        </p>
      </section>

      
      <section className="form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Entrer Nom / Prénom" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Société / Organisme" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Fonction" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Télèphone" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="">Quelle services vous interesse</label>
            <select name="subject" id="subject">
              <option value="">Selectionner</option>
              <option value="">Mise en place  d'un point de collecte</option>
              <option value="">
                Collecte des déchets plastique de votre entreprise
              </option>
              <option value="">
               Devenir revendeur
              </option>
              <option value="">
               Autres
              </option>
            </select>
          </div>

          <div className="form-group">
            <button className=" btn btn-block">Nous contacter</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProOffers;
