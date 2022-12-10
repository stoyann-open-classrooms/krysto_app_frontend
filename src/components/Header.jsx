import {FaProductHunt, FaSignInAlt , FaSignOutAlt, FaUser, FaUserFriends} from  'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from '../assets/profil.png'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to={'/'}> KRYSTO
                {/* <img src={logo} alt="" /> */}
            </Link>
        </div>
        <ul>
            <li>
                <Link to={'/products'}>
                    <FaProductHunt/> Nos produits
                </Link>
            </li>
            <li>
                <Link to={'/partners'}>
                    <FaUserFriends/> Partenaires
                </Link>
            </li>
          
            <li>
                <Link to={'/about'}>
                    <FaUserFriends/> A propos
                </Link>
            </li>
            <li>
                <Link to={'/login'}>
                    <FaSignInAlt/> Connexion
                </Link>
            </li>
            <li>
                <Link to={'/register-plan'}>
                    <FaUser/> Inscription
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header