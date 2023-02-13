import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./AdHeaders";

export default function Admin() {
    const [myMenu, setMyMenu] = useState([])
    function getDat() {
        fetch('http://localhost:6060/api/menus')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMyMenu(data.result)
            })
    }

    useEffect(() => { getDat() }, [])
    return (
        <>
            <div className="container-fluid h-100 p-0 m-0 text-light" style={{ backgroundColor: "#1C1C26" }}>
                <Header />
                <div className="d-flex h-100">
                    <div className="adminAside d-flex p-3 flex-column align-items-center justify-content-center" style={{ backgroundColor: '#292933', overflow: 'hidden' }}>
                        <ul className="fs-5 list-unstyled text-center d-flex flex-column gap-3 m-0 ">
                            {myMenu.map((e) => {
                                return (
                                    <>
                                        <li><Link to={e.link}>
                                            <div style={{ background: '#8883DF' }} className="px-3 py-2 rounded-5">
                                                <i className={`fs-3 bi bi-${e.iconName}`}></i>
                                            </div>
                                        </Link></li>
                                    </>
                                )
                            })}
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