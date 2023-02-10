import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <div className="container-fluid d-flex border-top border-1 border-dark p-3 mt-3 col-11 ">
                <div className="col-6">
                    <ul className="d-flex list-unstyled gap-5">
                        <li><Link to="/"></Link>Home</li>
                        <li><Link to="/"></Link>Menu</li>
                        <li><Link to="/"></Link>Contact us</li>
                        <li><Link to="/"></Link>About us</li>
                        <li><Link to="/"></Link>Products</li>
                    </ul>
                </div>
                <div className="col-3">

                </div>
            </div>
        </>
    )
}