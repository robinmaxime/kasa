import PropTypes from "prop-types";

/**
 * Composant affichant une card logement
 * @param {string} title description du logement
 * @param {string} cover url de l'image du logement
 */
function GalleryItem({ title, cover }) {
    return (
        <div className="gallery-item">
            <img className="gallery-item__img" src={cover} alt={title} />
            <h3 className="gallery-item__title">{title}</h3>
        </div>
    );
}

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
};

export default GalleryItem;
