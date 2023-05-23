import { createContext, useState, useEffect } from "react";

export const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
    const [accomodation, setAccomodation] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("./logements.json");
                const data = await response.json();
                setAccomodation(data);
            } catch (err) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        setIsLoading(true);
        loadData();
    }, []);

    return (
        <AccomodationContext.Provider
            value={{ accomodation, isError, isLoading }}
        >
            {children}
        </AccomodationContext.Provider>
    );
};
