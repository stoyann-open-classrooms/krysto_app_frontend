import { useEffect } from "react";
import { useState } from "react";
import {
  FaProductHunt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo_krysto.png";
import "./header.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
      const changeWidth = () => {
          setWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
  }, [])

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav>
        {(toggleMenu ||  width > 800)  && (
          <ul>
            <li>
              <Link to={"/products"}>
                 Nos produits
              </Link>
            </li>
            <li>
              <Link to={"/collect-points"}>
                 points de collecte
              </Link>
            </li>
            <li>
              <Link to={"/partners"}>
               Partenaires
              </Link>
            </li>

            <li>
              <Link to={"/about"}>
                A propos
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt /> Connexion
              </Link>
            </li>
            <li>
              <Link to={"/register-plan"}>
                <FaUser /> Inscription
              </Link>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="toggle-nav btn">
          Menu
        </button>
      </nav>
    </header>
  );
}

export default Header;
