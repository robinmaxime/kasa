import { createContext, useState, useEffect } from "react";

export const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
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
        <AccomodationContext.Provider value={{ accomodation, isError }}>
            {children}
        </AccomodationContext.Provider>
    );
};
