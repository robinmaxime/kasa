import { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem";

/**
 * Composant affichant la galerie des logements disponibles
 */
function Gallery() {
    const [accomodation, setAccomodation] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("./logements.json");
                const data = await response.json();
                setAccomodation(data);
            } catch (err) {
                setIsError(true);
            }
        }
        loadData();
    }, []);

    return (
        <div className="gallery">
            {isError ? (
                <p>Erreur de chargement des données</p>
            ) : (
                accomodation.map((item) => (
                    <GalleryItem
                        key={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))
            )}
        </div>
    );
}

export default Gallery;
