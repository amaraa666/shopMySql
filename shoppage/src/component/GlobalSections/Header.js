import { useContext, useState } from "react";
import { ArrContext } from "../context/Context";
import LoginUser from "../Login&sigUP/loginUser";
export default function Header() {
    const { myFavItem } = useContext(ArrContext);
    const [callModal, setCallModal] = useState(false);
    function UserLog() {
        setCallModal(!callModal)
    }
    return (
        <>
            <LoginUser callModal={callModal} UserLog={UserLog} />
            <div className="container-fluid px-2 py-3">
                <div className='d-flex justify-content-between col-11'>
                    <div className='col-3'>
                        <div className='d-flex gap-5 align-items-center'>
                            <h3>Logo</h3>
                            <div className='d-flex gap-2'>
                                <i className='bi bi-geo-alt-fill'></i>
                                <span>Mark</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 d-flex border rounded-5 overflow-hidden' style={{ backgroundColor: '#C9F953' }}>
                        <div className='search-section d-flex rounded-5 align-items-center px-3 overflow-hidden bg-white col-10 gap-2' style={{ border: '1px solid #C9F953' }}>
                            <i className='bi bi-search'></i>
                            <input className='rounded-3 col border-0' style={{ outline: 'none' }} placeholder='Search something you want' />
                        </div>
                        <span className='d-flex align-items-center border-0' style={{ backgroundColor: '#C9F953' }}>Search</span>
                    </div>
                    <div className='col-xl-1 col-2 d-flex gap-md-5 gap-4 align-items-center fs-5 text-dark'>
                        <i className='bi bi-person fs-4' onClick={UserLog}></i>
                        <i className='bi bi-heart fs-4 position-relative'>
                            <span className="myFavValue position-absolute px-2 text-center rounded-5 text-dark">{myFavItem.length}</span>
                        </i>
                        <i className='bi bi-cart position-relative fs-4'>
                            <span className="myCartValue position-absolute px-2 text-center top-0 rounded-5 text-dark">0</span>
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}