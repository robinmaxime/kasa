import PropTypes from "prop-types";

function Banner({ image, title, alt }) {
    return (
        <div className="banner">
            <picture>
                <source
                    srcSet={`./assets/banner/${image}.webp`}
                    type="image/webp"
                />
                <img
                    className="banner__img"
                    src={`./assets/banner/${image}.jpg`}
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
