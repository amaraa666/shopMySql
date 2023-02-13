
import { useState, useEffect } from 'react';





export default function TrendingProduct() {
    const [myData, setmyData] = useState([])

    const getData = () => {
        fetch('http://localhost:6060/api/products')
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setmyData(data.result)
            })
    }
    useEffect(() => {
        getData();
    }, [])


    const myFav = (id) => {
        myData.map((el) => {
            if (el.productId === id) {
                console.log(el)
                el.isFav = !el.isFav
                // console.log(myData)
            }
        })
    }
    return (
        <>
            <div className='d-flex flex-wrap py-3'>
                {myData?.map((el) => {
                    if (el.isTrending === true) {
                        return (
                            <>
                                <div className="myProductCard col-3 p-2">
                                    <div className='d-flex gap-2 flex-column border rounded-4 position-relative' style={{ boxShadow: '0 4px 8px  rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                                        <div className='heart-icon position-absolute rounded-5 px-2 py-1 d-flex align-items-center' style={{ backgroundColor: 'rgba(255,255,255,1)' }} onClick={() => myFav(el.productId)}>
                                            <i className={`bi bi-${el.isFav ? 'heart-fill text-danger' : 'heart twhite'}`}></i>
                                        </div>
                                        <div className='producImg  rounded-4 overflow-hidden ratio ratio-1x1'>
                                            <img src={el.imgs.coverImg} alt='img' className='w-100 h-100' style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className='product-title p-2 d-flex flex-column'>
                                            <span>{el.productName}</span>
                                            <h4>{el.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )
}