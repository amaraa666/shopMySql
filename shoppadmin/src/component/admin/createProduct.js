import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function CreateProduct() {

    const { id } = useParams();
    console.log(id)

    const init = {
        productName: '',
        price: '',
        sale: '',
        category: '',
        isTrending: false,
        desc: '',
        quantity: '',
        imgs: {
            coverImg: '',
            thumbnail: []
        }
    }

    const [myVal, setMyVal] = useState({});
    console.log(myVal);

    const [loading, setLoading] = useState(false)

    const [isEdited, setIsEdited] = useState(false);

    async function sendFile(messageName, files) {
        console.log(files)

        const url = "https://api.cloudinary.com/v1_1/djiihhlsc/upload ";
        const newArr = []
        for (let i = 0; i < files[0].length; i++) {
            newArr.push(files[0][i]);
        }

        const promise = await Promise.all(
            newArr.map((file) => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('api_key', '954112839116766');
                formData.append('folder', 'shop');
                formData.append('upload_preset', 'lfumbvij');

                return axios.post(url, formData);
            })
        )

        console.log(promise)

        const arr = [];

        promise.map((res) => {
            arr.push(res.data.secure_url);
        });


        if (messageName === 'coverImg') {
            const myArr = { ...myVal }
            myArr.imgs.coverImg = arr[0];
            setMyVal(myArr);
        } else {
            const myArr = { ...myVal }
            myArr.imgs.thumbnail = arr;
            setMyVal(myArr);
        }

        setLoading(false)

    }

    function getData() {
        fetch(`http://localhost:6060/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyVal(data.result[0]);
                setIsEdited(true)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        if (id) {
            getData();
        } else {
            setMyVal(init);
            setIsEdited(false);
        }
    }, [])
    function AddProducts() {
        if (isEdited) {
            console.log(id)
            fetch(`http://localhost:6060/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(myVal)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(true)
                    setMyVal(init)
                    window.alert("Amjilttai");
                })
                .catch((err) => console.log(err))
        } else {
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
    }
    return (
        <>
            <div className="container-fluid" style={{ background: '#2a2a34' }}>
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
                            <select value={myVal.category} onChange={(e) => { setMyVal({ ...myVal, category: e.target.value }) }}>
                                <option value='0'>Choose...</option>
                                <option value='phone'>Phone</option>
                                <option value='clothes'>Clothes</option>
                                <option value='bags'>Bags</option>
                            </select>
                        </label>
                        <span className="fs-5">isTrending</span>
                        <label for='' className="d-flex gap-2">
                            <input type="radio" className="form-check" value={true} name="isTrending" id="yes" onChange={(e) => e.target.checked ? setMyVal({ ...myVal, isTrending: true }) : e.value} />
                            <span>yes</span>
                            <input type="radio" className="form-check" value={false} name="isTrending" id="no" onChange={(e) => e.target.checked ? setMyVal({ ...myVal, isTrending: false }) : e.value} />
                            <span>no</span>
                        </label>
                        <label for='productDesc'>
                            <input placeholder="Description" type="text" className="form-control" id="productDesc" value={myVal.desc} onChange={(e) => setMyVal({ ...myVal, desc: e.target.value })} />
                        </label>
                        <label for='quantity'>
                            <input placeholder="Quantity" type='number' className="form-control" id="quantity" value={myVal.quantity} onChange={(e) => setMyVal({ ...myVal, quantity: e.target.value })} />
                        </label>
                        <label for='productImgCover'>
                            <input placeholder="productCoverImg" type="file" multiple className="form-control" id="productImgCover" onChange={(e) => {
                                const arr = []
                                arr.push(e.target.files)
                                sendFile("coverImg", arr)
                            }} />
                            {isEdited ?
                                <div className="col-3 p-2">
                                    <img src={myVal.imgs.coverImg} className="w-100" alt="img" />
                                </div>
                                : ''}
                        </label>
                        <label for='productimgThumb'>
                            <input placeholder="productThumbnailImg" type="file" multiple className="form-control" id="productimgThumb" onChange={(e) => {
                                const arr = []
                                arr.push(e.target.files)
                                sendFile("thumbnail", arr)
                            }} />
                            {isEdited ?
                                <div className="col-3 p-2">
                                    {myVal.imgs.thumbnail.map((el) => {
                                        return <img src={el} className="w-100" alt="thumbnail" />
                                    })}
                                </div>
                                : ''}
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