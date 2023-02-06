

export default function Header(){
    return(
        <>
        <div className="container-fluid p-3 align-itmes-center d-flex justify-content-between">
            <div className="lgo col-2">
                <img src="" className="w-100"/>
            </div>
            <div className="search col-3 d-flex align-items-center" >
                <i className="bi bi-search fs-4"></i>
                <input placeholder="Search" className="border rounded-2 p-2 w-100 border-0 text-light fs-5" style={{background: 'transparent' , outline:'none'}}/>
            </div>
            <div className="navBar col-4">
                <img src=""/>
            </div>
        </div>
        </>
    )
}