import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import AdminLogin from './component/AdminLogin';
import Admin from './component/admin/Admin';
import AddUsers from './component/admin/addUsers';
import AddProducts from './component/admin/addProducts';
import CreateProduct from './component/admin/createProduct';
import CreateCategory from './component/admin/CreateCategory';
import AddMenu from './component/admin/addMenu';
import Dashboard from './component/admin/AdminDashboard';

function App() {
  return (
    <>
      <div className='container-fluid p-0 '>
        <Routes>
          <Route exact path='/' element={<Header />} />
        </Routes>

        <Routes>
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route element={<Admin />}>
            <Route index path='/admin' element={<Dashboard/>}/>
            <Route path="/adminUsers" element={<AddUsers />} />
            <Route path="/adminProducts" element={<AddProducts />} />
            <Route path='/adminCategory' element={<CreateCategory />} />
            <Route path='/adminMenu' element={<AddMenu />} />
            <Route path='/createProduct' element={<CreateProduct />} />
            <Route path='/createProduct/:id' element={<CreateProduct />} />
            <Route path='/createCategory' element={<CreateCategory />} />
          </Route>
        </Routes>


      </div>
    </>
  );
}
export default App;
