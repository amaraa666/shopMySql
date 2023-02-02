import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function CreateProduct() {

    const id = useParams();
    console.log(id);

    const init = {
        nameVal: '',
        priceVal: '',
        saleVal: '',
        cateVal: '',
        isTrendingVal: false,
        descVal: '',
        quantity: '',
        coverImgVal: '',
        thumbnailImgVal: ''
    }
    const [myVal, setMyVal] = useState(init);
    const myObj = {
        productName: myVal.nameVal,
        category: myVal.cateVal,
        price: myVal.priceVal,
        desc: myVal.descVal,
        sale: myVal.saleVal,
        isTrending: myVal.isTrendingVal,
        quantity: myVal.quantity,
        imgs: {
            coverImg: myVal.coverImgVal,
            thumbnail: myVal.thumbnailImgVal
        }
    }
    console.log(myObj);
    function AddProducts() {
        fetch(`http://localhost:6060/api/products/${id}`, {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(myObj)
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
                            <input placeholder="Product name" type="text" className="form-control" id="productName" value={myVal.nameVal} onChange={(e) => setMyVal({ ...myVal, nameVal: e.target.value })} />
                        </label>
                        <label for='productPrice'>
                            <input placeholder="Price" type="number" className="form-control" id="productPrice" value={myVal.priceVal} onChange={(e) => setMyVal({ ...myVal, priceVal: e.target.value })} />
                        </label>
                        <label for='productSale'>
                            <input placeholder="sale" type="number" className="form-control" id="productSale" value={myVal.saleVal} onChange={(e) => setMyVal({ ...myVal, saleVal: e.target.value })} />
                        </label>
                        <label for='productSale'>
                            <select onChange={(e) => { setMyVal({ ...myVal, cateVal: e.target.value }) }}>
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
                            <input placeholder="Description" type="text" className="form-control" id="productDesc" value={myVal.descVal} onChange={(e) => setMyVal({ ...myVal, descVal: e.target.value })} />
                        </label>
                        <label for='quantity'>
                            <input placeholder="Quantify" type='number' className="form-control" id="quantity" value={myVal.quantity} onChange={(e) => setMyVal({ ...myVal, quantity: e.target.value })} />
                        </label>
                        <label for='productImgCover'>
                            <input placeholder="productCoverImg" type="text" className="form-control" id="productImgCover" value={myVal.coverImgVal} onChange={(e) => setMyVal({ ...myVal, coverImgVal: e.target.value })} />
                        </label>
                        <label for='productimgThumb'>
                            <input placeholder="productThumbnailImg" type="text" className="form-control" id="productimgThumb" value={myVal.thumbnailImgVal} onChange={(e) => setMyVal({ ...myVal, thumbnailImgVal: e.target.value })} />
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