import { useEffect, useState } from 'react'
import UseFetch from '../../customHook/UseFetch';

export default function MyProduct() {
    const [myData, setMyData] = useState([])
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
    const myFav = (id) => {
        myData.map((el) => {
            if (el.productId === id) {
                el.isFav = !el.isFav
                getData()
            }
        })
    }
    // const { response, error } = UseFetch('http://localhost:6060/api/products', {})
    return (
        <>
            <div className='container-fluid d-flex'>
                <div className='col-3'>

                </div>
                <div className="col-9 d-flex flex-wrap">
                    {myData?.map((pro) => {
                        return (
                            <div className="myProductCard col-3 p-2">
                                <div className='d-flex gap-2 flex-column border rounded-4 position-relative' style={{ boxShadow: '0 4px 8px  rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                                    <div className='heart-icon position-absolute rounded-5 px-2 py-1 d-flex align-items-center' style={{ backgroundColor: 'rgba(255,255,255,1)' }} onClick={() => myFav(pro.productId)}>
                                        <i className={`bi bi-${pro.isFav ? 'heart-fill text-danger' : 'heart twhite'}`}></i>
                                    </div>
                                    <div className='producImg  rounded-4 overflow-hidden ratio ratio-1x1'>
                                        <img src={pro.imgs.coverImg} alt='img' className='w-100 h-100' style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className='product-title p-2 d-flex flex-column'>
                                        <span>{pro.productName}</span>
                                        <h4>{pro.price}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}