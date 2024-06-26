import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./AppNav.css";

const AppNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/animals-voice" className="nav__logo">
          <h1>
            Animal's
            <br />
            Voice
          </h1>
        </NavLink>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/animals-voice/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                O nas
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/animals-voice/actions"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Nasze działania
              </NavLink>
            </li>
            <li className="nav__item dropdown">
              <button
                className="nav__link dropdown-button"
                onClick={closeMenuOnMobile}
              >
                Polecamy
              </button>
              <div className="dropdown-content">
                <a className="nav__link" href="#">Link 1</a>
                <a className="nav__link" href="#">Link 2</a>
                <a className="nav__link" href="#">Link 3</a>
              </div>
            </li>
            <li className="nav__item">
              <NavLink
                to="/animals-voice/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default AppNav;

