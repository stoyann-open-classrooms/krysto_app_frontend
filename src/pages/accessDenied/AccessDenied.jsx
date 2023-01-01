import React from 'react'
import { Link } from 'react-router-dom'
import loader from "../../assets/krysto_loader.svg";
function AccessDenied() {
  return (
   
        <div className='not-found-container'>

            <h1>OOOPS !!</h1>
            <div className="loader-not-found">

             <img src= {loader} alt="" />
            </div>
            <h2>Vous ne disposez pas des droits necessaire pour acceder a cette page.</h2>
            <Link to={'/'}>Accueil Krysto</Link>
        </div>
 
  )
}

export default AccessDenied