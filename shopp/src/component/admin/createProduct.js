import { useState } from "react"



export default function CreateProduct(){
    const [myVal , setMyVal] = useState('')
    return(
        <>
        <div className="container-fluid">
            <div className="Header fs-4">Create Product</div>
            <div className="row">
                <form className="d-flex flex-column col-7 gap-2">
                    <label for='productName'>
                        <input placeholder="Product name"  type="text" className="form-control" id="productName" />
                    </label>
                    <label for='productPrice'>
                        <input placeholder="Price" type="number" className="form-control" id="productPrice" />
                    </label>
                    <label for='productSale'>
                        <input placeholder="sale" type="text" className="form-control" id="productSale" />
                    </label>
                    <label for='' className="d-flex gap-2">
                        <input type="radio" className="form-check" value="yes" name="isTrending" id="yes" />
                        <span>yes</span>
                        <input type="radio" className="form-check" value="no" name="isTrending" id="no"/>
                        <span>no</span>
                    </label>
                    <label for='productDesc'>
                        <input placeholder="Description" type="text" className="form-control" id="productDesc" />
                    </label>
                    <label for='quantity'>
                        <input placeholder="Quantify" type='number' className="form-control" id="quantity" />
                    </label>
                </form>
            </div>
        </div>
        </>
    )
}