import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Composant affichant un carroussel d'image
 * @param {array} pictures tableau d'url d'image
 * @return JSX.element
 */
function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="slideshow">
            <img className="slideshow__img" src={pictures[index]} alt="" />
            {pictures.length > 1 ? (
                <div className="slideshow__navigation">
                    <img
                        className="slideshow__left"
                        onClick={() =>
                            setIndex(
                                index === 0 ? pictures.length - 1 : index - 1
                            )
                        }
                        src="/assets/slideshow.png"
                        alt="précédente"
                    />
                    <img
                        className="slideshow__right"
                        onClick={() =>
                            setIndex(
                                index === pictures.length - 1 ? 0 : index + 1
                            )
                        }
                        src="/assets/slideshow.png"
                        alt="suivante"
                    />
                </div>
            ) : null}
            {pictures.length > 1 ? (
                <p className="slideshow__numerotation">
                    {index + 1}/{pictures.length}
                </p>
            ) : null}
        </div>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default Slideshow;
