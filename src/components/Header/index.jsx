import { Link } from "react-router-dom";
import "./styles.scss";

function Header() {
    return (
        <header>
            <h2>Kasa</h2>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
