import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

/**
 * Composant affichant la page d'accueil
 * @return JSX.element
 */
function Home() {
    return (
        <div className="home">
            <Banner
                image="banner1240w"
                title="Chez vous, partout et ailleurs"
                alt="Montagne au bord de l'eau"
            />
            <Gallery />
        </div>
    );
}

export default Home;
