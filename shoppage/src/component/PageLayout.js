
import { Outlet } from "react-router-dom";
import Header from "./GlobalSections/Header";
import NavBar from "./GlobalSections/NavBar";
import Footer from "./GlobalSections/Footer";
import { useState } from "react";
import { ArrContext } from "./context/Context";
import { DataContext } from "./context/Data.Context";
import { useEffect } from "react";
import { FilteredData } from "./context/filteredData";
export default function PageLayOut() {
    const [myFavItem, setMyFavItem] = useState([])
    const [myData, setMyData] = useState([])
    const [myDataFilter, setMyDataFilter] = useState([])

    function getData() {
        fetch('http://localhost:6060/api/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyData(data.result);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="container-fluid p-0">
                <DataContext.Provider value={{ myData, setMyData }}>
                    <FilteredData.Provider value={{ myDataFilter, setMyDataFilter }}>
                        <ArrContext.Provider value={{ myFavItem, setMyFavItem }}>
                            <Header />
                            <NavBar />
                            <Outlet />
                            <Footer />
                        </ArrContext.Provider>
                    </FilteredData.Provider>
                </DataContext.Provider>
            </div>
        </>
    )
}
