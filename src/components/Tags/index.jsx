import PropTypes from "prop-types";

/**
 * Composant qui affiche une liste de tags en ligne
 * @param {array} list tableau de tags de type string
 */
function Tags({ list }) {
    return (
        <ul className="tags">
            {list.map((tag, index) => (
                <li className="tags__item" key={`tag-${index}`}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}

Tags.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
