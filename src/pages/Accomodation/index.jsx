import { useParams } from "react-router-dom";
import { useContext } from "react";
import Collapse from "../../components/Collapse/index.jsx";
import Tags from "../../components/Tags/index.jsx";
import Stars from "../../components/Stars/index.jsx";
import Host from "../../components/Host/index.jsx";
import Error from "../Error/index.jsx";
import { AccomodationContext } from "../../context.jsx";

function Accomodation() {
    //récupère dans l'url l'id passé en paramètre
    const { accomodationId } = useParams();
    //récupère l'ensemble des données des logements depuis le contexte
    const { accomodation, isError } = useContext(AccomodationContext);
    //cherche l'élément correspond à l'ID dans l'ensemble des logements (soit objet, soit undefined)
    const data = accomodation.find((item) => {
        return item.id === accomodationId;
    });

    return data === undefined || isError ? (
        <Error />
    ) : (
        <div className="accomodation">
            <img
                className="accomodation__carousel"
                src={data.cover}
                alt={data.title}
            />
            <div className="accomodation__info">
                <div className="accomodation__title">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <Tags list={data.tags} />
                </div>

                <div>
                    <Host name={data.host.name} photo={data.host.picture} />
                    <Stars rating={parseInt(data.rating)} />
                </div>
            </div>
            <div className="accomodation__description">
                <Collapse title="Description" description={data.description} />
                <Collapse
                    title="Équipements"
                    description={data.equipments.map((item) => (
                        <p>{item}</p>
                    ))}
                />
            </div>
        </div>
    );
}

export default Accomodation;
