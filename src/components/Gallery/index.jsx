import { useContext } from "react";
import GalleryItem from "../GalleryItem";
import { AccomodationContext } from "../../context";
import Loader from "../Loader";

/**
 * Composant affichant la galerie des logements disponibles
 */
function Gallery() {
    const { accomodation, isError, isLoading } =
        useContext(AccomodationContext);
    if (isLoading) {
        return (
            <div className="gallery gallery--loading">
                <Loader />
            </div>
        );
    } else if (isError) {
        return (
            <div className="gallery">
                <p>Erreur de chargement des données</p>
            </div>
        );
    } else {
        return (
            <div className="gallery">
                {accomodation.map((item) => (
                    <GalleryItem
                        key={`logement-${item.id}`}
                        accomodationId={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </div>
        );
    }
}

export default Gallery;
