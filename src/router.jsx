import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import Error from "./pages/Error";
import MainLayout from "./layouts/MainLayout";

/**
 * Router principal de l'application
 * @return JSX.element
 */
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/accomodation/:accomodationId"
                        element={<Accomodation />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
