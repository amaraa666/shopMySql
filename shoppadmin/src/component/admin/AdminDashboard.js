

export default function Dashboard(){
    return(
        <>
        <div className="container-fluid d-flex justify-content-between">
            <div className="col-4 p-4 rounded-4 d-flex flex-column gap-4" style={{background: '#292933'}}>
                <h3 className="text-center">Цэс</h3>
                <div className="product-show p-2 rounded-4" style={{background: '#383844'}}>
                    <div className="title-showUsers text-center">
                        <span className="fs-4 fw-bold">Users statics</span>
                    </div>
                    <div className="body-showUsers d-flex jsutify-content-between p-2">
                        <div className="col-3">
                            <span className="rounded-5 d-flex align-items-center justify-content-center px-2 py-3 w-75 h-75" style={{backgroundColor: '#A477F8' , boxShadow: '0px 1px 4px #fff'}}>
                                <i className="bi bi-person-heart fs-3"></i>
                            </span>
                        </div>
                        <div className="col-8">
                            <div className="UserNumber" style={{color: '#9898A4' , fontSize: '1rem'}}>Хэрэглэгчдын тоо</div>
                            <span className="fs-4 text-light fw-bold">123</span>
                        </div>
                    </div>
                </div>
                <div className="product-show p-2 rounded-4" style={{background: '#383844'}}>
                    <div className="title-showUsers text-center">
                        <span className="fs-4 fw-bold">Products statics</span>
                    </div>
                    <div className="body-showUsers d-flex jsutify-content-between p-2">
                        <div className="col-3">
                            <span className="rounded-5 d-flex align-items-center justify-content-center px-2 py-3 w-75 h-75" style={{backgroundColor: '#E58554' ,boxShadow: '0px 1px 4px #fff'}}>
                                <i className="bi bi-bag-heart-fill fs-3"></i>
                            </span>
                        </div>
                        <div className="col-8">
                            <div className="ProductNumber" style={{color: '#9898A4' , fontSize: '1rem'}}>Нийт барааны тоо</div>
                            <span className="fs-4 text-light fw-bold">1989392</span>
                        </div>
                    </div>
                </div>
                <div className="product-show p-2 rounded-4" style={{background: '#383844'}}>
                    <div className="title-showUsers text-center">
                        <span className="fs-4 fw-bold">Admins statics</span>
                    </div>
                    <div className="body-showUsers d-flex jsutify-content-between p-2">
                        <div className="col-3">
                            <span className="rounded-5 d-flex align-items-center justify-content-center px-2 py-3 w-75 h-75" style={{backgroundColor: '#F0BC43' ,boxShadow: '0px 1px 4px #fff'}}>
                                <i className="bi bi-person-badge-fill fs-3"></i>
                            </span>
                        </div>
                        <div className="col-8">
                            <div className="UserNumber" style={{color: '#9898A4' , fontSize: '1rem'}}>Admin Хэрэглэгчдын тоо</div>
                            <span className="fs-4 text-light fw-bold">6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-7">

            </div>
        </div>
        </>
    )
}