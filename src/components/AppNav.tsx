import { useState, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./AppNav.css";

const AppNav = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu)
      };
      const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
          setShowMenu(false);
        }
      };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
          <h1>Animal's Voice</h1>
        </NavLink>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                O nas
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/actions" className="nav__link" onClick={closeMenuOnMobile}>
                Nasze działania
              </NavLink>
            </li>
            <li className="nav__item">
              {/* <NavLink to="/about-us" className="nav__link" onClick={closeMenuOnMobile}> */}
                Polecamy
              {/* </NavLink> */}
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link" onClick={closeMenuOnMobile}>
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

{
  /* <FontAwesomeIcon icon={icon} className="menuBars" onClick={() => setMenuOpen(!menuOpen)} />
        <CSSTransition
          in={menuOpen}
          nodeRef={nodeRef}
          timeout={0}
          classNames="mainNavList"
          unmountOnExit
          onEnter={() => setIcon(faXmark)}
          onExit={() => setIcon(faBars)}>
          <ul ref={nodeRef} className="mainNavList" onMouseLeave={() => setMenuOpen(false)}>
              <li className="mainNavItem">
                  o nas
              </li>
              <li className="mainNavItem">
                  nasze działania
              </li>
              <li className="mainNavItem">
                  polecamy
              </li>
              <li className="mainNavItem">
                  kontakt
              </li>
          </ul>
        </CSSTransition> */
}
