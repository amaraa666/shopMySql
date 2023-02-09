import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AddProducts() {

    const navigate = useNavigate();

    const [myData, setMydata] = useState([])
    function getData() {
        fetch('http://localhost:6060/api/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setMydata(data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    }, []);

    function DeleteItem(id) {
        console.log(id)
        fetch(`http://localhost:6060/api/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                getData()
            })
    }

    function EditFile(id) {
        myData.map((e) => {
            if (e.productId === id) {
                navigate(`/createProduct/${id}`)
            }
            return myData
        })
    }

    return (
        <>
            <div className="container-fluid d-flex flex-column gap-2 rounded-3 text-light" style={{ background: '#2a2a34' }}>
                <div className="addProducts-section py-3">
                    <div className="btn border text-light" style={{ backgroundColor: '#8B86E2' }}><Link to="/createProduct">Add products</Link></div>
                </div>
                <table className="table fs-4 text-light">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Products Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sale</th>
                            <th scope="col">Category</th>
                            <th scope="col">Is Trending</th>
                            <th scope="col">Description</th>
                            <th scope="col">quantity</th>
                            <th scope="col">Img</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.productName}</td>
                                    <td>{el.price}</td>
                                    <td>{el.sale}</td>
                                    <td>{el.category}</td>
                                    <td>{el.isTrending ? <span className="badge bg-success">true</span> : <span className="badge bg-danger">false</span>}</td>
                                    <td>{el.desc}</td>
                                    <td>{el.quantity}</td>
                                    <td>
                                        <div className="col-3">
                                            <img src={el.imgs.coverImg} className="w-100" alt="img" />
                                        </div>
                                    </td>
                                    <td className="d-flex gap-2">
                                        <div className="btn text-light" style={{ background: '#E58554' }} onClick={() => EditFile(el.productId)}>Edit</div>
                                        <div className="btn text-light bg-danger" onClick={() => DeleteItem(el.productId)}>Delete</div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}