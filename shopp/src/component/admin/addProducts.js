import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AddProducts(){

    const [myData , setMydata] = useState([])
    function getData(){
        fetch('http://localhost:6060/api/products')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.result);
            setMydata(data.result);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData();
    } , []);

    return(
        <>
        <div className="container-fluid d-flex flex-column gap-2">
            <div className="addProducts-section py-3">
                <div className="btn border text-light" style={{backgroundColor: '#3A1678'}}><Link to = "/createProduct">Add products</Link></div>
            </div>
            <table className="table fs-4">
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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {myData.map((el ,index)=>{
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.productName}</td>
                            <td>{el.price}</td>
                            <td>{el.sale}</td>
                            <td>{el.category}</td>
                            <td>{el.isTrending ? <span className="bagde bg-success">true</span>: <span className="badge bg-danger">false</span>}</td>
                            <td>{el.desc}</td>
                            <td>hi</td>
                            <td className="d-flex gap-2">
                                <div className="btn text-light bg-warning">Edit</div>
                                <div className="btn text-light bg-danger">Delete</div>
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