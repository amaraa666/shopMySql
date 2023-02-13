import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <div className="container-fluid d-flex border-top border-1 border-dark p-3 mt-3 col-11 ">
                <div className="col-6">
                    <ul className="headerNav d-flex list-unstyled gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/aboutUs">About us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
                <div className="col-3">

                </div>
            </div>
        </>
    )
}