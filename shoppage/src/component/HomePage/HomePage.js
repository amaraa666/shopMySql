import TrendingProduct from "./TrendingProduct";
import AboutShop from "./AboutShop";



export default function HomePage() {
    return (
        <>
            <div className="container-fluid col-11">
                <AboutShop />
                <div className="d-flex flex-column">
                    <span className="fs-3 text-center">Trending Product</span>
                    <TrendingProduct />
                </div>
            </div>
        </>
    )
}
