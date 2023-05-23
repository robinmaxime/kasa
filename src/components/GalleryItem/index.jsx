import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Composant affichant une card logement
 * @param {string} title description du logement
 * @param {string} cover url de l'image du logement
 */
function GalleryItem({ accomodationId, title, cover }) {
    return (
        <div className="gallery-item">
            <img className="gallery-item__img" src={cover} alt={title} />
            <Link to={`/accomodation/${accomodationId}`}>
                <h3 className="gallery-item__title">{title}</h3>
            </Link>
        </div>
    );
}

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
};

export default GalleryItem;
