import { useContext } from "react";
import GalleryItem from "../GalleryItem";
import { AccomodationContext } from "../../context";

/**
 * Composant affichant la galerie des logements disponibles
 */
function Gallery() {
    const { accomodation, isError } = useContext(AccomodationContext);

    return (
        <div className="gallery">
            {isError ? (
                <p>Erreur de chargement des données</p>
            ) : (
                accomodation.map((item) => (
                    <GalleryItem
                        key={`logement-${item.id}`}
                        accomodationId={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))
            )}
        </div>
    );
}

export default Gallery;
