import { useEffect, useState } from "react"



export default function AddUsers() {
    const [myData, setMyData] = useState([]);
    function getData() {
        fetch('http://localhost:6060/api/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setMyData(data.result);
            });
    };
    useEffect(() => { getData() }, []);
    return (
        <>
            <div className="container-fluid d-flex flex-column gap-5 rounded-3 py-3 px-0 " style={{ backgroundColor: "#2a2a34" }}>
                <div className="text-center py-2 border-bottom">
                    <h4 className="col-4">Admin members status</h4>
                </div>
                {myData.map((dt, index) => {
                    return (
                        <div className="adminMemberCard d-flex">
                            <div className="col-1 border-end d-flex justify-content-center align-items-center">
                                <span className="fs-4 p-3">{index + 1}</span>
                            </div>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <div className="col-4">
                                    <img src={dt.details.img} className="w-100" alt="img" />
                                </div>
                                <div className="aboutMember d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <span style={{ color: '#60616B' }}>Name</span>
                                        <h5 className="m-0">{dt.details.firstName}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="d-flex flex-column">
                                    <span style={{ color: '#60616B' }}>Email</span>
                                    <div className="d-flex">
                                        <div className="d-block">
                                            <span className="p-1 rounded-5" style={{ backgroundColor: 'blue' }}></span>
                                        </div>
                                        <h5 className="m-0">{dt.details.email}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 d-flex gap-3 justify-content-between align-items-center">
                                <div className="d-flex flex-column">
                                    <span style={{ color: '#60616B' }}>Task to Do</span>
                                    <span>Hi</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fs-5" style={{ color: '#60616B' }}>Details..</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}