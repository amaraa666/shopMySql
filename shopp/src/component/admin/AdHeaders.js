

export default function Header(){
    return(
        <>
        <div className="container-fluid p-3 d-flex justify-content-between">
            <div className="lgo col-2">
                <img src="" className="w-100"/>
            </div>
            <div className="search col-3">
                <input placeholder="Search" className="border rounded-2 p-1 w-75"/>
            </div>
            <div className="navBar col-4">
                <ul className="d-flex m-0 gap-2 list-unstyled">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        </>
    )
}