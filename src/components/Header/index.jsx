import { NavLink } from "react-router-dom";
import logo210w from "../../assets/logo/logo210w.png";
import logo420w from "../../assets/logo/logo420w.png";

function Header() {
    return (
        <header class="header">
            <img
                class="header__img"
                src={logo210w}
                alt="Logo de Kasa"
                srcset={`${logo420w} 2x`}
            />
            <nav class="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
