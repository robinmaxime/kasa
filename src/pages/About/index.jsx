import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

/**
 * Composant affichant la page "à propos"
 */
function About() {
    return (
        <main>
            <Banner image="about1240w" alt="Montagne bordée par une rivière" />
            <div className="about__description">
                <Collapse
                    key="collapse1"
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                <Collapse
                    key="collapse2"
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse
                    key="collapse3"
                    title="Service"
                    description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapse
                    key="collapse4"
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </main>
    );
}

export default About;
