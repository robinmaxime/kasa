import { Link } from "react-router-dom";

/**
 * Composant affichant un message d'erreur 404
 * @return JSX.element
 */
function Error() {
    return (
        <div className="error">
            <p className="error__type">404</p>
            <p className="error__description">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
