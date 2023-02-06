import { useEffect } from "react"
import { useState } from "react"



export default function Addmenu() {

    const init = {
        menuName: '',
        iconName: '',
        link: ''
    }
    const [myVal, setMyVal] = useState([]);
    const [editedData, setEditedData] = useState([]);
    const [myData, setMydata] = useState([]);
    const [isEdited, setIsEdited] = useState(false);
    const [myModal, setmyModal] = useState(false);


    function getDataId() {
        fetch(`http://localhost:6060/api/menu/${editedData}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.result[0]);
                setMyVal(data.result[0]);
                setIsEdited(!isEdited);
            })
    }

    useEffect(() => { getDataId() }, [])

    // if (isEdited) {
    //     getDataId()
    // }
    function getData() {
        fetch('http://localhost:6060/api/menus')
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setMydata(data.result)
            })
    }
    useEffect(() => { getData() }, [])


    function AddMenu() {
        setmyModal(!myModal);
        if (!isEdited) {
            setMyVal(init)
        }
    }

    function EditMenu(id) {
        setEditedData(id)
        setmyModal(!myModal);
        setIsEdited(!isEdited)
    }

    return (
        <>
            <div className={myModal ? 'd-flex w-100 text-dark justify-content-center' : 'd-none'} style={{ position: 'absolute' }} onClick={AddMenu}>
                <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff' }} className="col-5 rounded-3 p-3 d-flex flex-column align-items-center">
                    <span className="fs-4 text-center">Add menu</span>
                    <div className="col-10 d-flex flex-column gap-3 py-3">
                        <input value={myVal?.menuName} className='form-control' placeholder="MenuName" onChange={(e) => setMyVal({ ...myVal, menuName: e.target.name })} />
                        <input value={myVal?.iconName} className='form-control' placeholder="iconName" onChange={(e) => setMyVal({ ...myVal, iconName: e.target.name })} />
                        <input value={myVal?.link} className='form-control' placeholder="/Menu etc" onChange={(e) => setMyVal({ ...myVal, link: e.target.name })} />
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex">
                <div className="d-flex flex-column gap-3 col-5">
                    <div className="d-flex">
                        <span className="myAddMenuAdmin-sec btn" style={{ backgroundColor: '#8B86E2' }} onClick={AddMenu}>Add Menu</span>
                    </div>
                    {myData.map((e) => {
                        return (
                            <>
                                <div className="d-flex">
                                    <div className="d-flex gap-2">
                                        <input value={e.menuName} disabled className="form-control" />
                                        <input value={e.iconName} disabled className="form-control" />
                                        <input value={e.link} disabled className="form-control" />
                                    </div>
                                    <div className="d-flex gap-2 p-2">
                                        <div className="btn bg-warning" onClick={() => EditMenu(e.id)}>Edit</div>
                                        <div className="btn bg-danger">Delete</div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
