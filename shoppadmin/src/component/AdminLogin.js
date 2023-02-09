

export default function AdminLogin(){
    return(
        <>
        <div className="container-fluid d-flex align-items-center jsutify-content-center" style={{backgroundColor: 'rgba(255,255,255,0.6)'}}>
            <div className="col-5 p-2">
                <div className="header">
                    <h4>Admin Login</h4>
                </div>
                <div className="body">
                    <input className="p-2" placeholder="username" type='text'/>
                    <input className="p-2" placeholder="password" type='password'/>
                    <div className="btn border">Log in</div>
                </div>
                <div className="footer">
                    <div className="btn border">not Admin?</div>
                    <div className="btn border">back home</div>
                </div>
            </div>
        </div>
        </>
    )
}