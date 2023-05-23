import PropTypes from "prop-types";

/**
 * Composant affichant une bannière image avec un texte au centre
 * @param {string} image nom du fichier sans extension dans le dossier asset/banner
 * @param {string} title titre optionnel s'affichant au centre de l'image
 * @param {string} alt description de l'image
 */
function Banner({ image, title, alt }) {
    return (
        <div className="banner">
            <picture>
                <source
                    srcSet={`/assets/banner/${image}.webp`}
                    type="image/webp"
                />
                <img
                    className="banner__img"
                    src={`/assets/banner/${image}.jpg`}
                    alt={alt}
                />
            </picture>
            <h1 className="banner__title">{title}</h1>
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    alt: PropTypes.string.isRequired,
};

Banner.defaultProps = {
    title: "",
};

export default Banner;
