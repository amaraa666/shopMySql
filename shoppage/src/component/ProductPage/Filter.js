import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/Data.Context";
import { FilteredData } from "../context/filteredData";


export default function MyFilter() {
    const [myCateData, setMyCateData] = useState([])
    const { myData, setMyData } = useContext(DataContext)
    const { myDataFilter, setMyDataFilter } = useContext(FilteredData)

    function getData() {
        fetch('http://localhost:6060/api/categories')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result)
                setMyCateData(data.result)

            })
    }
    function myColor(colorVal) {
        console.log(colorVal)
        const arr = myData.filter((e) => {
            if (e.color === colorVal) {
                return e
            };
        });
        setMyData(arr);
    }
    useEffect(() => { getData() }, [])
    return (
        <>
            <div className="container-fluid d-flex flex-column p-2 " >
                <div className="category">
                    <h5 className="text-center">Category</h5>
                    {myCateData.map((e) => {
                        return (
                            <label className="d-flex">
                                <input type='checkBox' />
                                <span className="p-1 text-center" style={{ color: '#B3B3B1' }}>{e.cateName}</span>
                            </label>
                        )
                    })}
                </div>
                <div className="brand-section">

                </div>
                <h4>Colors</h4>
                <div className="color-section d-flex gap-2 flex-wrap">
                    <div className="rounded-5 bg-danger p-2" onClick={() => myColor('red')}></div>
                    <div className="rounded-5 bg-warning p-2" onClick={() => myColor('yellow')}></div>
                    <div className="rounded-5 bg-success p-2" onClick={() => myColor('green')}></div>
                    <div className="rounded-5 bg-dark p-2" onClick={() => myColor('black')}></div>
                    <div className="rounded-5 bg-light border p-2" onClick={() => myColor('white')}></div>
                    <div className="rounded-5 bg-secondary p-2" onClick={() => myColor('gray')}></div>
                    <div className="rounded-5 bg-primary p-2" onClick={() => myColor('blue')}></div>
                </div>
            </div>
        </>
    )
}