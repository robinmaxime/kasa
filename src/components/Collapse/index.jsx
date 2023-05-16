import { useState } from "react";

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div
                className="collapse__header"
                onClick={() => setIsOpen(isOpen ? false : true)}
            >
                <h2 className="collapse__title">{title}</h2>
                <img
                    className={
                        isOpen
                            ? "collapse__icon collapse__icon--reverse"
                            : "collapse__icon"
                    }
                    src="./assets/arrow.png"
                    alt="flêche"
                />
            </div>
            {isOpen ? (
                <p className="collapse__description">{description}</p>
            ) : null}
        </div>
    );
}

export default Collapse;
