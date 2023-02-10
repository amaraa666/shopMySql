import Footer from "../GlobalSections/Footer";
import Header from "../GlobalSections/Header";
import TrendingProduct from "./TrendingProduct";
import AboutShop from "./AboutShop";
import NavBar from "../GlobalSections/NavBar";


export default function HomePage() {
    return (
        <>
            <div className="container-fluid col-11">
                <Header />
                <NavBar />
                <AboutShop />
                <div className="d-flex flex-column">
                    <span className="fs-3 text-center">Trending Product</span>
                    <TrendingProduct />
                </div>
            </div>
            <Footer />
        </>
    )
}