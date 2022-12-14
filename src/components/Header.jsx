import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {
  FaProductHunt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logo from "../assets/logo_krysto.png";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const token = JSON.parse(localStorage.getItem("userToken"));
  const { user } = useSelector((state) => state.auth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      {toggleMenu ? <div onClick={toggleNav} className="overlay"></div> : ""}

      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          {(toggleMenu || width > 982) && (
            <ul>
              <li>
                <Link to={"/nos-produits-categories"}>Nos produits</Link>
              </li>
              <li>
                <Link to={"/trouver-un-point-de-collecte"}>
                  Points de collecte
                </Link>
              </li>
              <li>
                <Link to={"/comment-recycler-efficacement"}>
                  Comment bien recycler
                </Link>
              </li>
              <li>
                <Link to={"/nos-partenaires"}>Partenaires</Link>
              </li>

              <li>
                <Link to={"/a-propos"}>A propos</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to={"/private/private-home"}>Mon profil</Link>
                  </li>
                  <li>
                    <button className="logout-btn" onClick={onLogout}>
                      <FaSignInAlt /> Deconnection
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/connection"}>
                      <FaSignInAlt /> Connexion
                    </Link>
                  </li>
                  <li>
                    <Link to={"/nos-offre-de-collecte"}>
                      <FaUser /> Inscription
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
          <button onClick={toggleNav} className="toggle-nav btn">
            {toggleMenu ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
