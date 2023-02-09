
export default function Header() {
    return (
        <>
            <div className="container-fluid p-2">
                <div className='d-flex justify-content-between'>
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
                        <div className='btn border-0' style={{ backgroundColor: '#C9F953' }}>Search</div>
                    </div>
                    <div className='col-1 d-flex gap-4 align-items-center fs-5 text-dark'>
                        <i className='bi bi-person'></i>
                        <i className='bi bi-heart'></i>
                        <i className='bi bi-cart'></i>
                    </div>
                </div>
            </div>
        </>
    )
}