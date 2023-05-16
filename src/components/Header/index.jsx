import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img
                className="header__img"
                src="./assets/logo/logo210w.png"
                alt="Logo de Kasa"
                srcSet="./assets/logo/logo420w.png 2x"
            />
            <nav className="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
