import { Outlet, Link } from "react-router-dom";
import Header from "./AdHeaders";

export default function Admin() {
    return (
        <>
            <div className="container-fluid h-100 p-0 text-light"  style={{background: '#1C1C26'}}>
                <Header/>
                <div className="pt-3 d-flex">
                    <div className="col-2">
                        <ul className="fs-3 list-unstyled">
                            <li><Link to="/admin">Dashboard</Link></li>
                            <li><Link to="/adminUsers">users</Link></li>
                            <li><Link to="/adminProducts">Products</Link></li>
                            <li><Link to="/adminCategory">Category</Link></li>
                            <li><Link to="/adminMenu">Menu</Link></li>
                        </ul>
                    </div>
                    <div className="col-9 p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}