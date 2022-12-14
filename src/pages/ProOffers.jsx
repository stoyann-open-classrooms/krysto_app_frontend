import React from "react";
import ContactForm from "../components/shared/ContactForm";

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
      <ContactForm/>
    </div>
  );
}

export default ProOffers;
