import { DataContext } from '../context/Data.Context';
import { useContext, useState } from 'react';
import { ArrContext } from '../context/Context';





export default function TrendingProduct() {
    const { myFavItem, setMyFavItem } = useContext(ArrContext);
    const { myData } = useContext(DataContext);


    const myFav = (id) => {
        myData.map((el) => {
            if (el.productId === id) {
                if (el.isFav === true) {
                    el.isFav = false
                    if (myFavItem.includes(el)) {
                        const myArr = [...myFavItem];
                        myArr.splice(myFavItem.indexOf(el), 1);
                        setMyFavItem(myArr);
                    }
                } else {
                    el.isFav = true
                    if (!myFavItem.includes(el)) {
                        const myArr = [...myFavItem];
                        myArr.push(el);
                        setMyFavItem(myArr);
                    }
                }
            }
        })
    }

    const [mySlider, setMySlider] = useState()
    const [myIndex, setmyIndex] = useState(myData)
    return (
        <>
            <div className='d-flex flex-wrap py-3'>
                <div className='slide w-100 overflow-hidden'>
                    <div className="myProductCard col-3 p-2">
                        <div className='d-flex gap-2 flex-column border rounded-4 position-relative' style={{ boxShadow: '0 4px 8px  rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <div className='heart-icon position-absolute rounded-5 px-2 py-1 d-flex align-items-center' style={{ backgroundColor: 'rgba(255,255,255,1)' }} onClick={() => myFav(myData[mySlider].productId)}>
                                <i className={`bi bi-${myData[mySlider].isFav ? 'heart-fill text-danger' : 'heart twhite'}`}></i>
                            </div>
                            <div className='producImg  rounded-4 overflow-hidden ratio ratio-1x1'>
                                <img src={myData[mySlider].imgs.coverImg} alt='img' className='w-100 h-100' style={{ objectFit: 'cover' }} />
                            </div>
                            <div className='product-title p-2 d-flex flex-column'>
                                <span>{myData[mySlider].productName}</span>
                                <h4>{myData[mySlider].price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
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