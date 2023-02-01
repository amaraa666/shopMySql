import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="container-fluid bg-dark text-light p-2">
                <div className="d-flex justify-content-between">
                    <div className="col-2">
                        <h3 className="text-center">Logo</h3>
                    </div>
                    <div className="col-3 d-flex  align-items-center">
                        <ul className="d-flex list-unstyled m-0 gap-3">
                            <li>Home</li>
                            <li>Menu</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li><Link to = "/adminlogin">Sign In</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}