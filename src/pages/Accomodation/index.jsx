import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Collapse from "../../components/Collapse/index.jsx";
import Tags from "../../components/Tags/index.jsx";
import Stars from "../../components/Stars/index.jsx";
import Host from "../../components/Host/index.jsx";
import Error from "../Error/index.jsx";
import { AccomodationContext } from "../../context.jsx";
import Slideshow from "../../components/Slideshow/index.jsx";
import Loader from "../../components/Loader/index.jsx";

function Accomodation() {
    const navigate = useNavigate();
    //récupère dans l'url l'id passé en paramètre
    const { accomodationId } = useParams();
    //récupère l'ensemble des données des logements depuis le contexte
    const { accomodation, isError, isLoading } =
        useContext(AccomodationContext);

    //cherche l'élément correspond à l'ID dans l'ensemble des logements (soit objet, soit undefined)
    const data = accomodation.find((item) => {
        return item.id === accomodationId;
    });

    if (isLoading) {
        return (
            <div className="accomodation">
                <Loader />
            </div>
            //{isLoading ? <>Ton animation</> : return}
        );
    } else if (data === undefined || isError) {
        navigate("/404");
        //<Error />;
        //{!data ? navigate("/404") : <>Composant accomodation.</>}
    } else {
        return (
            <div className="accomodation">
                <Slideshow pictures={data.pictures} />
                <div className="accomodation__info">
                    <div className="accomodation__title">
                        <h1>{data.title}</h1>
                        <p>{data.location}</p>
                        <Tags list={data.tags} />
                    </div>

                    <div className="accomodation__host">
                        <Host name={data.host.name} photo={data.host.picture} />
                        <Stars rating={parseInt(data.rating)} />
                    </div>
                </div>
                <div className="accomodation__description">
                    <Collapse
                        title="Description"
                        description={data.description}
                    />
                    <Collapse
                        title="Équipements"
                        description={data.equipments.map((item, index) => (
                            <p key={`equipments-${index}`}>{item}</p>
                        ))}
                    />
                </div>
            </div>
        );
    }
}

export default Accomodation;
