import { useEffect } from "react"
import { useState } from "react"



export default function Addmenu() {
    const init = {
        menuName: '',
        iconName: '',
        link: ''
    }
    const [myVal, setMyVal] = useState([]);
    const [myData, setMydata] = useState([]);
    const [myModal, setmyModal] = useState(false);
    const [myID, setMyId] = useState('')
    const [editedData, setEditedData] = useState(false);

    function getData() {
        fetch('http://localhost:6060/api/menus')
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setMydata(data.result)
            })
    }
    useEffect(() => { getData() }, [])


    function Modal() {
        setmyModal(!myModal);
        setMyVal(init)
    }


    const AddMenu = () => {
        editedData ?
            fetch(`http://localhost:6060/api/menu/${myID}`, {
                method: 'PUT',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(myVal)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setEditedData(!editedData);
                    window.alert('Amjilttai shinecillee')
                    Modal()
                    getData();
                })
            :
            fetch('http://localhost:6060/api/menus', {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(myVal)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    getData();
                    window.alert('Amjilttai nemlee')
                    Modal();
                })
    }

    const deleteMenuItem = (id) => {
        fetch(`http://localhost:6060/api/menus/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData();
            })
    }

    const editMenuItem = (id) => {
        setMyId(id)
        Modal();
        setEditedData(!editedData)
        fetch(`http://localhost:6060/api/menu/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result[0])
                setMyVal(data.result[0])
            })
    }

    return (
        <>
            <div className={myModal ? 'd-flex col-10 text-dark justify-content-center' : 'd-none'} style={{ position: 'absolute' }} onClick={Modal}>
                <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff' }} className="col-5 rounded-3 p-3 d-flex flex-column align-items-center">
                    <span className="fs-4 text-center">Add menu</span>
                    <div className="col-10 d-flex flex-column gap-3 py-3">
                        <input value={myVal?.menuName} className='form-control' placeholder="MenuName" onChange={(e) => setMyVal({ ...myVal, menuName: e.target.value })} />
                        <input value={myVal?.iconName} className='form-control' placeholder="iconName" onChange={(e) => setMyVal({ ...myVal, iconName: e.target.value })} />
                        <input value={myVal?.link} className='form-control' placeholder="/Menu etc" onChange={(e) => setMyVal({ ...myVal, link: e.target.value })} />
                    </div>
                    <div className="d-flex col-10 justify-content-end gap-2">
                        <div className="btn border text-light bg-secondary" onClick={Modal}>close</div>
                        <div className="btn border text-light" style={{ backgroundColor: '#CE5EA8' }} onClick={AddMenu}>Save</div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex">
                <div className="d-flex flex-column gap-3 col-5">
                    <div className="d-flex">
                        <span className="myAddMenuAdmin-sec btn" style={{ backgroundColor: '#8B86E2' }} onClick={Modal}>Add Menu</span>
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
                                        <div className="btn bg-warning" onClick={() => editMenuItem(e.id)}>Edit</div>
                                        <div className="btn bg-danger" onClick={() => deleteMenuItem(e.id)}>Delete</div>
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
