import {FaSignInAlt , FaSignOutAlt, FaUser} from  'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to={'/'}>KRYSTO</Link>
        </div>
        <ul>
            <li>
                <Link to={'/login'}>
                    <FaSignInAlt/> Connexion
                </Link>
            </li>
            <li>
                <Link to={'/register'}>
                    <FaUser/> Inscription
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header