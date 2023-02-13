
import { Outlet } from "react-router-dom"
import Header from "./GlobalSections/Header"
import NavBar from "./GlobalSections/NavBar"
import Footer from "./GlobalSections/Footer"
export default function PageLayOut() {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
