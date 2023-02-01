import { Routes , Route, Outlet , Link} from "react-router-dom";


export default function Admin(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <ul className="fs-3 list-unstyled">
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/adminUsers">users</Link></li>
                        <li><Link to="/adminProducts">Products</Link></li>
                    </ul>
                </div>
                <div className="col-10">
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}