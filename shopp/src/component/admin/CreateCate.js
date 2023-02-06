

export default function CreateCategory(){
    return(
        <>
        <div className="container-fluid" style={{backgroundColor: '#2a2a34'}}>
            <div className="createCate-section">
                <form className="col-8 d-flex flex-column gap-3">
                    <input placeholder="Category Name" className="form-control"/>
                    <input placeholder="Category id" className="form-control"/>
                    <div className="addCatebtn">
                        <div className="btn text-light fs-5" style={{backgroundColor: '#A477F8'}}>Save</div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}