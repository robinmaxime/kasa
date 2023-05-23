import PropTypes from "prop-types";

/**
 * Composant affichant le profil d'un hébergeur
 * @param {string} name Nom de l'hébergeur
 * @param {string} photo url de la photo de l'hébergeur
 */
function Host({ name, photo }) {
    return (
        <div className="host">
            <span className="host__name">{name}</span>
            <img
                className="host__photo"
                src={photo}
                alt={`Portrait de ${name}`}
            />
        </div>
    );
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};

export default Host;
