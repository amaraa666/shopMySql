import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <div className="footer container-fluid bg-dark text-white d-flex flex-column align-items-center py-5">
                <div className=" col-11 footer-nav d-flex justify-content-between">
                    <div className="col-2 d-flex flex-column align-items-center">
                        <span>Title</span>
                        <ul className="footer-list d-flex list-unstyled flex-column text-white">
                            <li>
                                <Link to=''>Home</Link>
                            </li>
                            <li>
                                <Link to=''>Category</Link>
                            </li>
                            <li>
                                <Link to=''>Menu</Link>
                            </li>
                            <li>
                                <Link to=''>About us</Link>
                            </li>
                            <li>
                                <Link to=''>Neg ym</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <span>Title</span>
                        <ul className="footer-list d-flex list-unstyled flex-column text-white">
                            <li>
                                <Link to=''>Home</Link>
                            </li>
                            <li>
                                <Link to=''>Category</Link>
                            </li>
                            <li>
                                <Link to=''>Menu</Link>
                            </li>
                            <li>
                                <Link to=''>About us</Link>
                            </li>
                            <li>
                                <Link to=''>Neg ym</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <span>Title</span>
                        <ul className="footer-list d-flex list-unstyled flex-column text-white">
                            <li>
                                <Link to=''>Home</Link>
                            </li>
                            <li>
                                <Link to=''>Category</Link>
                            </li>
                            <li>
                                <Link to=''>Menu</Link>
                            </li>
                            <li>
                                <Link to=''>About us</Link>
                            </li>
                            <li>
                                <Link to=''>Neg ym</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <span>Title</span>
                        <ul className="footer-list d-flex list-unstyled flex-column text-white">
                            <li>
                                <Link to=''>Home</Link>
                            </li>
                            <li>
                                <Link to=''>Category</Link>
                            </li>
                            <li>
                                <Link to=''>Menu</Link>
                            </li>
                            <li>
                                <Link to=''>About us</Link>
                            </li>
                            <li>
                                <Link to=''>Neg ym</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-evenly col-11 py-3 ">
                    <div className="left-side col-5">
                        <div className='d-flex col-9 rounded-5 overflow-hidden'>
                            <div className='search-section d-flex rounded-5 align-items-center px-3 overflow-hidden bg-white col-10 gap-2'>
                                <input className='rounded-3 col border-0 p-2' style={{ outline: 'none' }} placeholder='Search something you want' />
                            </div>
                        </div>
                    </div>
                    <div className="right-side col-5">
                        <div className='d-flex border rounded-5 overflow-hidden' style={{ backgroundColor: '#C9F953' }}>
                            <div className='search-section d-flex rounded-5 align-items-center px-3 overflow-hidden bg-white col-10 gap-2' style={{ border: '1px solid #C9F953' }}>
                                <i className='bi bi-search text-dark'></i>
                                <input className='rounded-3 col border-0 p-2' style={{ outline: 'none' }} placeholder='Search something you want' />
                            </div>
                            <div className='btn border-0 d-flex align-items-center' style={{ backgroundColor: '#C9F953' }}>Search</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}