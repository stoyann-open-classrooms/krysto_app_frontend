import React from "react";

function ProOffers() {
  return (
    <>
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

      <section className="heading">
        <h2>Initiation à la RSE</h2>
        <p>
          Cette initiation a pour objectif de vous dépeindre les grands enjeux
          de la RSE et la place qu'occupe ce sujet au sein des entreprises.
          Ancrage territorial, économie sociale et solidaire, transparence,
          toutes ces notions n'auront plus de secret pour vous. En paralléle,
          vous apprendrez à analyser les differents poste de travail pour
          changer vos habitudes,proposer des changements ect...
        </p>
      </section>
      <div className="boxes-explain">
        <div>
          <h2>Maîtiser les enjeux</h2>
          <p>
            Qu'est-ce qu'un label ? Qu'elles normes et référentiels les
            entreprises se doivent de respecter ? La RSE est un sujet encadré,
            découvrez jusqu'a quel point.
          </p>
        </div>
        <div>
          <h2>Communication éthique</h2>
          <p>
            Greenwashing et socialwashing, découvrez ce qui ce cache réellement
            derrière de telles pratiques
          </p>
        </div>
        <div>
          <h2>La demarche RSE</h2>
          <p>
            établir une étude de matérialité, cartographier les parties
            prenantes, mettre en place la démarche et la communication
          </p>
        </div>
        <div>
          <h2>L'histoire de la RSE</h2>
          <p>
            De 1980 à aujourd'hui, quelles évolutions pouvons-nous constater ?
            Quelles figures hitoriques de la RSE
          </p>
        </div>
        <div>
          <h2>Le rôle de l'entreprise</h2>
          Elle vise à transformer les pratiques et les activités, vers une
          performance globale: économique, et aussi environementale et sociale.
        </div>
        <div>
          <h2>Auto-Diagnostic</h2>
          <p>
            Réalisez un auto-diagnostic à votre échelle. Que puis-je mettre en
            place à mon poste de travail ?
          </p>
        </div>
      </div>

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
              <option value="">Initiation à la RSE</option>
              <option value="">
                Collecte des déchets plastique de votre entreprise
              </option>
              <option value="">
                Initiation à la RSE RSE et collecte des déchets de votre
                entreprise
              </option>
            </select>
          </div>

          <div className="form-group">
            <button className=" btn btn-block">Nous contacter</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ProOffers;
