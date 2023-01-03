import React from 'react'
import { Link } from 'react-router-dom'

function CollectRequest() {
  return (
    <>
    <div className="page-content">

    <section className='heading'>
      <h1>Demandé une collecte</h1>
      <p>Merci de choisir une options</p>
    </section>
      <Link to={'/new-request'} className='btn  btn-block'>
          Faire une demande de collecte
      </Link>
      <Link to={'/tickets'} className='btn  btn-block btn-reverse'>
        Faire une réclamation
      </Link>
    </div>
</>
  )
}

export default CollectRequest