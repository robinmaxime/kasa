import PropTypes from "prop-types";

/**
 * Composant créant des étoiles en fonction de sa notation
 * @param {number} rating un nombre de 0 à 5 correspondant au nombre d'étoile
 */
function Stars({ rating }) {
    let full = [];
    let empty = [];
    for (let i = 0; i < rating; i++) {
        full.push(
            <img
                key={`star-${i + 1}`}
                className="stars__item"
                src="/assets/star-active.png"
                alt="étoile pleine"
            />
        );
    }
    for (let i = rating; i < 5; i++) {
        empty.push(
            <img
                key={`star-${i + 1}`}
                className="stars__item"
                src="/assets/star-inactive.png"
                alt="étoile vide"
            />
        );
    }
    return (
        <div className="stars">
            {full}
            {empty}
        </div>
    );
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Stars;
