import { useEffect, useState } from "react"



export default function CreateCategory() {
    const [myData, setMydata] = useState([])

    function getData() {
        fetch('http://localhost:6060/api/categories')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMydata(data.result);
            })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="container-fluid py-3">
                <div className="addCate-section py-2">
                    <div className="btn border text-light" style={{ backgroundColor: '#298430' }}>Add Category</div>
                </div>
                <span className="fs-3">Category list</span>
                <table className="table fs-2">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">CategoryName</th>
                            <th scope="col">CategoryLink</th>
                            <th scope="col">Үйлдэл</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.cateName}</td>
                                    <td>{el.cateLink}</td>
                                    <td className="d-flex gap-2">
                                        <div className="btn border bg-warning">Edit</div>
                                        <div className="btn border bg-danger">Delete</div>
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