import React from 'react'
import { Link } from 'react-router-dom'
import loader from "../../assets/krysto_loader.svg";
function NotFound() {
  return (
   
        <div className='not-found-container'>

            <h1>OOOPS !!</h1>
            <div className="loader-not-found">

             <img src= {loader} alt="" />
            </div>
            <h2>Désolés, nous n'avons pas trouvé cette page.</h2>
            <Link to={'/'}>Accueil Krysto</Link>
        </div>
 
  )
}

export default NotFound