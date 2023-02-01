import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Header from './component/Header';
import AdminLogin from './component/AdminLogin';
import Admin from './component/admin/Admin';
import AddUsers from './component/admin/addUsers';
import AddProducts from './component/admin/addProducts';
import CreateProduct from './component/admin/createProduct';

function App() {
  return (
    <>
      <div className='container-fluid p-0 '>
        <Routes>
          <Route exact path='/' element={<Header/>}/>
        </Routes>
        {/* <Header /> */}

        <Routes>
          <Route exact path='/adminlogin' element={<AdminLogin/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
            <Route element={<Admin/>}>
                <Route index path="/adminUsers" element={<AddUsers/>}/>
                <Route path="/adminProducts" element={<AddProducts/>}/>
                <Route path='/createProduct' element={<CreateProduct/>}/>
                <Route path='/createUser'/>
            </Route>
        </Routes>


      </div>
    </>
  );
}
export default App;
