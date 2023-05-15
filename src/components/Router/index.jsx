import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Accomodation from "../../pages/Accomodation";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Router() {
    return (
        <BrowserRouter>
            <div className="page-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/accomodation/:accomodationId"
                        element={<Accomodation />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
