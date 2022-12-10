import {Link} from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function PrivateHome() {
  return (
    <>
    <section className='heading'>
      <h1>Demandé une collecte</h1>
      <p>Merci de choisir une options</p>
    </section>
      <Link to={'/new-request'} className='btn btn-reverse btn-block'>
          <FaQuestionCircle/>Faire une demande
      </Link>
      <Link to={'/tickets'} className='btn  btn-block'>
          <FaTicketAlt/>Faire une réclamation
      </Link>
</>
  )
}

export default PrivateHome