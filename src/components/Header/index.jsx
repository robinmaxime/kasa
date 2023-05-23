import { NavLink } from "react-router-dom";

/**
 * Composant affichant l'entête de page (logo et menu)
 */
function Header() {
    return (
        <header className="header">
            <NavLink to="/">
                <img
                    className="header__img"
                    src="/assets/logo/logo210w.png"
                    alt="Logo de Kasa"
                    srcSet="/assets/logo/logo420w.png 2x"
                />
            </NavLink>
            <nav className="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
