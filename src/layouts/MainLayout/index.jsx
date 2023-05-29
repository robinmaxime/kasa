import { AccomodationProvider } from "../../context";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

/**
 * Composant de mise en page principale
 * @return JSX.element
 */
function MainLayout() {
    return (
        <div>
            <div className="page-container">
                <Header />
                <AccomodationProvider>
                    <Outlet />
                </AccomodationProvider>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
