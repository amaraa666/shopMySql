import { useState } from "react"
import { useLocation } from "react-router-dom";
import axios from 'axios'



export default function CreateProduct({ isEdited }) {

    console.log(isEdited)

    // const location = useLocation()
    // const myPath = location.pathname.split('/')

    // console.log(myPath[myPath.length - 1])

    const init = {
        productName: '',
        price: '',
        sale: '',
        category: '',
        isTrendingVal: false,
        desc: '',
        quantity: '',
        imgs: {
            coverImg: '',
            thumbnail: ''
        }
    }

    console.log()
    const [myVal, setMyVal] = useState(init);
    console.log(myVal)

    function AddProducts() {
        fetch(`http://localhost:6060/api/products`, {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(myVal)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyVal(init);
                window.alert("success");
            })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="Header fs-4">Create Product</div>
                <div className="row">
                    <form className="d-flex flex-column col-7 gap-2">
                        <label for='productName'>
                            <input placeholder="Product name" type="text" className="form-control" id="productName" value={myVal.productName} onChange={(e) => setMyVal({ ...myVal, productName: e.target.value })} />
                        </label>
                        <label for='productPrice'>
                            <input placeholder="Price" type="number" className="form-control" id="productPrice" value={myVal.price} onChange={(e) => setMyVal({ ...myVal, price: e.target.value })} />
                        </label>
                        <label for='productSale'>
                            <input placeholder="sale" type="number" className="form-control" id="productSale" value={myVal.sale} onChange={(e) => setMyVal({ ...myVal, sale: e.target.value })} />
                        </label>
                        <label for='productSale'>
                            <select onChange={(e) => { setMyVal({ ...myVal, category: e.target.value }) }}>
                                <option value='0'>Choose...</option>
                                <option value='phone'>Phone</option>
                                <option value='clothes'>Clothes</option>
                                <option value='bags'>Bags</option>
                            </select>
                        </label>
                        <span className="fs-5">isTrending</span>
                        <label for='' className="d-flex gap-2">
                            <input type="radio" className="form-check" value={false} name="isTrending" id="yes" onChange={(e) => e.target.checked ? setMyVal({ ...myVal, isTrendingVal: true }) : myVal} />
                            <span>yes</span>
                            <input type="radio" className="form-check" value={true} name="isTrending" id="no" onChange={(e) => e.target.checked ? setMyVal({ ...myVal, isTrendingVal: false }) : myVal} />
                            <span>no</span>
                        </label>
                        <label for='productDesc'>
                            <input placeholder="Description" type="text" className="form-control" id="productDesc" value={myVal.desc} onChange={(e) => setMyVal({ ...myVal, desc: e.target.value })} />
                        </label>
                        <label for='quantity'>
                            <input placeholder="Quantity" type='number' className="form-control" id="quantity" value={myVal.quantity} onChange={(e) => setMyVal({ ...myVal, quantity: e.target.value })} />
                        </label>
                        <label for='productImgCover'>
                            <input placeholder="productCoverImg" type="file" className="form-control" id="productImgCover" value={myVal.imgs.coverImg} onChange={(e) => {
                                const url = "https://api.cloudinary.com/v1_1/djiihhlsc/upload ";

                                const formData = new FormData()
                                let file = e.target.files[0];

                                formData.append('file', file)
                                formData.append('api_key', '954112839116766')
                                formData.append('folder', 'shop')
                                formData.append('upload_preset', 'lfumbvij')

                                axios
                                    .post(url, formData)
                                    .then((res) => {

                                        console.log(res);

                                        const myArr = { ...myVal }
                                        myArr.imgs.coverImg = res.data.secure_url
                                        setMyVal(myArr);
                                    })
                                    .catch((err) => console.log(err))


                            }} />
                        </label>
                        <label for='productimgThumb'>
                            <input placeholder="productThumbnailImg" type="file" className="form-control" id="productimgThumb" value={myVal.imgs.thumbnail} onChange={(e) => {
                                const url = "https://api.cloudinary.com/v1_1/djiihhlsc/upload ";

                                const formData = new FormData()
                                let file = e.target.files[0];

                                formData.append('file', file)
                                formData.append('api_key', '954112839116766')
                                formData.append('folder', 'shop')
                                formData.append('upload_preset', 'lfumbvij')

                                axios
                                    .post(url, formData)
                                    .then((res) => {

                                        console.log(res);

                                        const myArr = { ...myVal }
                                        myArr.imgs.thumbnail = res.data.secure_url
                                        setMyVal(myArr);
                                    })
                                    .catch((err) => console.log(err))
                            }} />
                        </label>
                        <div className="save-section">
                            <div className="btn border text-light" style={{ backgroundColor: '#1C4F2A' }} onClick={AddProducts}>Add product</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}