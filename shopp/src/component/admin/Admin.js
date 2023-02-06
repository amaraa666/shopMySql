import { Outlet, Link } from "react-router-dom";
import Header from "./AdHeaders";

export default function Admin() {
    return (
        <>
            <div className="container-fluid h-100 p-0 text-light">
                <Header/>
                <div className="d-flex h-100">
                    <div className="adminAside d-flex p-3 flex-column align-items-center justify-content-center" style={{backgroundColor: '#292933'  , overflow:'hidden'}}>
                        <ul className="fs-5 list-unstyled text-center d-flex flex-column gap-3 m-0 ">
                            <li><Link to="/admin">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                    <i className="fs-3  bi bi-ui-checks-grid"></i>
                                    {/* Dashboard */}
                                </div>
                            </Link></li>
                            <li><Link to="/adminUsers">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                <i className="fs-3  bi bi-person-video2"></i>
                                    {/* Admin Users */}
                                </div>                                
                            </Link></li>
                            <li><Link to="/adminProducts">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                <i className="fs-3  bi bi-box-seam"></i>
                                    {/* Products */}
                                </div>    
                            </Link></li>
                            <li><Link to="/adminCategory">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                <i className="fs-3  bi bi-tags"></i>
                                    {/* Category */}
                                </div>
                            </Link></li>
                            <li><Link to="/adminMenu">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                <i className="fs-3  bi bi-file-earmark-text"></i>
                                    {/* Menu */}
                                </div>
                            </Link></li>
                            <li><Link to="/adminGeneral">
                                <div style={{background: '#8883DF'}} className="px-3 py-2 rounded-5">
                                <i className="fs-3  bi bi-gear"></i>
                                    {/* Settings */}
                                </div>
                            </Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-9 px-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}