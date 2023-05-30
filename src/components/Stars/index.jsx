import PropTypes from "prop-types";

/**
 * Composant créant des étoiles en fonction de sa notation
 * @param {number} rating un nombre de 0 à 5 correspondant au nombre d'étoile
 * @return JSX.element
 */
function Stars({ rating }) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <img
                className="stars__item"
                src={`/assets/star-${i < rating ? "active" : "inactive"}.png`}
                alt={`étoile ${i < rating ? "pleine" : "vide"}`}
            />
        );
    }

    return <div className="stars">{stars}</div>;
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Stars;
