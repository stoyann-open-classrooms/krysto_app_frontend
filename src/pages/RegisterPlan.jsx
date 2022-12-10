import React from 'react'
import { Link } from 'react-router-dom'


function RegisterPlan() {
  return (
    <>
      <section className="heading">
        <h1>Choisissez votre formule...</h1>
        <p>Engagement d'un mois renouvelable - résiliable à tout moment</p>
      </section>
  
      <div className="boxes">
        <div>
          {/* <img src={coco1} alt="" /> */}
          <h2>2000 XPF / Mois</h2>
          <p>Engagement d'un mois renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
        {/* <img src={coco2} alt="" /> */}
          <h2>3200 XPF / Mois</h2>
          <p>En vous inscrivant dés aujourd'hui <br /> Vous bénéficier d'un compte <strong>gratuit a vie !</strong></p>
          <Link to={'/register'}>  <button className="btn btn-block">Choisir cette formule</button></Link>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
        {/* <img src={coco3} alt="" /> */}

          <h2>5000 XPF / Mois</h2>
          <p>Engagement d'un an renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
      </div>
        <div className="pro">
       Vous êtes un professionel nous avons des solutions pour vous aider a recycler vos déchets.
        <Link className='btn btn-block' to={'/pro-offers'}>Découvrir les offres Pro</Link>
        </div>
    </>
  )
}

export default RegisterPlan