import { useState } from "react";
import PropTypes from "prop-types";
/**
 * Composant créant une boite de texte ouvrable et fermable
 * @param {string} title titre de la boite
 * @param {string} description texte apparant quand la boite est ouverte
 */
function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapse">
            <div
                className="collapse__header"
                onClick={() => setIsOpen(isOpen ? false : true)}
            >
                <h2 className="collapse__title">{title}</h2>
                <img
                    className={`collapse__icon ${
                        isOpen ? "collapse__icon--reverse" : null
                    }`}
                    src="/assets/arrow.png"
                    alt="flêche"
                />
            </div>
            {isOpen ? (
                <p className="collapse__description">{description}</p>
            ) : null}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Collapse;
