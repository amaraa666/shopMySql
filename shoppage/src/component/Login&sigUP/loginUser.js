


export default function LoginUser({ callModal, UserLog }) {
    const ds = callModal ? 'flex' : 'none';
    return (
        <>
            <div className="container-fluid position-absolute modal justify-content-center align-items-center" style={{ display: ds, backgroundColor: 'rgba(255,255,255,0.7)' }} onClick={UserLog}>
                <div className="bg-white border rounded-4 col-md-4 col-6 p-4" onClick={(e) => e.stopPropagation()}>
                    <h4>Нэвтрэх</h4>
                    <form className="d-flex flex-column gap-3">
                        <label className="d-flex flex-column">
                            <span>Username</span>
                            <input type='text' placeholder="UserName" className="form-control" />
                        </label>
                        <label className="d-flex flex-column">
                            <span>Password</span>
                            <input placeholder="password" type='password' className="form-control" />
                        </label>
                        <div className="d-flex gap-3 justify-content-center pt-3">
                            <div className="btn" style={{ backgroundColor: '#C9F953' }}>Login</div>
                            <div className="btn" style={{ backgroundColor: '#B3B3B1' }}>Sign Up</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}