import React from 'react'
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './footer.css'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-nav-container">
          <div className="footer-nav-section">
            <p>Voir aussi</p>
            <ul>
              <li>
                <Link to={'/remmerciements'}>Remerciements</Link>
              </li>
            </ul>
          </div>
          <div className="footer-nav-section">
            <p>A propos</p>
            <ul>
              <li>
                <Link to={'/equipe-krysto'}>Qui sommes nous ?</Link>
              </li>
            
              <li>
                <Link to={'/condition-generale-uttilisation'}>C.G.U</Link>
              </li>
             
            </ul>
          </div>
          <div className="footer-nav-section">
            <p>Presse</p>
            <ul>
              <li>
            <Link to={'/on-parle-de-nous'}>On parle de nous</Link>
              </li>
              <li>

            <Link to={'/press-kit'}>Kit de presse</Link>
              </li>
              <li>

            <Link to={'/fichiers-a-telecharger'}>Flyers/Affiches/Visuels</Link>
              </li>
            </ul>
          </div>
        </div>
        
          <div className="social-media-container">
            <a href="https://www.facebook.com/Krysto.noumea/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.youtube.com/channel/UCoudw4zohXdN9Bs3I32uHkQ">
              <FaYoutube />
            </a>
          </div>
     
  

        <p className='all-right-reserved'> KRYSTO.NC © Tous droits réservés - 2023</p>
      </footer>
    </>
  )
}

export default Footer