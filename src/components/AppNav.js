import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./AppNav.css";

const AppNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [icon, setIcon] = useState(faBars);
    const nodeRef = useRef(null);

    return (
        <header className="App-header">
        <h1>Animal's Voice</h1>
        <nav className="mainNav">
        <FontAwesomeIcon icon={icon} className="menuBars" onClick={() => setMenuOpen(!menuOpen)} />
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
                  home
              </li>
              <li className="mainNavItem">
                  wydarzenia
              </li>
              <li className="mainNavItem">
                  materiały
              </li>
              <li className="mainNavItem">
                  kontakt
              </li>
          </ul>
        </CSSTransition>
      </nav>
        </header>
    );
  }
  
  export default AppNav;

